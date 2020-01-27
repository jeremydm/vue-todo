// https://docs.cypress.io/api/introduction/api.html

describe('The app should load', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'My amazing list of todos');
  });
});
