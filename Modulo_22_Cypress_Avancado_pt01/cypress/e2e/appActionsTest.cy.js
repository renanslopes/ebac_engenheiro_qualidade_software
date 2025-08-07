/// <reference types="cypress"/>

const { profilePage } = require("../support/pages/profile.page")
const { email, senha } = require('../fixtures/data.json')
describe('Teste de Autenticação', () => {

  it('Deve conseguir fazer o login', () => {
    cy.login(email, senha)
    profilePage.customerName.should('contain', 'EBAC Cliente')
  })
})