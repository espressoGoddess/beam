describe('template spec', () => {
    beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 400,
      fixture: 'entries.json'
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/entries', {
      statusCode: 400,
      fixture: 'entries.json'
    })
    cy.visit('http://localhost:3000/what-should-you-do/Anxious')
  })

  it('passes', () => {
    // cy.get('.uni-btn').click()
    // cy.get('.uni-btn').click()
    // cy.visit('https://example.cypress.io')
  })
})