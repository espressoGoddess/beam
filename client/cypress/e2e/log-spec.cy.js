describe('Feelings log page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-you-felt')
  })

  it('Should display a table with columns for date, feeling, activity, and journal', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display the feeling and activity the user selected on the specified date within each table column ', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should have a button in the journal column that brings the user from the feelings log page to the journal entry they completed on that specific day', () => {
    cy.visit('https://example.cypress.io')
  })

})