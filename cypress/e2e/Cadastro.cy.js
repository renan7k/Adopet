/// <reference types="Cypress" />
describe('Cadastro no site ADOPET', () => {
  
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  });
  
  it('Realizar um cadastro no site com sucesso', () => {
    cy.cadastrar('Bia Terron', 'bt@gmail.com', 'Senha123')
    cy.url().should('be.equal','https://adopet-frontend-cypress.vercel.app/login')
  })

  it('Validar mensagens de erro ao deixar os campos obrigaatórios vazios', () =>{
    cy.get('[data-test="submit-button"]').click();
    //cy.get('.error').should('be.visible')
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Crie uma senha').should('be.visible')
    cy.contains('Repita a senha criada acima').should('be.visible')
  })

  it('Validar mensagem de erro ao deixar o campo email vazio', () =>{
    cy.get('#name').type('Amélia dias');
    cy.get('input[name=password]').type('Senha123');
    cy.get('input[name=confirm_password]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();

    cy.get('.error').should('be.visible').and('contain','É necessário informar um endereço de email')
    //.contains('É necessário informar um endereço de email')
  })
})