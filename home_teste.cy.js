describe('Página Home | Connext', () => {

  const HOME_URL = 'home.html';

  beforeEach(() => {
    cy.visit(HOME_URL);
  });

  it('Deve exibir o título da página corretamente', () => {
    cy.title().should('eq', 'Home | Connext');
  });

  it('Deve conter o header com navbar ativa e botão de login', () => {
    cy.get('nav.navbar').should('exist');

    cy.get('.navbar-brand')
      .should('exist')
      .and('contain', 'Connext');

    cy.get('.nav-link.active')
      .should('contain', 'Home');

    cy.contains('Login / Cadastro')
      .should('exist')
      .and('have.attr', 'href', 'login.html');
  });

  it('Deve exibir o hero principal com título e subtítulo', () => {
    cy.get('.hero h1')
      .should('exist')
      .and('contain', 'Bem-vindo ao Connext');

    cy.get('.hero p')
      .should('contain', 'Monitore, gerencie e visualize');
  });

  it('Deve exibir a seção Sobre o Projeto', () => {
    cy.contains('Sobre o Projeto').should('exist');
    cy.contains('O Connext é uma aplicação desenvolvida').should('exist');
  });

  it('Deve listar os objetivos do projeto', () => {
    // ACHANDO SOMENTE A UL que vem logo depois do título "Nossos Objetivos"
    cy.contains('Nossos Objetivos')
      .next('ul')
      .find('li')
      .should('have.length', 4);

    cy.contains('Objetivo 1').should('exist');
    cy.contains('Objetivo 2').should('exist');
    cy.contains('Objetivo 3').should('exist');
    cy.contains('Objetivo 4').should('exist');
  });

  it('Deve exibir o footer corretamente', () => {
    cy.get('footer')
      .should('exist')
      .within(() => {
        cy.contains('2025 Connext').should('exist');
      });
  });

});
