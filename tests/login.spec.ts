import { test, expect } from '../fixtures.ts';
import { REGISTR_USER } from '../fixtures.ts';
// import { LoginPage } from '../pages/login_page'


test.describe('Login', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.openLoginPage();
    });

    test('login page title is visible',
        {tag: ['@login']},
        async ({ loginPage }) => {
            await expect(loginPage.loginTitle).toBeVisible();
        }
     )

    test('login with valid credentials',
        {tag: ['@login', '@smoke']},
        async ({ loginPage }) => {
            await loginPage.login(REGISTR_USER.email, REGISTR_USER.valid_password);
        }
     )
})






