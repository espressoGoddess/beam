describe('Activities page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/how-are-you-feeling')
  })

  it('Should display one activity idea at a time', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a new activity when the user clicks the right arrow', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a left arrow when the user has moved past the first activity that brings the user back to the previous activity', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should not display a right arrow when the user is viewing the last activity idea', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Should display a button that selects the current activity and brings the user from the activities page to the log page', () => {
    cy.visit('https://example.cypress.io') 
  })

})