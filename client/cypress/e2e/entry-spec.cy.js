describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-you-felt/entry/11')
  })

  it('Should display the date that the selected journal entry was written as the header', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a subheading that tells the user what feeling and activity they selected on this particular day', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display the entry completed by the user on this date', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a button that brings the user from the entry page back to the log page', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should give the user the option to update their entry for that date', () => {
    cy.visit('https://example.cypress.io')
  })
})