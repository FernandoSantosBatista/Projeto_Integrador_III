// https://docs.cypress.io/api/introduction/api.html

describe("Test 01", () => {
  it("visits the app root url", () => {
    cy.visit("https://apoioaplv.netlify.app/");
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
      cy.visit("https://apoioaplv.netlify.app/doar", {
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

  // request test case
  it("cy.request() - make an XHR request", () => {
    cy.visit("https://admin-apoioaplv.herokuapp.com/donee/");
    cy.request("https://admin-apoioaplv.herokuapp.com/donee/").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
  it("cy.request() - make an XHR request", () => {
    cy.visit("https://admin-apoioaplv.herokuapp.com/donor/");

    cy.request("https://admin-apoioaplv.herokuapp.com/donor/").should(
      (response) => {
        expect(response.status).to.eq(200);
      }
    );
  });
});
