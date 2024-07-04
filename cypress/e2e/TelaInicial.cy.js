/// <reference types="Cypress" />

describe('Testes na página inicial do ADOPET', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app')
      });

      it('Verificar nome da aba', () => {
        cy.title().should('eq', 'AdoPet');
      })

      it('Verificar literais na página principal', () => {
        cy.contains('p', 'Quem ama adota!').should('be.visible');
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
      })
})