// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("https://apoioaplv.netlify.app/");
    cy.contains("name", "You did it!");
  });
});
