import { Page, Locator } from '@playwright/test';

export class ContactPage {
  readonly contactTitle: Locator;

  constructor(page: Page) {
    this.contactTitle = page.locator('h3', { hasText: 'Contact' });
  }
}
