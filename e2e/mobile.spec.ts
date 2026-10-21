import { test, expect } from '@playwright/test';

// Phone-sized screen (iPhone-like width)
test.use({ viewport: { width: 375, height: 812 }, hasTouch: true });

test.describe('Mobile layout', () => {
    test('page does not scroll sideways', async ({ page }) => {
        await page.goto('/');
        const { scrollWidth, innerWidth } = await page.evaluate(() => ({
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
        }));
        expect(scrollWidth).toBeLessThanOrEqual(innerWidth);
    });

    test('menu button opens the mobile menu', async ({ page }) => {
        await page.goto('/');
        // The desktop links are hidden at this width
        const menuAbout = page.getByRole('navigation').getByRole('link', { name: 'About', exact: true });
        await expect(menuAbout).toBeHidden();

        await page.getByRole('button', { name: 'Toggle Mobile Menu' }).click();
        await expect(menuAbout).toBeVisible();
    });
});
