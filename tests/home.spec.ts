import { test, expect } from '../fixtures.ts';

test.describe('Home page', () => {

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

    test('home page filters area is visible', 
        {tag: ['@homepage']},
        async ({ homePage }) => {
            await expect(homePage.filtersContainer).toBeVisible();
        }
    )

    test('check the sort filter: Price (High - Low)',
        {tag: ['@homepage', '@filters']},
         async ({ homePage }, testInfo) => {
            await homePage.sortFilter.selectOption('price,desc');

            await homePage.waitForPriceSortHighToLow();

            const prices = await homePage.getAllCardPricesOnTheFirstPage();
            const sortedPricesDesc = [...prices].sort((a, b) => b - a)

            await testInfo.attach('prices obtained after applying the sort filter: Price (High - Low)', {
                body: JSON.stringify(prices, null, 2),
                contentType: 'application/json',
            });

            await testInfo.attach('sorted prices desc', {
                body: JSON.stringify(sortedPricesDesc, null, 2),
                contentType: 'application/json',
            });
            
            expect(prices).toEqual(sortedPricesDesc);
        }      
    )

    test('check the sort filter: Price (Low - High)',
        {tag: ['@homepage', '@filters']},
        async ({ homePage }, testInfo) => {
            await homePage.sortFilter.selectOption('price,asc');

            await homePage.waitForPriceSortLowToHigh();

            const prices = await homePage.getAllCardPricesOnTheFirstPage();
            const sortedPricesAsc = [...prices].sort((a, b) => a - b)

            await testInfo.attach('prices obtained after applying the sort filter: Price (Low - High)', {
                body: JSON.stringify(prices, null, 2),
                contentType: 'application/json',
            });

            await testInfo.attach('sorted prices asc', {
                body: JSON.stringify(sortedPricesAsc, null, 2),
                contentType: 'application/json',
            });
            
            expect(prices).toEqual(sortedPricesAsc);
        }      
    )
})