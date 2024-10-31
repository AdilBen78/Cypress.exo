/// < reference types='cypress/>

describe("scenario1 : authentification nominale", function () {
  it("visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=inventory-item-name]").should("be.visible");
  });
});

describe("scenario2 : authentification en erreur", function () {
  it("visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value", "user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=error]")
      .should("be.visible")
      .should("contain.text", "Username and password do not match");
  });
});
describe("scenario3 : authentification en erreur", function () {
  it("visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]").type("user").should("have.value", "user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secretsauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=error]")
      .should("be.visible")
      .should("contain.text", "Username and password do not match");
  });
});
describe("Ex2 Scenario1", function () {
  it("Scenario1", function () {
    cy.visit("https://practice.automationtesteracademy.com");
    cy.get('[data-test="logo-img"]').should("be.visible");
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="submit-login"]').click();
    cy.get(".grid-container img").should("have.length", 8);
  });
});
describe("Ex2 Scenario2", function () {
  it("Scenario2", function () {
    cy.visit("https://practice.automationtesteracademy.com");
    cy.get('[data-test="logo-img"]').should("be.visible");
    fir;
    cy.get('[data-test="username-login"]')
      .type("login_user")
      .should("have.value", "login_user");
    cy.get('[data-test="password-login"]')
      .type("cypress-geek")
      .should("have.value", "cypress-geek");
    cy.get('[data-test="submit-login"]').click();
    cy.get("[data-test=p-contact]").should("contain", "Contactez nous!");
    cy.get(".grid-container img").should("have.length", 8);
  });
});

describe("scenario : les differentes etapes du parcours client", function () {
  it.only("visiter le site", function () {
    cy.visit("https://www.saucedemo.com/");
    cy.get("[data-test=username]")
      .type("standard_user")
      .should("have.value", "standard_user");
    cy.get("[data-test=password]")
      .type("secret_sauce")
      .should("have.value", "secret_sauce");
    cy.get("[data-test=login-button]").click();
    cy.get("[data-test=inventory-item-name]").should("be.visible");

    cy.get("[data-test=add-to-cart-sauce-labs-backpack]").click();
    cy.get("[data-test=add-to-cart-sauce-labs-onesie]").click();
    cy.get("[data-test=shopping-cart-link]").should("have.text", "2");
    cy.get("[data-test=shopping-cart-badge]").click();
    cy.url().should("equal", "https://www.saucedemo.com/cart.html");
    cy.get("[data-test=checkout]").click();
    cy.get("[data-test=firstName]").type("Adil").should("have.value", "Adil");
    cy.get("[data-test=lastName]").type("Ben").should("have.value", "Ben");
    cy.get("[data-test=postalCode]")
      .type("93130")
      .should("have.value", "93130");
    cy.get("[data-test=continue]").click();
    cy.get("[data-test=finish]").click();
    cy.get("[data-test=complete-header]").should(
      "have.text",
      "Thank you for your order!"
    );
  });
});
