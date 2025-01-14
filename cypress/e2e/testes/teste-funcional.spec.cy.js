/// <reference types="cypress" />
import loc from "../../support/locators";

describe("Functional tests", () => {
  before(() => {
    // Login
    cy.login("teste@gmail.com", "teste12345678");
    //cy.resetApp();
  });

  it.skip("Deve registrar um novo usuário", () => {
    cy.get(":nth-child(2) > .nav-link").click();

    cy.get(".jumbotron > :nth-child(1) > .form-control").type("Lucas Reis");
    cy.get(".input-group > .form-control").type("lucaasreiis@gmail.com");
    cy.get(":nth-child(3) > .form-control").type("Lu12345678");

    cy.get(".btn").click();

    cy.get(".toast").should(
      "have.text",
      "Error: Error: Request failed with status code 500"
    );
  });

  // inserir conta
  it.only("Deva inserir uma nova conta", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    
    cy.get(loc.CONTAS.INPUT_NOME).type("Conta");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "inserida com sucesso");
});

// alterar campo
it.only("Deve alterar um campo da conta", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();


    cy.get(":nth-child(3) > :nth-child(2) > :nth-child(1) > .far").click();
    
    cy.get(loc.CONTAS.INPUT_NOME).clear().type("Conta de teste");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "atualizada com sucesso");
});

// excluir
it("Deva excluir uma conta", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.get(':nth-child(6) > :nth-child(2) > :nth-child(2) > .far').click();
    cy.get(loc.CONTAS.BTN_SALVAR).should("contain", "excluida com sucesso");
  });
});
