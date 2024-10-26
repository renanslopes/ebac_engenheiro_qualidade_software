#Como cliente da EBAC-SHOP
#Quero fazer concluir meu cadastro   
#Para finalizar minha compra
#Critérios de Aceitação:
# 1 – Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
# 2 – Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
# 3 – Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta. 
Feature: Página de finalização de compra

  Background:
    Given que o usuario esteja na página de compra

  Scenario: Concluir compra preenchendo todos os dados
    When preencher todos os campos corretamente
    Then finaliza a compra

  Scenario: Concluir compra deixando de preencher um dos campos obrigatórios
    When preencher alguns campos e deixar um campo obrigatório vazio
    And finaliza a compra
    Then uma janela surge com uma mensagem de erro

  Scenario: Concluir compra preenchendo campo email com valores inválidos
    When preencher todos os campos corretamente
    And preencher o campo email com valor inválido
    Then uma janela surge com uma mensagem de erro

  Scenario: Concluir compra sem preencher quaisquer campo
    When não preencher nenhum campo
    And finalizar compra
    Then uma janela surge com uma mensagem de erro
