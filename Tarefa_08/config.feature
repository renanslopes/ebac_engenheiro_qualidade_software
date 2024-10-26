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

  Cenário: Selecionar as opções padrão de escolha do produto, com exceção da cor
    Quando selecionar <tamanho>
    E selecionar <quantidade>
    E finaliza a compra
    Então surge uma mensagem informando que deve escolhida uma opção de cor

  Exemplo:
      | tamanho | cor    | quantidade |
      | XS      | Blue   |          1 |
      | S       | Orange |          2 |
      | M       | Red    |          3 |
      | L       | Blue   |          4 |

  Cenário: Selecionar as opções padrão de escolha do produto
    Quando selecionar <tamanho>
    E selecionr <cor>
    E selecionar <quantidade>
    Então finaliza a compra

  Exemplo:
      | tamanho | cor    | quantidade |
      | XS      | Blue   |          1 |
      | S       | Orange |          2 |
      | M       | Red    |          3 |
      | L       | Blue   |          4 |

  Cenário: Limpar as opções escolhidas do item
    Quando selecionar <tamanho>
    E selecionr <cor>
    E selecionar <quantidade>
    E limpar as configurações
    Então todas as opções voltaram ao padrão

  Exemplo:
      | tamanho | cor    | quantidade |
      | XS      | Blue   |          1 |
      | S       | Orange |          2 |
      | M       | Red    |          3 |
      | L       | Blue   |          4 |

  Cenário: Comprar 11 produtos
    Quando selecionar <tamanho>
    E selecionr <cor>
    E selecionar 11 itens
    Então não é possível selecionar a quantidade 11

  Exemplo:
      | tamanho | cor    | quantidade |
      | XS      | Blue   |          1 |
      | S       | Orange |          2 |
      | M       | Red    |          3 |
      | L       | Blue   |          4 |
