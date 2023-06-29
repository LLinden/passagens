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
    // cy.get(el.menorPreco)
    //   .invoke("text")
    //   .then((text) => {
    //     cy.wrap(text).as("menor");
    //     cy.log("@menor");
    //     cy.writeFile("../resultados.txt", menor, { flag: "a+" });
    //   });
  });

  it("deve capturar menor preço", () => {
    //cy.writeFile("../fixtures/resultados.txt", "@menor", { flag: "a+" });
    cy.get(el.menorPreco).then(($menor) => {
      let txt = $menor.text();
      cy.writeFile("../resultados.txt", txt, { flag: "a+" });
    });
  });
});
