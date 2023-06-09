describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'entries.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should onlg display the home page', () => {
    cy.get('.home').should('be.visible')
    cy.get('header').should('not.exist')
  })

  it('Should display the site logo', () => {
    cy.get('.logo-home').should('be.visible').contains('BEAM')
  })

  it('Should display a dropdown for the site info blurb' , () => {
    cy.get('.whats-beam').should('be.visible').contains('What is Beam?')
  })

  it('Should display the home blurb when the user selects the dropdown', () => {
    cy.get('.whats-beam').click()
    cy.get('h2').should('be.visible').contains('Beam is an interactive self-care feeling tracking app.')
    cy.get('.blurb').should('be.visible').contains('We created a flow intended to help you work through any kind of feeling or emotion you might be experiencing. You\'ll be asked to choose a feeling and reflect on it. Add anything about your experience that might help you avoid or recreate the feeling in the future (depending on the feeling). After your reflection, you\'ll see an offering of a few activities that might help. Your entries will be available to you in the Feelings Archive for future reflection. We hope this process will help reveal useful patterns over time.')
  })

  it('Should display a button that brings the user from the home page to the feelings page', () => {
    cy.get('.uni-btn').should('be.visible').contains('Let\'s dig in').click()
    cy.get('.home').should('not.exist')
    cy.get('main').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/how-are-you-feeling')
  })
})