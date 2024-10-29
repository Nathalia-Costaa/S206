// cypress/integration/test.spec.js

describe('Testes no site Magazine Luiza', () => {
    beforeEach(() => {
      cy.visit('https://www.magazineluiza.com.br');
    });
  
    it('Deve carregar a página inicial', () => {
      cy.title().should('include', 'Magazine Luiza');
    });
  
    it('Deve buscar por um produto', () => {
      cy.get('[data-testid="input-search"]').type('smartphone{enter}');
      cy.get('.product').should('have.length.greaterThan', 0);
    });
  
    it('Deve adicionar um produto ao carrinho', () => {
      cy.get('input[name="q"]').type('smartphone{enter}');
      cy.get('.product').first().click();
      cy.get('.add-to-cart-button').click();
      cy.get('.cart-icon').click();
      cy.get('.cart-item').should('have.length', 1);
    });
  
    it('Deve finalizar a compra', () => {
      cy.get('input[name="q"]').type('smartphone{enter}');
      cy.get('.product').first().click();
      cy.get('.add-to-cart-button').click();
      cy.get('.cart-icon').click();
      cy.get('.checkout-button').click();
      cy.url().should('include', '/checkout');
    });
  
    it('Deve cadastrar um usuário com sucesso', () => {
      cy.get('.register-link').click();
      cy.get('input[name="name"]').type('Teste Usuário');
      cy.get('input[name="email"]').type('teste@exemplo.com');
      cy.get('input[name="password"]').type('senha123');
      cy.get('.register-submit').click();
      cy.get('.success-message').should('be.visible');
    });
  
    it('Deve rejeitar cadastro com e-mail inválido', () => {
      cy.get('.register-link').click();
      cy.get('input[name="name"]').type('Teste Usuário');
      cy.get('input[name="email"]').type('email@');
      cy.get('input[name="password"]').type('senha123');
      cy.get('.register-submit').click();
      cy.get('.error-message').should('be.visible');
    });
  });
  