// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.get("h2").should("contain", "O que é APLV ??");
    cy.get(".navbar").contains("Entenda").click();
  });
  it("cy.go() - go back or forward in the browser'doar", () => {
    cy.location("pathname").should("include", "sobre");
    cy.get(".bi").contains("Voltar ao Topo").click();
    cy.reload();
    cy.go("forward");
  }),
    it("cy.visit() - visit a remote url", () => {
      cy.visit("/doar", {
        timeout: 50000,
        onBeforeLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === "object").to.be.true;
        },
        onLoad(contentWindow) {
          // contentWindow is the remote page's window object
          expect(typeof contentWindow === "object").to.be.true;
        },
      });
    });
  it("cy.request() - make an XHR request", () => {
    // https://on.cypress.io/request
    cy.request("https://admin-apoioaplv.herokuapp.com/donor/").should(
      (response) => {
        expect(response.status).to.eq(200);
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
      }
    );
  });
  it("cy.request() - make an XHR request", () => {
    // https://on.cypress.io/request
    cy.request("https://admin-apoioaplv.herokuapp.com/donee/").should(
      (response) => {
        expect(response.status).to.eq(200);
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
      }
    );
  });
});
