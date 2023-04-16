describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'entries.json'
    })
    cy.intercept('PUT', 'http://localhost:3001/api/v1/entries', {
      
    })
    cy.visit('http://localhost:3000/how-you-felt/entry/1')
  })

  it('Should display the journal entry page', () => {
    cy.get('.journal-boundary').should('be.visible')
  })

  it('Should display the date that the selected journal entry was written as the header', () => {
    cy.get('h2').should('be.visible').contains('Apr 7, 2023')
  })

  it('Should display a subheading that tells the user what feeling and activity they selected on this particular day', () => {
    cy.get('h3').should('be.visible').contains('Today you were feeling anxious so you decided to Go on a long walk')
  })

  it('Should display the entry completed by the user on this date', () => {
    cy.get('.journal-text').should('be.visible').contains('Today I am feeling anxious because I have a big test coming up!')
  })

  it('Should display a button that brings the user from the entry page back to the log page', () => {
    cy.get('.uni-btn').click()
    cy.url().should('eq', 'http://localhost:3000/how-you-felt')
    cy.get('.journal-boundary').should('not.exist')
    cy.get('.feelingsLog').should('be.visible')
  })

})