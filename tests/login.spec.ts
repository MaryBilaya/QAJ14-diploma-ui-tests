import { test, expect } from '../fixtures.ts';
import { REGISTR_USER } from '../fixtures.ts';
import { attachInfo } from '../helpers/attachments.ts';
import { ForgotPasswordPage } from '../pages/forgot_password_page.ts';
import { LoginPage } from '../pages/login_page.ts';


test.describe('Login page', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.openLoginPage();       
    });

    test.afterEach(async ({ page }, testInfo) => {
        const screen = await page.screenshot({ fullPage: true });
        await testInfo.attach('final-state', {
            body: screen,
            contentType: 'image/png',
        });       
    });

    test('login page title is visible',
        {tag: ['@login']},
        async ({ loginPage }) => {
            await expect(loginPage.loginTitle).toBeVisible();
        }
    )

    test('checking the visibility of errors in required fields by submitting an empty form',
        {tag: ['@login']}, 
        async ({ loginPage }, testInfo) => {
            await loginPage.loginButton.click();

            const emailErrorMessage = await loginPage.emailError.innerText();
            const passwordErrorMessage = await loginPage.passwordError.innerText();

            await attachInfo(testInfo, 'email error message', emailErrorMessage);
            await attachInfo(testInfo, 'password error message', passwordErrorMessage);

            await expect(loginPage.emailError).toHaveText(emailErrorMessage);
            await expect(loginPage.passwordError).toHaveText(passwordErrorMessage);
        }     
    )

    test('login with unregistered email',
        {tag: ['@login']},
        async ({ loginPage }, testInfo) => {
            await loginPage.login(
                REGISTR_USER.unregisteredEmail, 
                REGISTR_USER.validPassword
            );

            const loginError = await loginPage.loginError.innerText();

            await attachInfo(testInfo, 'login error message', loginError);
            
            await expect(loginPage.loginError).toHaveText(loginError);
        }
    )

    test('checking the register link',
        {tag: ['@login']},
        async ({ loginPage, registrationPage }) => {
            await loginPage.registerLink.click();

            await expect(registrationPage.registrTitle).toBeVisible();
        }        
    )

    test('checking the forgot your password link',
        {tag: ['@login']},
        async ({ loginPage, forgotPasswordPage }) => {
            await loginPage.forgotPasswordLink.click();

            await expect(forgotPasswordPage.forgotPasswordTitle).toBeVisible();
        }
    )
})






