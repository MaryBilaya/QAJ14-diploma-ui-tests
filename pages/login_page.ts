import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class LoginPage extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginUrl: string;
    readonly loginButton: Locator;
    readonly loginTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.loginUrl = 'https://practicesoftwaretesting.com/auth/login',
        this.emailInput = page.locator('[data-test="email"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-submit"]');
        this.loginTitle = page.locator('h3', { hasText: 'Login'});
    }

    async openLoginPage() {
        await this.navigate(this.loginUrl);
    }

    async login(email: string, password: string) {
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.passwordInput, password);
        await this.loginButton.click();
    }
}