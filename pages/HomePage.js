class HomePage {
    constructor(page) {
        this.page = page;
        this.myDreamsButton = page.getByText('My Dreams');
    }

    async open() {
        await this.page.goto('index.html');
    }

    async waitForLoading() {
        await this.page.waitForTimeout(3500);
    }

    async clickMyDreams() {
        await this.myDreamsButton.click();
    }
}

module.exports = { HomePage };