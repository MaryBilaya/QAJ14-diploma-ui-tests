import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';
import { expect } from '@playwright/test';

export class HomePage extends BasePage {
    readonly homeUrl: string;
    readonly signInButton: Locator;
    readonly filtersContainer: Locator;
    readonly sortFilter: Locator;
    readonly cardsContainer: Locator;
    readonly cardPrices: Locator;

    constructor(page: Page) {
        super(page);
        this.homeUrl = 'https://practicesoftwaretesting.com/';
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
        this.filtersContainer = page.locator('//div[@data-test="filters" and @id="filters"]');
        this.sortFilter = page.locator('[data-test="sort"]');
        this.cardsContainer = page.locator('div.container');
        this.cardPrices = this.cardsContainer.locator('span[data-test="product-price"]');
    }

    async openHomePage() {
        await this.navigate(this.homeUrl);
    }

    async waitForPriceSortHighToLow() {
        await this.cardPrices.first().waitFor();
        await expect(this.cardPrices.first()).toHaveText('$89.55', { timeout: 10_000});
    }

    async waitForPriceSortLowToHigh() {
        await this.cardPrices.first().waitFor();
        await expect(this.cardPrices.first()).toHaveText('$3.55', { timeout: 10_000});
    }    

    async getAllCardPricesOnTheFirstPage() {
        const count = await this.cardPrices.count();
        const pricesList: number[] = [];

        for (let i = 0; i < count; i++) {
            const priceText = ((await this.cardPrices.nth(i).innerText()).trim());    //$14.15 string
            const priceNum = parseFloat(priceText.replace(/[^\d.]/g, ''));            //14.15  number
            pricesList.push(priceNum); 
        }

        return pricesList
    }
}