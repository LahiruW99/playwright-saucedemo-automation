import {Page, Locator} from '@playwright/test';

export class ProductPage{
    private page: Page;
    readonly addToCartBackpackButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.addToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    async addBackpackToCart(){
        await this.addToCartBackpackButton.click();
    }
}