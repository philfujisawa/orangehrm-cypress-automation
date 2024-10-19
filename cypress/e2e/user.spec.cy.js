import userData from "../fixtures/user-data.json"
import LoginPage from "../pages/loginPage.js"
import DashboardPage from "../pages/dashboardPage.js"
import MenuPage from "../pages/menuPage.js"
import MyinfoPage from "../pages/myinfoPage.js"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginAnyWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkdashboardPage()
    menuPage.accessPerfomance()
    menuPage.accessMyInfo()
    myinfoPage.editMyInfo()
        
  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
  })
})