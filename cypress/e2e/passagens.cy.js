/// <reference types="cypress" />
const el = require("../support/elements/elements").ELEMENTS;

describe("Passagens", () => {
  beforeEach(() => {
    cy.visit(
      `/${Cypress.env("DATA_INICIO")}/${Cypress.env("DATA_FIM")}/${Cypress.env(
        "PARAM"
      )}`
    ).then(() => {
      cy.url().then((end) => {
        let url = end;
        cy.wrap(url).as("url");
        let captcha = url.includes("captcha");
        if (captcha == true) {
          cy.url().should("equal", 0);
          // tenta burlar captcha
          //cy.get(el.botaoCaptcha).trigger("mousedown", {
          //button: 10,
          //});
        }
      });
    });
  });

  it("deve capturar menor preço ", () => {
    cy.get(el.menorPreco).click();
    cy.get(el.menorPreco).invoke("text").as("menor");
    cy.get("@menor").then(() => {
      cy.log("MENOR VALOR: " + menor);
    });

    // cy.get(el.menorPreco).find(el.menorPrecoValor).invoke("val").as("menor");
    // cy.get("@menor").then((menor) => {
    //   cy.log("MENOR VALOR: " + menor);
    // });
  });
});
