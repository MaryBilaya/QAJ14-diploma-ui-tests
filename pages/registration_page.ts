import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base_page';
import { REGISTR_USER } from '../fixtures';

type FieldPair = { 
    locator: Locator, 
    value: string
};

export class RegistrationPage extends BasePage {
    readonly registrUrl: string;    
    readonly registrTitle: Locator;
    readonly registerButton: Locator;
    readonly errorMessages: Locator;
    readonly errorMessagesWithMargin: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly dateOfBirthInput: Locator;
    readonly streetInput: Locator;
    readonly postcodeInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;  
    readonly countryInput: Locator;
    readonly phoneInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly emailFormatError: Locator;
    readonly phoneFormatError: Locator;
    readonly duplicateRegisterError: Locator;
    readonly dateOfBirthValueError: Locator;

    constructor(page: Page) {
        super(page);
        this.registrUrl = 'https://practicesoftwaretesting.com/auth/register',
        this.registrTitle = page.locator('h3', { hasText: 'Customer registration'});
        this.registerButton = page.locator('//button[@data-test="register-submit"]');
        this.errorMessages = page.locator('//div[@class="alert alert-danger"]');
        this.errorMessagesWithMargin = page.locator('//div[@class="alert alert-danger mt-3"]');
        this.firstNameInput = page.locator('//input[@data-test="first-name"]');
        this.lastNameInput = page.locator('//input[@data-test="last-name"]');
        this.dateOfBirthInput = page.locator('//input[@data-test="dob"]');
        this.streetInput = page.locator('//input[@data-test="street"]');       
        this.postcodeInput = page.locator('//input[@data-test="postal_code"]');
        this.cityInput = page.locator('//input[@data-test="city"]');
        this.stateInput = page.locator('//input[@data-test="state"]');
        this.countryInput = page.locator('//select[@data-test="country"]');
        this.phoneInput = page.locator('//input[@data-test="phone"]');
        this.emailInput = page.locator('//input[@data-test="email"]');
        this.passwordInput = page.locator('//input[@data-test="password"]');
        this.emailFormatError = page.locator('[data-test="email-error"]');
        this.phoneFormatError = page.locator('[data-test="phone-error"]');
        this.duplicateRegisterError = page.locator('[data-test="register-error"]');
        this.dateOfBirthValueError = page.locator('[data-test="register-error"] .help-block');
    }

    async openRegistrationPage () {
        await this.navigate(this.registrUrl);
    }

    get validUserFields(): FieldPair[] {
        return [
            {locator: this.firstNameInput, value: REGISTR_USER.firstName},
            {locator: this.lastNameInput, value: REGISTR_USER.lastName},
            {locator: this.dateOfBirthInput, value: REGISTR_USER.dateOfBirth},
            {locator: this.streetInput, value: REGISTR_USER.street},
            {locator: this.postcodeInput, value: REGISTR_USER.postcode},
            {locator: this.cityInput, value: REGISTR_USER.city},
            {locator: this.stateInput, value: REGISTR_USER.state},
            {locator: this.phoneInput, value: REGISTR_USER.phone},
            {locator: this.emailInput, value: REGISTR_USER.email},
            {locator: this.passwordInput, value: REGISTR_USER.validPassword},
        ];
    }

    async fillTheRegistrationForm (fields: FieldPair[]) {
        for (const { locator, value } of fields) {
            await this.fillInput(locator, value);
        }
    }

    async fillTheRegistrationFormWithValidUser() {
        await this.fillTheRegistrationForm(this.validUserFields);
    }

    async submitEmptyFormAndCheckErrors() {
        await this.registerButton.click();

        await expect(this.errorMessages).toHaveCount(6);
        await expect(this.errorMessagesWithMargin).toHaveCount(5);
            
        for (const el of await this.errorMessages.all()) {
            await expect(el).toBeVisible();
        }

        for (const el of await this.errorMessagesWithMargin.all()) {
            await expect(el).toBeVisible();
        }           
    }
}

