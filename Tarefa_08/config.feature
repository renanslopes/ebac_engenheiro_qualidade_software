#Como cliente da EBAC-SHOP
#Quero configurar meu produto de acordo com meu tamanho e gosto
#E escolher a quantidade
#Para depois inserir no carrinho
#Critérios de Aceitação:
#1 – Seleções de cor, tamanho e quantidade devem ser obrigatórios
#2 – Deve permitir apenas 10 produtos por venda
#3 –Quando eu clicar no botão “limpar” deve voltar ao estado original
# language: pt
Funcionalidade: Página de configuração de produto

  Contexto:
    Dado que o usuario esteja na página de configuração de produto

  Esquema do Cenário: Não selecionar a cor, preencher tudo corretamente, colocar 11 na quantidade
    Quando selecionar <tamanho>, <quantidade> e <cor>
    Então deve aparecer a <mensagem>

    Exemplos:
      | tamanho | cor    | quantidade | mensagem                                  |
      | XS      | " "    |          1 | "Favor selecionar uma opção de cor"       |
      | S       | Orange |          2 |                                           |
      | M       | Red    |         11 | não é possível selecionar a quantidade 11 |

  Cenário: Limpar as opções escolhidas do item
    Quando selecionar <tamanho>, <cor> e <quantidade>
    Então limpar as configurações

    Exemplos:
      | tamanho | cor  | quantidade |
      | XS      | Blue |          1 |
