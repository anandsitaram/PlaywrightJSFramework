import { BasePage } from './BasePage';
class OrderSuccessPage extends BasePage {
    constructor(page) {
        super(page);
        this.orderNoTxt = page.locator("div[class='checkout-success'] p span");
        this.orderSuccessHeader = page.locator("//*[text()='Thank you for your purchase!']");
    }

    /**
     * Retrieves the order number from the success message.
     * @returns {Promise<string>} The order number as a string.
     */
    async getOrderNo() {
        return await this.orderNoTxt.textContent();
    }

    /**
     * Waits for the order success page to fully load.
     */
    async waitForPageToLoad() {
        await this.orderSuccessHeader.waitFor({ state: 'attached' });
    }
}

module.exports = { OrderSuccessPage };
