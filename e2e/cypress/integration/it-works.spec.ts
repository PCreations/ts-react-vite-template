it('works', () => {
  cy.visit('/');

  cy.findByText('Learn React');
});
