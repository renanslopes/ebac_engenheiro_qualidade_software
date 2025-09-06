/// <reference types="cypress"/>

const { homePage } = require("../support/pages/home.page")
const { productPage } = require("../support/pages/product.page")
const { email, senha } = require('../fixtures/data.json')

describe('Exercício utilizando Intercept', () => {

  beforeEach(() => {
    cy.shortLogin(email, senha)
  })

  it('Deve adicionar item ao carrinho', () => {
    homePage.openSearchProduct()
    homePage.searchProduct("Tênis Esportivo")
    productPage.productTenis()
    cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a', { fixture: 'addItemCart.json' }).as('addItemCart')
    productPage.addToChart()

    // <span class="command-message-text">PUT 200 /public/updateCart/67f55de836e994dfd8baa11a</span>

  })
  it('Deve remover item do carrinho', () => {
    homePage.openSearchProduct()
    homePage.searchProduct("Tênis Esportivo")
    productPage.productTenis()
    cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a', { fixture: 'addItemCart.json' }).as('addItemCart')
    productPage.addToChart()
    cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a', { fixture: 'removeItemCart.json' }).as('removeItemCart')
    productPage.removeToChart()

    //{"success":true,"message":"cart updated"}

  })

  it.only('Deve atualizar item do carrinho', () => {
    homePage.openSearchProduct()
    homePage.searchProduct("Tênis Esportivo")
    productPage.productTenis()
    cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a', { fixture: 'addItemCart.json' }).as('addItemCart')
    productPage.addToChart()
    cy.intercept('PUT', '**/public/updateCart/67f55de836e994dfd8baa11a', { fixture: 'addOneMoreItemCart.json' }).as('addOneMoreItemCart')
    productPage.addOneMoreToChart()

  })
})