describe('Feelings log page (GET intercept)', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
        statusCode: 200,
        fixture: 'entries.json'
      })
      cy.visit('http://localhost:3000/how-you-felt')
  })

  it('Should display the header and the feelings log page', () => {
    cy.get('header').should('be.visible')
    cy.get('.feelingsLog').should('be.visible')
  })

  it('Should display a table with columns for date, feeling, activity, and journal', () => {
    cy.get('thead > tr > :nth-child(1)').should('be.visible').contains('Date')
    cy.get('thead > tr > :nth-child(2)').should('be.visible').contains('Feeling')
    cy.get('thead > tr > :nth-child(3)').should('be.visible').contains('Activity')
    cy.get('thead > tr > :nth-child(4)').should('be.visible').contains('Journal')
  })

  it('Should display the feeling and activity the user selected on the specified date within each table column ', () => {
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible').contains('Apr 7, 2023')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible').contains('Anxious')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('be.visible').contains('Go on a long walk')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').should('be.visible')
  })

  it('Should display the feeling and activity the user selected on the specified date within each table column ', () => {
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('be.visible').contains('Apr 6, 2023')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('be.visible').contains('Mad')
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should('be.visible').contains("Lay on the floor")
    cy.get('tbody > :nth-child(2) > :nth-child(4)').should('be.visible')
  })

  it('Should display the feeling and activity the user selected on the specified date within each table column ', () => {
    cy.get('tbody > :nth-child(3) > :nth-child(1)').should('be.visible').contains('Apr 5, 2023')
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('be.visible').contains('Happy')
    cy.get('tbody > :nth-child(3) > :nth-child(3)').should('be.visible').contains('Call someone you love.')
    cy.get('tbody > :nth-child(3) > :nth-child(4)').should('be.visible')
  })

  it('Should have a button in the journal column that brings the user from the feelings log page to the journal entry they completed on that specific day', () => {
    cy.get(':nth-child(1) > :nth-child(4) > a').click()
    cy.url().should('eq', 'http://localhost:3000/how-you-felt/entry/1')
    cy.get('.journal-boundary').should('be.visible')
    cy.get('.feelingsLog').should('not.exist')

    cy.get('h2').should('be.visible').contains('Apr 7, 2023')
    cy.get('h3').should('be.visible').contains('Today you were feeling anxious so you decided to Go on a long walk')
    cy.get('.journal-text').contains('Today I am feeling anxious because I have a big test coming up!')
  })

})



