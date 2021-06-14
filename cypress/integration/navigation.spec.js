describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("http://localhost:8082/");
  });
  it("should navigate to the about page and back to home page with nav bar", () => {
    cy.get('.navlink').contains('Info')
      .click();
    cy.contains('About Jazzifier');
    cy.get('.navlink').contains('Jazzifier')
      .click();
      cy.contains('Instrument');
  });
});