# Testes automatizados End to End - Ebac Shop - Módulos 11 e 12 - (Cypress)
Ebac shop: http://lojaebac.ebaconline.art.br/

#### O exercício consiste em automatizar o fluxo abaixo:
    Como cliente 
    Quero acessar a Loja EBAC 
    Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho
    Preenchendo todas opções no checkout
    E validando minha compra ao final
## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/EBAC-QE/teste-e2e-ebac.git
```
```
cd teste-e2e-ebac
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dashboard, selecione um dos navegadores (De preferencia Electron) e siga com as execuções. 

# Preview
![Preview do teste E2E acontecendo em tempo real no Cypress](https://github.com/renanslopes/ebac_engenheiro_qualidade_software/blob/main/imagens/teste-e2e-cypress-completo.gif)



