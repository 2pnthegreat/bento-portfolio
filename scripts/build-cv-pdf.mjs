// Turns cv/cv.html into public/CV_PDF.pdf (the file the website's Resume card links to),
// and copies it to public/Resume.pdf so older links to that file also get the latest CV.
// Usage: npm run cv:pdf
// Needs Google Chrome installed and an internet connection (the CV loads Tailwind from a CDN).
import { chromium } from 'playwright-core';
import { copyFile, readFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const htmlPath = `${root}cv/cv.html`;
const pdfPath = `${root}public/CV_PDF.pdf`;
const legacyPdfPath = `${root}public/Resume.pdf`;

let browser;
try {
    browser = await chromium.launch({ channel: 'chrome' }); // the Chrome already installed on this computer
} catch {
    console.error('Could not start Google Chrome. Install Chrome, then run `npm run cv:pdf` again.');
    process.exit(1);
}

const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await page.emulateMedia({ media: 'print' }); // use the @media print rules in cv.html
await page.pdf({ path: pdfPath, format: 'A4', printBackground: true });
await browser.close();
await copyFile(pdfPath, legacyPdfPath);

// Warn if the CV no longer fits on one page
const pdf = await readFile(pdfPath, 'latin1');
const pages = (pdf.match(/\/Type\s*\/Page[^s]/g) ?? []).length;
console.log(`Saved public/CV_PDF.pdf and public/Resume.pdf (${pages} page${pages === 1 ? '' : 's'})`);
if (pages > 1) {
    console.warn('The CV spills onto a second page: shorten some text, or lower `zoom` in the @media print block of cv/cv.html.');
}
