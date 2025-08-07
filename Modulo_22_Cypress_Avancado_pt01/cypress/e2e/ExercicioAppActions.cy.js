/// <reference types="cypress"/>

const { profilePage } = require("../support/pages/profile.page")
// const { homePage } = require("../support/pages/home.page")
const { email, senha } = require('../fixtures/data.json')
const { productPage } = require('../support/pages/product.page')
describe('Teste de finalização de compra', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve conseguir fazer o login', () => {
    cy.login(email, senha)
    profilePage.customerName.should('contain', 'EBAC Cliente')
  })
  it('Deve conseguir buscar e selecionar um item', () => {
    cy.searchItemHome()
    productPage.productNameConfirm().should('contain', 'bag Charlotte')
    // profilePage.customerName.should('contain', 'EBAC Cliente')
  })
  it('Deve adicionar item ao carrinho e concluir a compra', () => {
    cy.shortLogin(email, senha)
    cy.checkout()
    productPage.confirmCheckoutMessage().should('contain', 'Order Success')
  })
})