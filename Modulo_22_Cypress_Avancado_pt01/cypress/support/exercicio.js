import { homePage } from "./pages/home.page"
import { loginPage } from "./pages/login.page"

Cypress.Commands.add('login', (email, password) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')

    homePage.openMenu('Account')
    loginPage.login(email, password)
    homePage.openMenu('Account')

})