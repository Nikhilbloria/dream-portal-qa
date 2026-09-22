class DiaryPage {
    constructor(page) {
        this.page = page;
        this.rows = page.locator('table tbody tr');
    }

    async open() {
        await this.page.goto('dreams-diary.html');
    }

    async getRows() {
        return this.rows;
    }
}

module.exports = { DiaryPage };