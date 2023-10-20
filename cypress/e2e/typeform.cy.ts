import { fakerPT_BR } from "@faker-js/faker";
describe("Typeform", () => {
  beforeEach(() => {
    cy.login({
      username: Cypress.env("username"),
      password: Cypress.env("password"),
    });
  });

  it("Logs in and out", () => {
    cy.get(".react-gravatar").should("be.visible").click();
    cy.contains("a", "Log out").should("be.visible").click();
    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/login`);
    cy.get('[data-qa="button-submit"]').should("be.visible");
  });

  it("renames workspace", () => {
    const randomWorkspaceName = fakerPT_BR.location.country();

    cy.get('[data-qa="workspace-options-modal"]').click();
    cy.get('[data-qa="dropdown-option-rename"]').click();
    cy.get('[data-qa="rename-workspace-input"]')
      .clear()
      .type(randomWorkspaceName);
    cy.get('[data-qa="confirm-button"]').click();
    cy.get('[data-qa="workspace-name-input-editable"]')
      .should("be.visible")
      .and("have.value", randomWorkspaceName);
  });
});
