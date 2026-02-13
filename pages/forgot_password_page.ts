import { Page, Locator } from '@playwright/test';

export class ForgotPasswordPage {
  readonly forgotPasswordTitle: Locator;

  constructor(page: Page) {
    this.forgotPasswordTitle = page.locator('h3', { hasText: 'Forgot Password' });
  }
}
