/// <reference types="cypress"/>

const { homePage } = require("../support/pages/home.page")
const { loginPage } = require("../support/pages/login.page")
const { profilePage } = require("../support/pages/profile.page")
const { email, senha } = require('../fixtures/data.json')
describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Deve conseguir fazer o login', () => {
    homePage.openMenu('Account')
    loginPage.login(email, senha)
    homePage.openMenu('Account')
    profilePage.customerName.should('contain', 'EBAC Cliente')
  })
})