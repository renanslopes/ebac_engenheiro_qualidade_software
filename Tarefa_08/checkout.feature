#Como cliente da EBAC-SHOP
#Quero fazer concluir meu cadastro   
#Para finalizar minha compra
#Critérios de Aceitação:
# 1 – Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
# 2 – Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
# 3 – Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta. 
# language: pt
Funcionalidade: Página de finalização de compra

  Contexto:
    Dado que o usuario esteja na página de compra

  Cenario: Concluir compra preenchendo todos os dados
    Quando preencher todos os campos corretamente
    Então finaliza a compra

  Cenario: Concluir compra deixando de preencher um dos campos obrigatórios
    Quando Deixar de preencher um campo obrigatório
    Então uma janela surge com uma mensagem de erro

  Cenario: Concluir compra preenchendo campo email com valores inválidos
    Quando preencher o campo email com valor inválido
    Então uma janela surge com uma mensagem de erro

  Cenario: Concluir compra sem preencher quaisquer campo
    Quando não preencher nenhum campo
    Então uma janela surge com uma mensagem de erro
