import userData from "../fixtures/user-data.json"

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[placeholder='Password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: '.oxd-alert',
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericCombobox: ".oxd-select-text--arrow",
    selectBrazil: ".oxd-select-dropdown > :nth-child(27)",
    selectSingle: '.oxd-select-dropdown > :nth-child(2)',
    selectMale: ':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input',
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type("Phil")
    cy.get(selectorsList.middleNameField).clear().type("Fujisawa")
    cy.get(selectorsList.lastNameField).clear().type("Santos")
    cy.get(selectorsList.genericField).eq(3).clear().type("33112")
    cy.get(selectorsList.genericField).eq(4).clear().type("7587")
    cy.get(selectorsList.genericField).eq(5).clear().type("123456")
    cy.get(selectorsList.dateField).eq(0).clear().type("2025-12-25")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.selectBrazil).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.selectSingle).click()
    cy.get(selectorsList.dateField).eq(1).clear().type("1987-07-05")
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.selectMale).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get("body").should("contain", "Successfully Updated")
    cy.get(".oxd-toast-close")  
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})