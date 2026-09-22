const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        baseURL: 'https://arjitnigam.github.io/myDreams/',
        headless: false,
        screenshot: 'only-on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },

    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }]
    ]
});