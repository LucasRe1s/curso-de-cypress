/// <reference types="cypress" />

describe("API tests", () => {
  before(() => {});

  it("Should create an account", () => {
    const urlBase = "https://barrigarest.wcaquino.me/signin";
    const user = {
      email: "a@a",
      redirecionar: false,
      password: "a",
    }
    cy.request({
      method: "POST",
      url: urlBase,
      failOnStatusCode: false,
      body: user,
    }).then((response) => {
      console.log("Status:", response.status);
      expect(response.status).to.be.equal(200);
    });

    // inserir conta
    it.skip("Should update am account", () => {});

    // alterar campo
    it.skip("Should not create an account with same name", () => {});

    // excluir
    it.skip("Deva excluir uma conta", () => {});
  });
});
