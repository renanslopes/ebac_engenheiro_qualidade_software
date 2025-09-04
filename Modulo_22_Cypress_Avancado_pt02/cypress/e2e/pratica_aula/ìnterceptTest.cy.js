/// <reference types="cypress"/>

const { homePage } = require("../../support/pages/home.page")
const { email, senha } = require('../../fixtures/data.json')
describe('Teste de Autenticação', () => {

  beforeEach(() => {
    cy.shortLogin(email, senha)
  })

  it('Categorias devem estar visíveis', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'categories.json' }).as('getCategories')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length.greaterThan', 1)

  })
  it('Categorias devem estar vazias', () => {
    cy.intercept('GET', '**/public/getCategories', { fixture: 'Nocategories.json' }).as('getCategoriesEmpty')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)

  })

  it('Categorias apresentar erro 500', () => {
    cy.intercept('GET', '**/public/getCategories', { statusCode: 500 }).as('getCategoriesErro')
    homePage.openSearchProduct()
    homePage.openCategoriesFilter()
    homePage.categories().should('have.length', 1)

  })
})