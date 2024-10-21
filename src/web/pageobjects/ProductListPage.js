import { BasePage } from './BasePage';
class ProductListPage extends BasePage {
  constructor(page) {
      super(page);
  }

  /**
   * Clicks on a product by its name.
   * @param {string} productName - The name of the product to click on.
   */
  async clickOnProduct(productName) {
      const specificProduct = this.page.locator("strong[class*='product name'] [class='product-item-link']").filter({ hasText: productName });
      
      await specificProduct.waitFor({ state: 'visible' });
      await specificProduct.click();
  }
}

module.exports = { ProductListPage };
