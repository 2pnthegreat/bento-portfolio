// Turns cv/cv.html into public/CV_PDF.pdf (the file the website's Resume card links to),
// and copies it to public/Resume.pdf so older links to that file also get the latest CV.
//
// Usage:
//   npm run cv:pdf            one page sized to fit the CV exactly (no A4 / Letter paper)
//   npm run cv:pdf -- --a4    A4 paper instead, e.g. when someone asks for a printable CV
//
// Needs Google Chrome installed and an internet connection (the CV loads Tailwind from a CDN).
import { chromium } from 'playwright-core';
import { copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const htmlPath = `${root}cv/cv.html`;
const pdfPath = `${root}public/CV_PDF.pdf`;
const legacyPdfPath = `${root}public/Resume.pdf`;

const useA4 = process.argv.includes('--a4');
// Page width in fit mode: the CV card is designed at 900px wide (max-w-[900px] in cv.html)
const PAGE_WIDTH = 900;

let browser;
try {
    browser = await chromium.launch({ channel: 'chrome' }); // the Chrome already installed on this computer
} catch {
    console.error('Could not start Google Chrome. Install Chrome, then run `npm run cv:pdf` again.');
    process.exit(1);
}

// A short viewport so `min-h-screen` in cv.html doesn't pad the page with empty space
const page = await browser.newPage({ viewport: { width: PAGE_WIDTH, height: 100 } });
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' }); // use the @media print rules in cv.html

if (useA4) {
    await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
} else {
    // The print rules shrink the CV (zoom 0.8) to squeeze it onto A4; a fitted page doesn't need that
    await page.addStyleTag({ content: '@media print { body { zoom: 1 !important; } }' });
    const height = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));
    await page.pdf({
        path: pdfPath,
        width: `${PAGE_WIDTH}px`,
        height: `${height + 1}px`, // +1px so rounding never pushes the last line onto a second page
        printBackground: true,
        pageRanges: '1',
    });
}
await browser.close();
await copyFile(pdfPath, legacyPdfPath);

const pdf = await readFile(pdfPath, 'latin1');
const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
console.log(`Saved public/CV_PDF.pdf and public/Resume.pdf (${useA4 ? 'A4' : 'fitted page'}, ${pages} page${pages === 1 ? '' : 's'})`);
if (useA4 && pages > 1) {
    console.warn('The CV spills onto a second A4 page: shorten some text, or lower `zoom` in the @media print block of cv/cv.html.');
}
