import { BasePage } from './BasePage';
class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
        this.orderSummaryHeader = page.locator("//*[text()='Order Summary']/following-sibling::div//div");
        this.firstNameInput = page.locator("[name='firstname']");
        this.lastNameInput = page.locator("[name='lastname']");
        this.streetInput = page.locator("[name='street[0]']");
        this.cityInput = page.locator("[name='city']");
        this.regionSelect = page.locator("[name='region_id']");
        this.postcodeInput = page.locator("[name='postcode']");
        this.telephoneInput = page.locator("[name='telephone']");
        this.flatRateOption = page.locator("[value='flatrate_flatrate']");
        this.tableRateOption = page.locator("[value='tablerate_bestway']");
        this.continueButton = page.locator("[class*='button action continue primary']");
        this.emailInput = page.locator("div[class*='control _with-tooltip'] input[id='customer-email']");
    }

    /**
     * Fills in the email address in the checkout form.
     * @param {string} email - The email address to fill in.
     */
    async fillEmail(email) {
        await this.emailInput.fill(email);
    }

    /**
     * Fills in the first name in the checkout form.
     * @param {string} firstName - The first name to fill in.
     */
    async fillFirstName(firstName) {
        await this.firstNameInput.fill(firstName);
    }

    /**
     * Fills in the last name in the checkout form.
     * @param {string} lastName - The last name to fill in.
     */
    async fillLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    /**
     * Fills in the street address in the checkout form.
     * @param {string} streetAddress - The street address to fill in.
     */
    async fillStreetAddress(streetAddress) {
        await this.streetInput.fill(streetAddress);
    }

    /**
     * Fills in the city in the checkout form.
     * @param {string} city - The city to fill in.
     */
    async fillCity(city) {
        await this.cityInput.fill(city);
    }

    /**
     * Selects the region from the dropdown in the checkout form.
     * @param {string} region - The region to select.
     */
    async selectRegion(region) {
        await this.regionSelect.selectOption(region);
    }

    /**
     * Fills in the postcode in the checkout form.
     * @param {string} postCode - The postcode to fill in.
     */
    async fillPostcode(postCode) {
        await this.postcodeInput.fill(postCode);
    }

    /**
     * Fills in the telephone number in the checkout form.
     * @param {string} mobileNo - The telephone number to fill in.
     */
    async fillTelephone(mobileNo) {
        await this.telephoneInput.fill(mobileNo);
    }

    /**
     * Selects the shipping method in the checkout form.
     * @param {string} shippingMethod - The shipping method to select ('flatrate' or 'tablerate').
     * @throws {Error} If an invalid shipping method is provided.
     */
    async selectShippingMethod(shippingMethod) {
        switch (shippingMethod.toLowerCase()) {
            case 'flatrate':
                await this.flatRateOption.click();
                break;
            case 'tablerate':
                await this.tableRateOption.click();
                break;
            default:
                throw new Error("Invalid Option");
        }
    }

    /**
     * Clicks the continue button to proceed with the checkout process.
     */
    async clickContinue() {
        await this.continueButton.click();
    }

    /**
     * Fills the entire checkout form with the provided address data.
     * @param {Object} addressData - The address data containing email, first name, last name, street address, city, region, postcode, telephone, and shipping method.
     */
    async fillCheckoutForm(addressData) {
        await this.fillEmail(addressData.email);
        await this.fillFirstName(addressData.firstName);
        await this.fillLastName(addressData.lastName);
        await this.fillStreetAddress(addressData.streetAddress);
        await this.fillCity(addressData.city);
        await this.selectRegion(addressData.region);
        await this.fillPostcode(addressData.postCode);
        await this.fillTelephone(addressData.mobileNo);
        await this.selectShippingMethod(addressData.shippingMethod);
    }

    /**
     * Waits for the order summary header to be attached to the DOM, indicating the page has loaded.
     */
    async waitForPageToLoad() {
        await this.orderSummaryHeader.last().waitFor({ state: 'attached' });
    }
}

module.exports = { CheckoutPage };
