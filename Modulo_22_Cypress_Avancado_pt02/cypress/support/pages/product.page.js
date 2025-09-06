/// <reference types="cypress"/>

export const productPage = {
    addToChart() {
        return cy.get('[data-testid="addToCart"]').click()
    },
    continueToPayment() {
        return cy.get('[data-testid="selectAddressOrContinueToPayment"]').click()
    },
    confirmCheckout() {
        return cy.get('[data-testid="completeCheckout"]').click()
    },
    confirmCheckoutMessage() {
        return cy.get('[class="css-146c3p1"]')
    },
    productNameConfirm() {
        return cy.get('[class="css-146c3p1"]')
    },
    productTenis() {
        return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
    },
    addToChart() {
        return cy.get('[data-testid="addToCart"]').click()
    },
    removeToChart() {
        return cy.get('[data-testid="remove"]').click()
    },
    addOneMoreToChart() {
        return cy.get('[data-testid="addItem"]').click()
    }
    // typeItem() {
    //     return cy.get('[data-testid="searchInput"]').type("Camiseta EBAC")
    // }
}