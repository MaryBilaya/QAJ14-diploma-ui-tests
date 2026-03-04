import { Page, Locator } from '@playwright/test';

export class MyAccountPage {
  readonly myAccountTitle: Locator;

  constructor(page: Page) {
    this.myAccountTitle = page.locator('h1', { hasText: 'My account' });
  }
}
