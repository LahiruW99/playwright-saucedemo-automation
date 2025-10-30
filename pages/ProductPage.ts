import {Page, Locator} from '@playwright/test';

export class ProductPage{
    private page: Page;
    readonly addToCartBackpackButton: Locator;
    readonly removeBackpackFromCartButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.addToCartBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.removeBackpackFromCartButton = page.locator('[data-test="remove-sauce-labs-backpack"]')
    }

    async addBackpackToCart(){
        await this.addToCartBackpackButton.click();
    }

    async removeBackpackFromCart(){
        await this.removeBackpackFromCartButton.click();
    }
}