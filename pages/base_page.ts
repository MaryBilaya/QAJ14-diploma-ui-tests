import { Page, Locator } from '@playwright/test'

export class BasePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        if(url) {
            await this.page.goto(url, {waitUntil: 'load'});
        }
    }

    async fillInput (element: Locator, text: string) {
        await element.fill(text);
    }
}