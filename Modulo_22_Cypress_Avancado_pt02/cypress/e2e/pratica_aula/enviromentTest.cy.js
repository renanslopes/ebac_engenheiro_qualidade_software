/// <reference types="cypress"/>

const { homePage } = require("../../support/pages/home.page")
const { email, senha } = require('../../fixtures/data.json')
describe('Variáveis de ambiente', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', Cypress.env('StoreVersion'), { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  })

  it('Default Env', () => {
    cy.log(Cypress.env('MY_ENV'))
  })

  it('Config Test Env', {
    env: {
      MY_ENV: "local"
    }
  }, () => {
    cy.log(Cypress.env('MY_ENV'))
  })

})