/// <reference types = "cypress"/>
import contrato from '../contratos/produtos.contratos'
describe('Teste de API - Produtos', () => {
    let token
    beforeEach(() => {

        cy.token("fulano@qa.com", "teste").then(tkn => {
            token = tkn
        })
    });

    it.only('Valida contratos', () => {
        cy.request('produtos').then(response => {
            return contrato.validateAsync(response.body)
        })
    });

    it('Listar produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'

        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        })
    })
    it('Cadastrar produto - POST', () => {
        let nomeProduto = 'Produto aleatório' + Math.floor(Math.random() * 100000)
        cy.cadastrarProduto(token, nomeProduto, 30, 'Carissimo', 50).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal("Cadastro realizado com sucesso")
        })
    })
    it('Valida produto já cadastrado - POST', () => {
        cy.cadastrarProduto(token, 'Logitech MX Vertical', 30, 'Carissimo', 50)
            .should((response) => {
                expect(response.status).equal(400)
                expect(response.body.message).equal('Já existe produto com esse nome')
            })
    });
    it('Editar um produto - PUT', () => {
        let nomeProduto = 'Produto aleatório editado' + Math.floor(Math.random() * 100000)
        cy.cadastrarProduto(token, nomeProduto, 30, 'Produto aleatorio editado', 50)
            .then(response => {
                let id = response.body._id
                cy.request({
                    method: 'PUT',
                    url: `produtos/${id}`,
                    headers: { authorization: token },
                    body: {
                        nome: nomeProduto,
                        preco: 320,
                        descricao: "Produto editado de novo de novo de novo",
                        quantidade: 120
                    }
                })
                    .should((response) => {
                        expect(response.status).equal(200)
                        expect(response.body.message).equal('Registro alterado com sucesso')
                    })
            })

    });
    it('Deletar um produto - DELETE', () => {
        let nomeProduto = 'Produto aleatório editado' + Math.floor(Math.random() * 100000)
        cy.cadastrarProduto(token, nomeProduto, 30, 'Produto aleatorio editado', 50)
            .then(response => {
                let id = response.body._id
                cy.request({
                    method: 'DELETE',
                    url: `produtos/${id}`,
                    headers: { authorization: token },
                    body: {
                        nome: nomeProduto,
                        preco: 320,
                        descricao: "Produto editado de novo de novo de novo",
                        quantidade: 120
                    }
                })
                    .should((response) => {
                        expect(response.status).equal(200)
                        expect(response.body.message).equal('Registro excluído com sucesso')
                    })
            })

    });
});
