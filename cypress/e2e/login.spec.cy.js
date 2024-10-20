import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login - Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkdashboardPage()
    
  })

})