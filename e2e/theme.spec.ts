import { test, expect } from '@playwright/test';

// The theme toggle switches light/dark and the choice survives a page reload.
test('dark mode toggle switches theme and remembers it', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');

    await expect(html).toHaveAttribute('data-theme', 'light');

    await page.getByRole('button', { name: 'Switch to dark theme' }).click();
    await expect(html).toHaveAttribute('data-theme', 'dark');

    await page.reload();
    await expect(html).toHaveAttribute('data-theme', 'dark');
    // The button now offers the way back
    await expect(page.getByRole('button', { name: 'Switch to light theme' })).toBeVisible();
});
