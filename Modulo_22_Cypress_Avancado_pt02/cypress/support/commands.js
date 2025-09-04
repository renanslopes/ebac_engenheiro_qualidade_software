import { homePage } from "./pages/home.page"
import { loginPage } from "./pages/login.page"
import { productPage } from "./pages/product.page"

Cypress.Commands.add('login', (email, password) => {
    homePage.openMenu('Account')
    loginPage.login(email, password)
    homePage.openMenu('Account')

})

Cypress.Commands.add('shortLogin', (email, password) => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, password)
})

Cypress.Commands.add('searchItemHome', () => {
    homePage.clickSearch()
    homePage.typeSearch()
    homePage.clickFirstSon()
    productPage.productNameConfirm()

})

Cypress.Commands.add('checkout', () => {
    homePage.clickSearch()
    homePage.typeSearch()
    homePage.clickFirstSon()
    productPage.addToChart()
    productPage.continueToPayment()
    productPage.confirmCheckout()
    productPage.confirmCheckoutMessage()
})
