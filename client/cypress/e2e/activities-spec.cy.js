describe('Activities page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.uni-btn').click()
    cy.get('.feelings-container > :nth-child(4)').click()
    cy.get('#journal-entry').type('Im feeling anxious because I have a big project due this weekend.')
    cy.get('.uni-btn').click()

  })

  it('Should display the header and the activity page', () => {
    cy.get('.activity-page').should('be.visible')
    cy.get('header').should('be.visible')
  })

  it('Should display an activity card that shows one activity idea at a time', () => {
    cy.get('.activity-card').should('be.visible')
    cy.get('h2').should('be.visible').contains('Take a long shower or bath, and change into clothes that make you feel comfortable and confident!')
    cy.visit('http://localhost:3000/what-should-you-do/Anxious')
  })

  it('Should display a new activity when the user clicks the right arrow', () => {
    cy.get('.activities-btns').click()
    cy.get('h2').should('be.visible').contains('Watch, listen to, or read something that will make you laugh.')
    cy.get('.activity-card > :nth-child(1)').should('be.visible')
  })

  it('Should display a button that selects the current activity and brings the user from the activities page to the log page', () => {
    cy.get('.uni-btn').click()
    cy.get('.activity-page').should('not.exist')
    cy.url().should('eq', 'http://localhost:3000/how-you-felt')
  })

})