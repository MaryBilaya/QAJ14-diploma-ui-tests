import { test as base, expect as BaseExpect } from '@playwright/test'
import { BasePage } from './pages/base_page'; 
import { HomePage } from './pages/home_page';
import { LoginPage } from './pages/login_page';
import { RegistrationPage } from './pages/registration_page';


export const REGISTR_USER = {
    firstName: 'Тестовый',
    lastName: 'Тест',
    dateOfBirth: '1995-04-03',
    invaliDateOfBirth: '1111-11-11',
    street: 'Чкалова',
    postcode: '220039',
    city: 'Минск',
    state: 'Минск',
    country: 'BY',
    phone: '375290000000',
    invalidPhone: '+375290000000',
    email: '5test@mail.ru',
    invalidEmailFormat: 'test',
    valid_password: '5Suc$esS',
    invalid_password: 'Suc$esS890'
}


type Fixtures = {
    basePage: BasePage;
    homePage: HomePage;
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
}

export const test = base.extend<Fixtures>({
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },

    loginPage: async ({ page }, use) => {
        const signinPage = new LoginPage(page);
        await use(signinPage);
    },

    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage);
    },
});

export const expect = BaseExpect;