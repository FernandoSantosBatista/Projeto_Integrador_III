// https://docs.cypress.io/api/introduction/api.html

describe('html-pages', () => {
  it('loads the index page', () => {
    cy.visit('/')
    cy.contains('Index page')
  })

});
