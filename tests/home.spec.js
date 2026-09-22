const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('Home page loading animation and main content', async ({ page }) => {

    const home = new HomePage(page);

    await home.open();

    await expect(
        page.getByText('Loading your dream portal...')
    ).toBeVisible();

    await page.screenshot({
        path: 'screenshots/01_loading.png',
        fullPage: true
    });

    await expect(
        page.getByText('Loading your dream portal...')
    ).toBeHidden({ timeout: 5000 });

    await expect(home.myDreamsButton).toBeVisible();

    await page.screenshot({
        path: 'screenshots/02_home.png',
        fullPage: true
    });
});


test('My Dreams opens diary and summary pages', async ({ page, context }) => {

    const home = new HomePage(page);

    await home.open();

    await expect(
        page.getByText('Loading your dream portal...')
    ).toBeHidden({ timeout: 5000 });

    await expect(home.myDreamsButton).toBeVisible();

    const pagesBefore = context.pages().length;

    await home.clickMyDreams();

    await page.waitForTimeout(1000);

    const allPages = context.pages();

    console.log('Pages opened:', allPages.length);
    console.log(
        'URLs:',
        allPages.map(p => p.url())
    );

    expect(allPages.length).toBeGreaterThan(pagesBefore);

    await page.screenshot({
        path: 'screenshots/03_dream_tabs.png',
        fullPage: true
    });
});