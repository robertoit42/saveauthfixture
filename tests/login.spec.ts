import {expect, test} from '@playwright/test';
import {LoginPage} from "../page-objects/loginpage";    

test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach(async ({page})=> {
    await page.goto('')
})


    test.skip('Login to the application', async ({page}) => {
        const loginPage = new LoginPage(page)
        await loginPage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!)
        await expect(page).toHaveURL('https://conduit.bondaracademy.com/login')
    })
