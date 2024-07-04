/// <reference types="Cypress" />

describe('Testes referente ao login na ADOPET', () =>{

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/login') // Dublê de testes - Simular que api retorna 400
            cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
            statusCode:400, }).as('stubPost')
      });
    it('Preencher os campos do login corretamente e autenticar o usuário na página', () =>  {
         //cy.get('[data-test="input-loginEmail"]').type('ad@gmail.com');
         //cy.get('[data-test="input-loginPassword"]').type('Senha123');
         //cy.get('[data-test="submit-button"]').click();
        cy.login('ad@gmail.com', 'Senha123'); // comando customizado
        cy.url().should('be.equal','https://adopet-frontend-cypress.vercel.app/home')
    });
    it('Validar mensagem de erro exibida com preenchimento inválido nos campos Email e senha', () =>  {
        cy.get('[data-test="input-loginEmail"]').type('ad@gmailcom');
        cy.get('[data-test="input-loginPassword"]').type('Senha');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
    it.only('Validar erro no login com dados válidos', () => {
        cy.login('ad@gmail.com', 'Senha123'); 
        cy.wait('@stubPost'); //Chama o dublê (intercept) do beforeEach

        cy.get('.error').should('be.visible').and('contain','Falha no login. Consulte suas credenciais.');
    });
});