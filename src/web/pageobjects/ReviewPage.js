import { BasePage } from './BasePage';
class ReviewPage extends BasePage {
    constructor(page) {
        super(page);
        this.paymentMethodTxt = page.locator("//*[text()='Payment Method']");
        this.qtyTxt = page.locator("//div[@class='details-qty']//span[@class='value']");
        this.productNameTxt = page.locator(".product-item-name");
        this.placeOrderBtn = page.locator("[class*='action primary checkout']");
    }

    /**
     * Waits for the review page to fully load.
     */
    async waitForPageToLoad() {
        await this.paymentMethodTxt.waitFor({ state: 'attached' });
    }

    /**
     * Retrieves the quantity of the product in the review section.
     * @returns {Promise<string>} The quantity as a string.
     */
    async getQuantity() {
        return await this.qtyTxt.textContent();
    }

    /**
     * Retrieves the product name from the review section.
     * @returns {Promise<string>} The product name as a string.
     */
    async getProductName() {
        return await this.productNameTxt.textContent();
    }

    /**
     * Clicks the "Place Order" button to finalize the order.
     */
    async clickOnPlaceOrderBtn() {
        await this.placeOrderBtn.click();
    }
}

module.exports = { ReviewPage };
