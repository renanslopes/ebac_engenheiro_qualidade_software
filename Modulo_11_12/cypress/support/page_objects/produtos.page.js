class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutoLista(produto) {
        cy.get('.products > .row')
            .contains(produto)
            .click()
    }

    visitarProduto(nomeProduto) {
        // cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        // let titulo = cy.get('[class="product_title entry-title"]')
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('[class="input-text qty text"]').clear().type(quantidade)
        cy.get('[class="single_add_to_cart_button button alt"]').click()
    }

    limparCarrinho() {
        cy.get('[class="dropdown-toggle mini-cart"]').click()
        cy.get('.remove').eq(0).click({ force: true })
    }

}

export default new ProdutosPage()