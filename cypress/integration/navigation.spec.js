describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });
  it("should navigate to the about page", () => {
    cy.visit("/about");
    // cy.contains("[data-testid=day]", "Tuesday")
    // .click()
    // .should("have.class", "day-list__item--selected")
  });
});