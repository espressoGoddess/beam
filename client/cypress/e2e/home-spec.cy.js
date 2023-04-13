describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'example.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should display the home page', () => {
    cy.get('.home').should('be.visible')
  })

  it('Should display the site logo', () => {
    cy.get('.logo-home').should('be.visible').contains('BEAM')
  })

  it('Should display a heading for the site info blurb' , () => {
    cy.get('.home > :nth-child(2)').should('be.visible').contains('Beam is an interactive self-care feeling tracking app.')
  })

  it('Should display the home blurb', () => {
    cy.get('.blurb').should('be.visible').contains('We created a flow intended to help you work through any kind of feeling or emotion you might be experiencing. You\'ll be asked to choose a feeling and reflect on it. Add anything about your experience that might help you avoid or recreate the feeling in the future (depending on the feeling). After your reflection, you\'ll see an offering of a few activities that might help. Your entries will be available to you in the Feelings Archive for future reflection.')
  })

  it('Should display a final subheading message', () => {
    cy.get('.home > :nth-child(4)').should('be.visible').contains('We hope this process will help reveal useful patterns over time.')
  })

  it('Should display a button that brings the user from the home page to the feelings page', () => {
    cy.get('.uni-btn').should('be.visible').contains('Let\'s dig in').click()
    cy.get('.home').should('not.exist')
    cy.get('main').should('be.visible')
  })
})