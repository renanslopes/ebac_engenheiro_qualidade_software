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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Zeppelin Yoga Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página de um produto', () => {

    });

    it('Deve adicionar produto ao carrinho', () => {

    });


});