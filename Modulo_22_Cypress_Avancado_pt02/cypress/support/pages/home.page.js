/// <reference types="cypress"/>

export const homePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    },
    clickSearch() {
        return cy.get(':nth-child(2) > .r-mh9cjk > .css-175oi2r').click()
    },
    typeSearch() {
        return cy.get('[data-testid="searchInput"]').type("bag Charlotte")
    },
    clickFirstSon() {
        return cy.get('[style="padding: 8px;"] > :nth-child(1) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]').click()
    },
    openSearchProduct(produto) {
        return cy.get('[data-testid="search-products"]').click()
    },
    openCategoriesFilter() {
        return cy.get('[data-testid="Category"]').click()
    },
    categories() {
        return cy.get('[data-testid^="search-category-"]')
    },
    searchProduct(product) {
        return cy.get('[data-testid^="searchInput"]').type(product)
    },
    products() {
        return cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]')
    }
}