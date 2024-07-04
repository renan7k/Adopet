<h1 align="center"> Testes E2E com Cypress</h1>
Este repositório contém os testes automatizados do curso  'automatização de testes E2E com Cypress'

<h2>Pré-requisitos</h2>
Para fazer este curso, você precisará ter:

* Node.js instalado
* Um editor de código
* Conhecimento básico de JavaScript

<h2>Como usar</h2>
Para usar o projeto do curso, siga estas etapas:

* Clone o repositório para o seu computador
* Instale as dependências com npm install
* Abra o editor de código e navegue até a pasta do curso

<h2>Conhecimentos aplicados</h2>

* Captura de elementos com seletores CSS
* Utilização de comandos cypress (cy.get, cy.visit, cy.contains, cy.title, cy.url, cy.intercept, .type, .clear, .click,etc)
* Utilização do should para validações
* Implementação do beforeEach
* Criação de "comando personalizado"
* Stubs (dublês de testes) - Aplicamos um stub em uma rota específica, para simular comportamento do front quando api retornasse 400
* Testes em api, utilizando cy.request
* Utilização de massa de dados (arquivos da pasta fixtures)
* Boas práticas na automação, como proteção de dados sensíveis, testes intermitentes, etc
* Configuração do gitignore
* Execução no modo headless, com geração de report com o Mochawesome (configuração no cypress.config.js"
* Execução no modo headless, e geração de relatório no cypressCloud
    - Executar: npx cypress run --record --key 99cad385-ebb5-4c16-a866-6f6ee131ac13

