describe('Página de Login', () => {

  const LOGIN_URL = 'login.html';

  beforeEach(() => {
    cy.visit(LOGIN_URL);
  });

  it('Deve carregar o título correto', () => {
    cy.title().should('eq', 'Login | Nome da Aplicação');
  });

  it('Deve carregar o favicon (exigido pelos testes)', () => {
    cy.get('link[rel="icon"]').should('have.attr', 'href', 'favicon.ico');
  });

  it('Deve exibir a logo da aplicação', () => {
    cy.get('.app-logo')
      .should('exist')
      .and('have.attr', 'src', 'logo.png');
  });

  it('Deve conter o cabeçalho h1 "Entrar"', () => {
    cy.get('h1').should('contain', 'Entrar');
  });

  it('Deve exibir campos de usuário e senha', () => {
    cy.get('#username')
      .should('exist')
      .and('have.attr', 'placeholder', 'Usuário ou E-mail');

    cy.get('#password')
      .should('exist')
      .and('have.attr', 'placeholder', 'Senha');
  });

  it('Deve ter botão de Login', () => {
    cy.get('button[type="submit"]').should('contain', 'Login');
  });

  it('Deve ter o link para recuperação de senha', () => {
    cy.contains('esqueceu a senha?')
      .should('exist')
      .and('have.attr', 'href', '/recuperar-senha');
  });

  it('Deve permitir digitar usuário e senha', () => {
    cy.get('#username').type('meuUser');
    cy.get('#password').type('123456');

    cy.get('#username').should('have.value', 'meuUser');
    cy.get('#password').should('have.value', '123456');
  });

});
