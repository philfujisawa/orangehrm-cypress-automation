class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[placeholder='Password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: '.oxd-alert',
        }

        return selectors
    }

    accessLoginPage () {
        cy.visit('/auth/login')
    }

    loginAnyWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }



}

export default LoginPage