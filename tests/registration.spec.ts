import { test, expect } from '../fixtures.ts';
import { REGISTR_USER } from '../fixtures.ts';

test.describe('Registration page', () => {

    test.beforeEach(async ({ registrationPage}) => {
        await registrationPage.openRegistrationPage();
    });

    test.afterEach(async ({ page }, testInfo) => {
        const screen = await page.screenshot({ fullPage: true });
        await testInfo.attach('final-state', {
            body: screen,
            contentType: 'image/png',
        });       
    });    

    test('registration page title is visible',
        {tag: ['@registration']},
        async ({ registrationPage }) => {
            await expect(registrationPage.registrTitle).toBeVisible();
        }
    )

    test('checking the visibility and number of errors in required fields by submitting an empty form',
        {tag: ['@registration']},
        async ({ registrationPage }) => {
            await registrationPage.submitEmptyFormAndCheckErrors();
        }
    )    

    test('register user and error on duplicate registration',
        {tag: ['@registration']},
        async ({ registrationPage, loginPage, page }) => {
            //регистрация пользователя
            await registrationPage.fillTheRegistrationFormWithValidUser();
            await registrationPage.countryInput.selectOption(REGISTR_USER.country);
            await registrationPage.registerButton.click();

            await expect(loginPage.loginTitle).toBeVisible();
            await expect(page).toHaveURL(loginPage.loginUrl);

            //ошибка при повторной попытке регистрации одного и того же пользователя
            await registrationPage.openRegistrationPage()
            await registrationPage.fillTheRegistrationFormWithValidUser();
            await registrationPage.countryInput.selectOption(REGISTR_USER.country);
            await registrationPage.registerButton.click();

            await expect(registrationPage.duplicateRegisterError).toContainText('A customer with this email address already exists.');
        }
    )  

    test('error checking for incorrect email format',
        {tag: ['@registration']},
        async ({ registrationPage }) => {
            //делаем копию массива validUserFields, в котором только для поля email меняется значение на невалидное
            const fieldWithInvalidEmail = registrationPage.validUserFields.map(f => f.locator === registrationPage.emailInput
                ? { ...f, value: REGISTR_USER.invalidEmailFormat }
                : f,
            )
            await registrationPage.fillTheRegistrationForm(fieldWithInvalidEmail);
            await registrationPage.registerButton.click();  
            
            const emailError = registrationPage.emailFormatError.innerText();
            await expect(registrationPage.emailFormatError).toHaveText(await emailError);
        }       
    )

    test('error checking for incorrect phone format',
        {tag: ['@registration']},  
        async ({ registrationPage }) => {
            //делаем копию массива validUserFields, в котором только для поля Phone меняется значение на невалидное
            const fieldWithInvalidPhone = registrationPage.validUserFields.map(f => f.locator === registrationPage.phoneInput
                ? { ...f, value: REGISTR_USER.invalidPhone }
                : f,
            )
            await registrationPage.fillTheRegistrationForm(fieldWithInvalidPhone);
            await registrationPage.registerButton.click();

            const phoneError = registrationPage.phoneFormatError.innerText();
            await expect(registrationPage.phoneFormatError).toHaveText(await phoneError);
        } 
    )

    //вывод данной ошибки работает неккоректно. С датой 1950-01-01 дает зарегистрироваться
    //ошибка отрабатывает только при полном заполнении формы регистрации
    test('error checking for an incorrect value date of birth',
        {tag: ['@registration']},
        async ({ registrationPage }) => {
            //делаем копию массива validUserFields, в котором только для поля Date of Birth меняется значение на невалидное
            const fieldWithInvalidDateOfBirth = registrationPage.validUserFields.map(f => f.locator === registrationPage.dateOfBirthInput
                ? { ...f, value: REGISTR_USER.invaliDateOfBirth }
                : f,
            )
            await registrationPage.fillTheRegistrationForm(fieldWithInvalidDateOfBirth)
            await registrationPage.countryInput.selectOption(REGISTR_USER.country);
            await registrationPage.registerButton.click();     
            
            await expect(registrationPage.dateOfBirthValueError).toContainText('Customer must be younger than 75 years old.');
        }
    )
})