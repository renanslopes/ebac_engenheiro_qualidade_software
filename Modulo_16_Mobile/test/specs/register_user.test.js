import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import createPage from '../pageobjects/create.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Register User', () => {
    it('should register new user', async () => {
        await homePage.openMenu()
        await createPage.createUser('Renan', 'Lopes', '2199998888', 'renan@renan.teste', '12345', '12345')
        await homePage.openMenu()
        expect((await profilePage.profileName('Lopes Renan')).isDisplayed()).toBeTruthy()
        await profilePage.logoutProfile()
        await profilePage.confirmLogout()
        // await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        // await homePage.openMenu()
        // expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
        // await profilePage.logoutProfile()
        // await profilePage.confirmLogout()

    })
})