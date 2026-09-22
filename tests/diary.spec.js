const { test, expect } = require('@playwright/test');
const { DiaryPage } = require('../pages/DiaryPage');

test('Dream diary contains exactly 10 valid entries', async ({ page }) => {

    const diary = new DiaryPage(page);

    await diary.open();

    await page.screenshot({
        path: 'screenshots/04_diary.png',
        fullPage: true
    });

    const rows = await diary.getRows();

    // Verify exactly 10 dream entries
    await expect(rows).toHaveCount(10);

    const dreamNames = [];

    // Validate every row
    for (let i = 0; i < await rows.count(); i++) {

        const cells = rows.nth(i).locator('td');

        // Every row must contain 3 columns
        await expect(cells).toHaveCount(3);

        const dreamName = (await cells.nth(0).innerText()).trim();
        const daysAgo = (await cells.nth(1).innerText()).trim();
        const dreamType = (await cells.nth(2).innerText()).trim();

        // Dream name must not be empty
        expect(dreamName).not.toBe('');

        // Days Ago must not be empty
        expect(daysAgo).not.toBe('');

        // Dream type must be Good or Bad
        expect(dreamType).toMatch(/^(Good|Bad)$/);

        dreamNames.push(dreamName);
    }

    // Count how many times each dream appears
    const counts = {};

    for (const name of dreamNames) {
        counts[name] = (counts[name] || 0) + 1;
    }

    // A recurring dream appears more than once
    const recurringDreams = Object.keys(counts)
        .filter(name => counts[name] > 1);

    // Verify the two recurring dreams
    expect(recurringDreams).toEqual([
        'Flying over mountains',
        'Lost in maze'
    ]);

    expect(recurringDreams.length).toBe(2);

    // Evidence screenshot
    await page.screenshot({
        path: 'screenshots/05_diary_validation.png',
        fullPage: true
    });

    // Recurring dreams evidence screenshot
    await page.screenshot({
        path: 'screenshots/07_recurring.png',
        fullPage: true
    });
});