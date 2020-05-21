
describe('Feedback Testing', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })
        // verify that the form is rendered
    it('Should load the feedback form', () => {
        cy.get('form').should('be.visible')
    })

    it('should fill the feedback form', () => {
        cy.get('#name').type('Frank')
        cy.get('#email').type('email@SpeechGrammarList.com')
        cy.get('#subject').type('Just subject of the matter')
        cy.get('#comment').type('Just comment to explain this test case')
    })

    it('should submit the feedback form', () => {
        cy.get('.btn-signin').click()
        
    })

    it('should display the feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    })
})
