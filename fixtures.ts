import { test as base, expect as BaseExpect } from '@playwright/test'
import { BasePage } from './pages/base_page'; 
import { HomePage } from './pages/home_page';
import { LoginPage } from './pages/login_page';
import { RegistrationPage } from './pages/registration_page';
import { ForgotPasswordPage } from './pages/forgot_password_page';
import { MenuBar } from './pages/elements/menubar';
import { ContactPage } from './pages/contact_page';
import { MyAccountPage } from './pages/my_account_page';


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
    // email: 'test@mail.ru',
    unregisteredEmail: 'unregistrtest@mail.ru',
    invalidEmailFormat: 'test',
    validPassword: '5Suc$esS',
    invalidPassword: 'Suc$esS890'
}


type Fixtures = {
    basePage: BasePage;
    homePage: HomePage;
    loginPage: LoginPage;
    registrationPage: RegistrationPage;
    forgotPasswordPage: ForgotPasswordPage;
    menuBar: MenuBar;
    contactPage: ContactPage;
    myAccountPage: MyAccountPage;
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

    forgotPasswordPage: async ({ page }, use) => {
        const forgotPasswordPage = new ForgotPasswordPage(page);
        await use(forgotPasswordPage);
    },    

    menuBar: async ({ page }, use) => {
        const menuBar = new MenuBar(page);
        await use(menuBar);
    },  
    
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page);
        await use(contactPage);
    },    

    myAccountPage: async ({ page }, use) => {
        const myAccountPage = new MyAccountPage(page);
        await use(myAccountPage);
    },       
});

export const expect = BaseExpect;