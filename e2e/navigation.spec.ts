import { test, expect } from '@playwright/test';
import { experience } from '../data/profile';

// Moving between pages the way a visitor would: by clicking, not by typing URLs.
test.describe('Navigation', () => {
    test('About link opens the About page with the work timeline', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('navigation').getByRole('link', { name: 'About', exact: true }).click();

        await expect(page).toHaveURL('/about');
        await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible();
        // One entry per job in data/profile.ts, so adding a job there doesn't need a test change
        await expect(page.getByTestId('experience-timeline').locator(':scope > li')).toHaveCount(experience.length);
    });

    test('a project card opens its case study', async ({ page }) => {
        await page.goto('/');
        await page.locator('main').getByRole('link', { name: /E-Procurement/ }).click();

        await expect(page).toHaveURL('/projects/e-procurement');
        await expect(page.getByRole('heading', { level: 1 })).toHaveText('E-Procurement');
        // exact: the page also has an "E-Procurement System Dashboard" screenshot
        await expect(page.getByRole('img', { name: 'E-Procurement', exact: true })).toBeVisible(); // cover hero
        await expect(page.getByRole('heading', { name: /Scope/ })).toBeVisible();
    });
});
