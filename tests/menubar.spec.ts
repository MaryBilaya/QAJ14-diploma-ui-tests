import { test, expect } from '../fixtures.ts';


test.describe('Menubar', () => {
    
    test.beforeEach(async ({ homePage }) => {
        await homePage.openHomePage();
    });

    test.afterEach(async ({ page }, testInfo) => {
        const screen = await page.screenshot({ fullPage: true });
        await testInfo.attach('final-state', {
            body: screen,
            contentType: 'image/png',
        });   
    });

    test('checking contact link',
        {tag: ['@menubar']},     
        async ({ menuBar, contactPage }) => {
            await menuBar.contactLink.click();

            await expect(contactPage.contactTitle).toBeVisible();
        }  
    );

    test('checking sign in link',
        {tag: ['@menubar']},     
        async ({ menuBar, loginPage }) => {
            await menuBar.signinLink.click();

            await expect(loginPage.loginTitle).toBeVisible();
        }  
    );

    test('checking transition by categories',
        {tag: ['@menubar', '@categories']},
        async ({ menuBar }) => {
            await menuBar.checkTransitionByCategories();           
        }
    );

    test('checking transition to rentals category', 
        {tag: ['@menubar', '@categories']},
        async ({ menuBar }) => {
            await menuBar.checkTransitionToRentalsCategory();
        }
    );
})
