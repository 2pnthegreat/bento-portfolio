import { test, expect } from '@playwright/test';

// Home page: the key content a recruiter should see is actually there.
test.describe('Home page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('shows my name, role and current position', async ({ page }) => {
        await expect(page).toHaveTitle('Kampanart Poonpanao — Full-stack Developer');
        await expect(page.getByRole('heading', { level: 1 })).toHaveText('กัมปนาท พูนพะเนาว์');
        await expect(page.getByText('Junior Web Developer · Siam Innovator')).toBeVisible();
    });

    test('Resume card links to the CV PDF', async ({ page }) => {
        const resume = page.getByRole('link', { name: /Resume/ });
        await expect(resume).toHaveAttribute('href', '/CV_PDF.pdf');
        await expect(resume).toHaveAttribute('target', '_blank');
    });

    test('lists all three projects', async ({ page }) => {
        const main = page.locator('main');
        await expect(main.getByRole('link', { name: /Sukreep POS/ })).toHaveAttribute('href', 'https://sukreep.com');
        await expect(main.getByRole('link', { name: /E-Procurement/ })).toHaveAttribute('href', '/projects/e-procurement');
        await expect(main.getByRole('link', { name: /Fixed Asset/ })).toHaveAttribute('href', '/projects/fix-asset');
    });

    test('stats card shows the final numbers', async ({ page }) => {
        // Each stat is a <dd> (the number) inside the stats card
        await expect(page.getByTestId('stats').locator('dd')).toHaveText(['2+', '3', '2']);
    });
});
