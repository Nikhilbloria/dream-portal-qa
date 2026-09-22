const { test, expect } = require('@playwright/test');
const { SummaryPage } = require('../pages/SummaryPage');

test('Dream summary statistics are correct', async ({ page }) => {

    const summary = new SummaryPage(page);

    await summary.open();

    const body = page.locator('body');

    // Verify summary statistics
    await expect(body).toContainText(/Good Dreams\s+6/);
    await expect(body).toContainText(/Bad Dreams\s+4/);
    await expect(body).toContainText(/Total Dreams\s+10/);
    await expect(body).toContainText(/Recurring Dreams\s+2/);

    await page.screenshot({
        path: 'screenshots/06_summary.png',
        fullPage: true
    });
});