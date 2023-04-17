describe('Journal entry page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'entries.json'
    })
    cy.intercept('PUT', 'http://localhost:3001/api/v1/entries', {
      statusCode: 204
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

  it('Should allow the user to edit their entry', () => {
    cy.get('button.uni-btn').click()
    cy.get('.journal-text-edit').should('be.visible').type(' But after I went on a walk I felt much more calm!')
    cy.get(':nth-child(4) > :nth-child(2)').click()
    cy.get('.journal-content').should('be.visible').contains('Today I am feeling anxious because I have a big test coming up! But after I went on a walk I felt much more calm!')
    cy.get('a.uni-btn').click()
  })

  it('Should allow the use to cancel a journal entry edit and return the entry entry to its previous value', () => {
    cy.get('button.uni-btn').click()
    cy.get('.journal-text-edit').should('be.visible').type(' But after I went on a walk I felt much more calm!')
    cy.get(':nth-child(4) > :nth-child(1)').click()
    cy.get('.journal-content').should('be.visible').contains('Today I am feeling anxious because I have a big test coming up')
  })

  it('Should display a button that brings the user from the entry page back to the log page', () => {
    cy.get('a.uni-btn').click()
    cy.url().should('eq', 'http://localhost:3000/how-you-felt')
    cy.get('.journal-boundary').should('not.exist')
    cy.get('.feelingsLog').should('be.visible')
  })
})