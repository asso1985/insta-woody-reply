const HOST = Cypress.env("HOST") || "http://localhost:3000";
context("Home page", () => {
  before(() => {
    cy.visit(HOST);
  });

  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  describe("Post Reply", () => {
    it("On post comment click, post textarea should be focused", () => {
      cy.get("[data-cy=post-actions-comment]").click();
      cy.get('[data-cy="post-comment-form"]').within(() => {
        cy.get("textarea").should("be.focus");
      });
    });

    it("Submit button should be disabled", () => {
      cy.get('[data-cy="post-comment-form"]').within(() => {
        cy.get('button[type="submit"]').should("be.disabled");
      });
    });

    it("User should be able to add a comment", () => {
      cy.get('[data-cy="post-comment-form"]').within(() => {
        cy.get("textarea").type("Hello!").should("have.value", "Hello!");
        cy.get('button[type="submit"]').should("not.be.disabled");
        cy.get('button[type="submit"]').click();
      });

      cy.wait(1200);

      cy.get("[data-cy=post-comment]").should("have.length", 1);
      cy.contains("Hello!");
    });

    it("Submit button should be disabled", () => {
      cy.get('[data-cy="post-comment-form"]').within(() => {
        cy.get('button[type="submit"]').should("be.disabled");
      });
    });

    it("User should get a reply within 3s", () => {
      cy.wait(3000);
      cy.get("[data-cy=post-comment]").should("have.length", 2);
    });
  });
});
