describe('Activities page', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3001/api/v1/entries', {
      statusCode: 201,
      fixture: 'entry.json'
    })
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'entries.json'
    })
    cy.visit('http://localhost:3000/what-should-you-do/Anxious')
  })

  it('Should display the header and the activity page', () => {
    cy.get('.activity-page').should('be.visible')
    cy.get('header').should('be.visible')
  })

  it('Should display directions for the user to look through and select an activity', () => {
    cy.get('.activity-blurb').should('be.visible').contains('Here are a few activites that might meet you where you are...')
  })

  it('Should display an activity card that shows one activity idea at a time', () => {
    cy.get('.activity-card').should('be.visible')
    cy.get('h2').should('be.visible').contains('Take a long shower or bath, and change into clothes that make you feel comfortable and confident!')
    cy.visit('http://localhost:3000/what-should-you-do/Anxious')
  })

  it('Should allow the user to navigate back and forth through activities ideas using the arrow buttons', () => {
    cy.get('.activities-btns').click()
    cy.get('h2').should('be.visible').contains('Watch, listen to, or read something that will make you laugh.')
    cy.get('.activity-card > :nth-child(1)').should('be.visible').click()
    cy.get('h2').should('be.visible').contains('Take a long shower or bath, and change into clothes that make you feel comfortable and confident!')
  })

  it('Should display a button that selects the current activity and brings the user from the activities page to the log page. The log page should include the original data along with the posted data.', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/entries', {
      statusCode: 200,
      fixture: 'postEntries.json'
    })
    cy.get('.uni-btn').click()
    cy.get('.activity-page').should('not.exist')
    cy.url().should('eq', 'http://localhost:3000/how-you-felt')

    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('be.visible').contains('Apr 14, 2023')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('be.visible').contains('Anxious')
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('be.visible').contains('Go on a sensory walk')
    cy.get(':nth-child(4) > :nth-child(4) > a > .fa-solid').should('be.visible')
  })
})