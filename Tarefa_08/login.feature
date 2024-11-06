#Como cliente da EBAC-SHOP
#Quero fazer o login (autenticação) na plataforma  
#Para visualizar meus pedidos
#Critérios de Aceitação:
#1 – Ao inserir dados válidos deve ser direcionado para a tela de checkout
#2 – Ao inserir um dos campos inválidos deve exibir uma mensagem de alerta “Usuário ou senha inválidos”
# language: pt
Funcionalidade: Página de login para checkout

  Contexto:
    Dado que o usuario esteja na página de checkout (deslogado)

  Cenário: Prencher os dados para login
    Quando digitar o email <usuario> e a senha <senha>
    Então é direcionado à página de checkout

    Exemplos:
      | usuario          | senha     |
      | teste@testes.com | Teste@123 |

  Cenário: Prencher apenas o email
    Quando digitar o email <usuario>
    Então uma mensagem é exibida informando que é necessário o preenchimento do email

    Exemplos:
      | usuario          |
      | teste@testes.com |

  Cenário: Prencher apenas a senha
    Quando digitar a senha <senha>
    Então uma mensagem é exibida informando que é necessário o preenchimento da senha

    Exemplos:
      | senha     |
      | Teste@123 |

  Cenário: Deixar campos em branco
    Quando nao preencher os campos
    Então uma mensagem é exibida informando que é necessário informar as credenciais de acesso
