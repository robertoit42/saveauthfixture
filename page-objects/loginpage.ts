import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page
    readonly user: Locator
    readonly password: Locator
    readonly SignInButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.user = page.getByRole('textbox', {name:'Email'})
        this.password = page.getByRole('textbox', { name: 'Password' })
        this.SignInButton =page.getByRole('button', {name:'Sign in'})
    }


async login(email: string, password: string) {
    await this.user.fill(email);
    await this.password.fill(password);
    await this.SignInButton.click();
 }

}