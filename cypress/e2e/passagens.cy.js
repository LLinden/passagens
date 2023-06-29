/// <reference types="cypress" />
const el = require("../support/elements/elements").ELEMENTS;

let dataInicio = 240504;
let dataFim = 240615;

describe("Passagens", () => {
  it("deve capturar menor preço", () => {
    cy.visit(`/${dataInicio}/${dataFim}/${Cypress.env("PARAM")}`).then(() => {
      cy.url().then((end) => {
        let url = end;
        cy.wrap(url).as("url");
        let captcha = url.includes("captcha");
        if (captcha == true) {
          cy.url().should("equal", 0);
        }
        cy.get(el.menorPreco).then(($menor) => {
          let txt = $menor.text();
          cy.writeFile("resultados.txt", txt, { flag: "a+" });
        });
      });
    });
  });
});
