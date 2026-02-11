import { Page, Locator } from '@playwright/test';

export class MenuBar {
    readonly menuBarContainer: Locator;
    readonly contactLink: Locator;
    readonly signinLink: Locator;

    constructor(page: Page) {
        this.menuBarContainer = page.locator('[aria-label="Main menu"]');
        this.contactLink = this.menuBarContainer.locator('a[data-test="nav-contact"]');
        this.signinLink = this.menuBarContainer.locator('a[data-test="nav-sign-in"]');
    }
}