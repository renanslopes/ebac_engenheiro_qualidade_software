/// <reference types="cypress" />
import produtosPage from "../../support/page_objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        // cy.visit('produtos')
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de um produto', () => {
        produtosPage.visitarProduto('zeppelin yoga pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Zeppelin Yoga Pant')
        produtosPage.addProdutoCarrinho('32', 'Blue', 3)
        cy.get('[class="woocommerce-message"]').should('contain', `foram adicionados no seu carrinho.`)
        produtosPage.limparCarrinho()
    });

    it.only('Deve adicionar produto ao carrinho - usando a massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
            cy.get('[class="woocommerce-message"]').should('contain', `foram adicionados no seu carrinho.`)
        })
    });


});