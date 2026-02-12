import { Page, Locator, expect } from '@playwright/test';

export class MenuBar {
    readonly menuBarContainer: Locator;
    readonly contactLink: Locator;
    readonly signinLink: Locator;
    readonly loginUserName: Locator;
    readonly categoriesLink: Locator;
    readonly rentalsTitle: Locator;   
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.menuBarContainer = page.locator('[aria-label="Main menu"]');
        this.contactLink = this.menuBarContainer.locator('a[data-test="nav-contact"]');
        this.signinLink = this.menuBarContainer.locator('a[data-test="nav-sign-in"]');
        this.loginUserName = this.menuBarContainer.locator('a[data-test="nav-menu"]');
        this.categoriesLink = page.getByRole( 'button', { name: ' Categories ' });
        this.rentalsTitle = page.locator('h1', {hasText: 'Rentals'});
    }

    async checkTransitionByCategories() {
        const categories = [
        { categoryName: 'Hand Tools', slug: 'hand-tools', pageTitle: 'Category: Hand Tools' },
        { categoryName: 'Power Tools', slug: 'power-tools', pageTitle: 'Category: Power Tools' },
        { categoryName: 'Other', slug: 'other', pageTitle: 'Category: Other' },
        { categoryName: 'Special Tools', slug: 'special-tools', pageTitle: 'Category: Special Tools' },
    ];

        for (const { categoryName, slug, pageTitle } of categories) {
            await this.categoriesLink.click();
            await this.page.getByRole('link', { name: categoryName }).click();

            await expect(this.page).toHaveURL(new RegExp(`^https://practicesoftwaretesting.com/category/${slug}`));
            expect(this.page.getByText(`${pageTitle}`)).toBeVisible();
        }
    }

    async checkTransitionToRentalsCategory() {
        const rentalCategory = { categoryName: 'Rentals', slug: 'rentals'};
        await this.categoriesLink.click();
        await this.page.getByRole('link', { name: rentalCategory.categoryName }).click();

        await expect(this.page).toHaveURL(new RegExp(`^https://practicesoftwaretesting.com/${rentalCategory.slug}`));
        await expect(this.rentalsTitle).toBeVisible();
    }
} 

