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
    cy.get('[data-testid="list"]').should('have.length.greaterThan', 0);
  });

  it('Deve adicionar um produto ao carrinho', () => {
    cy.get('[data-testid="input-search"]').type('smartphone{enter}');
    cy.get('[data-testid="list"]').first().click();
    cy.get(':nth-child(2) > [data-testid="bagButton"]').click();
  });

  it('Checa se o carrinho está vazio', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('.sc-ijDOKB > .sc-eqUAAy > use').click();
    cy.get('.EmptyBasket-title').should('contain', 'vazia');
  });

  it('Teste de login', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('[data-testid="stereo-login_menu-unsigned_user_state-container"] > [data-testid="link"]').click();
    cy.get('#LoginBox-form > :nth-child(1) > .FormGroup-label').type('nathaliaaparecida1804@gmail.com');
    cy.get('input[type="password"]').type('Inatel123!');
    cy.get('#login-box-form-continue').click()
  });

  it('Teste de e-mail inválido', () => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('[data-testid="stereo-login_menu-unsigned_user_state-container"] > [data-testid="link"]').click();
    cy.get('#LoginBox-form > :nth-child(1) > .FormGroup-label').type('emailerradoo@gmail.com');
    cy.get('input[type="password"]').type('1111111111111');
    cy.get('#login-box-form-continue').click();
    cy.get('.font-2xsm-bold').should('contain.text', 'Dados inválidos');
  });

});
