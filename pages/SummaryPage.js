class SummaryPage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('dreams-total.html');
    }
}

module.exports = { SummaryPage };