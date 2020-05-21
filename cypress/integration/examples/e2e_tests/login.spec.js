
describe('Login and Logout Test case', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        // check the url 
        cy.url().should('include','index.html')
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid credentials', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()
    })

    it('should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible')
            .and('contain', 'Login and/or password are wrong')
    })

    it('should login to application', () => {
        cy.fixture('user').then(user => {
            const username = user.id 
            const password =user.pwd
        
        // cy.get('#user_login').type(username)
        // cy.get('#user_password').type(password)
        // cy.get('#user_remember_me').click()
        // cy.contains('Sign in').click()
        
        //code above is refactored to the code below and the above was transferred to the Support/commands.js
        cy.login(username, password)

        })
        cy.get('ul.nav-tabs').should('be.visible')
    })


    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        //verify if you are logged out 
        cy.url().should('include', 'index.html')
    })
})
