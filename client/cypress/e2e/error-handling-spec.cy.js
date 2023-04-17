describe('400 GET error handling', () => {
    beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 404,
      fixture: 'entries.json'
    })
    cy.visit('http://localhost:3000/how-you-felt')
  })

  it('Should display the not found page', () => {
    cy.get('.notfound-container').should('be.visible')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
  })

  it('Should display the not found blurb messages', () => {
    cy.get('.notfound-blurb').should('be.visible')
    cy.get('.notfound-blurb > :nth-child(1)').should('be.visible').contains('P.S. - Hope you\'re doing well. 🤍')
    cy.get('.notfound-blurb > :nth-child(2)').should('be.visible').contains('P.P.S. - Proud of you.')
  })

  it('Should display a home button that can be clicked to move back to the home page', () => {
    cy.get('.uni-btn').should('be.visible').contains('HOME').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.home').should('be.visible')
  })
})

describe('400 POST error handling', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
        statusCode: 200,
        fixture: 'entries.json'
      })
      cy.intercept('POST', 'http://localhost:3001/api/v1/entries', {
        statusCode: 400,
    })
    cy.visit('http://localhost:3000/what-should-you-do/Anxious')
    cy.get('.uni-btn').click()
  })

  it('Should display the not found page', () => {
    cy.get('.notfound-container').should('be.visible')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
  })

  it('Should display the not found blurb messages', () => {
    cy.get('.notfound-blurb').should('be.visible')
    cy.get('.notfound-blurb > :nth-child(1)').should('be.visible').contains('P.S. - Hope you\'re doing well. 🤍')
    cy.get('.notfound-blurb > :nth-child(2)').should('be.visible').contains('P.P.S. - Proud of you.')
  })

  it('Should display a home button that can be clicked to move back to the home page', () => {
    cy.get('.uni-btn').should('be.visible').contains('HOME').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.home').should('be.visible')
  })
})

describe('400 POST error handling', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
        statusCode: 200,
        fixture: 'entries.json'
      })
      cy.intercept('PUT', 'http://localhost:3001/api/v1/entries', {
        statusCode: 400,
      })
    cy.visit('http://localhost:3000/how-you-felt')
    cy.get(':nth-child(1) > .journal > a > .fa-solid').click()
    cy.get('button.uni-btn').click()
    cy.get('.journal-text-edit').type('I need to study!')
    cy.get(':nth-child(4) > :nth-child(2)').click()
  })

  it('Should display the not found page', () => {
    cy.get('.notfound-container').should('be.visible')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
    cy.get('.notfound-header').should('be.visible').contains('Oh no! This page either moved or doesn\'t exist. Try something else.')
  })

  it('Should display the not found blurb messages', () => {
    cy.get('.notfound-blurb').should('be.visible')
    cy.get('.notfound-blurb > :nth-child(1)').should('be.visible').contains('P.S. - Hope you\'re doing well. 🤍')
    cy.get('.notfound-blurb > :nth-child(2)').should('be.visible').contains('P.P.S. - Proud of you.')
  })

  it('Should display a home button that can be clicked to move back to the home page', () => {
    cy.get('.uni-btn').should('be.visible').contains('HOME').click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.home').should('be.visible')
  })
})



