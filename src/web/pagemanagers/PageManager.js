const { HomePage } = require('../pageobjects/HomePage');
const { ProductListPage } = require('../pageobjects/ProductListPage');
const { ProductDetailPage } = require('../pageobjects/ProductDetailPage');
const { MenuPage } = require('../pageobjects/MenuPage');
const { CheckoutPage } = require('../pageobjects/CheckoutPage');
const { ReviewPage } = require('../pageobjects/ReviewPage');
const { OrderSuccessPage } = require('../pageobjects/OrderSuccessPage');

/**
 * PageManager class to manage all page objects for the application.
 */
class PageManager {
    /**
     * Creates an instance of the PageManager.
     * @param {Object} page - The Playwright page object used for interactions.
     */
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.menuPage = new MenuPage(page);
        this.productDetailPage = new ProductDetailPage(page);
        this.productListPage = new ProductListPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.reviewPage = new ReviewPage(page);
        this.orderSuccessPage = new OrderSuccessPage(page);
    }

    /**
     * Returns the HomePage object.
     * @returns {HomePage} The HomePage object.
     */
    getHomePage() {
        return this.homePage;
    }

    /**
     * Returns the ProductDetailPage object.
     * @returns {ProductDetailPage} The ProductDetailPage object.
     */
    getProductDetailPage() {
        return this.productDetailPage;
    }

    /**
     * Returns the ProductListPage object.
     * @returns {ProductListPage} The ProductListPage object.
     */
    getProductListPage() {
        return this.productListPage;
    }

    /**
     * Returns the MenuPage object.
     * @returns {MenuPage} The MenuPage object.
     */
    getMenuPage() {
        return this.menuPage;
    }

    /**
     * Returns the CheckoutPage object.
     * @returns {CheckoutPage} The CheckoutPage object.
     */
    getCheckoutPage() {
        return this.checkoutPage;
    }

    /**
     * Returns the ReviewPage object.
     * @returns {ReviewPage} The ReviewPage object.
     */
    getReviewPage() {
        return this.reviewPage;
    }

    /**
     * Returns the OrderSuccessPage object.
     * @returns {OrderSuccessPage} The OrderSuccessPage object.
     */
    getOrderSuccessPage() {
        return this.orderSuccessPage;
    }
}

module.exports = { PageManager };
