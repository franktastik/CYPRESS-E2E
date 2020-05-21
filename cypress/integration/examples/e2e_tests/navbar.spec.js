
describe('Navbar test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online banking content', () => {
       
        // cy.get('#Online Banking').click()
        cy.contains('Online Banking').click()
        // verify that we are on the exact page. targeting the URL is important
        cy.url().should('include', 'online-banking.html')
        //make sure h1 is visible
        cy.get('h1').should('be.visible')
    })

    it('should display feedback content', () => {
        //grab the element of the feedback and click on it
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('be.visible')
    })

    it('should display home page content', () => {
        
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    })
})
