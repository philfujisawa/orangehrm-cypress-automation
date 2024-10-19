class MyinfoPage {
    selectorsList() {
        const selectors = {
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

        return selectors
    }

    editMyInfo () {
        cy.get(this.selectorsList().firstNameField).clear().type("Phil")
        cy.get(this.selectorsList().middleNameField).clear().type("Fujisawa")
        cy.get(this.selectorsList().lastNameField).clear().type("Santos")
        cy.get(this.selectorsList().genericField).eq(3).clear().type("33112")
        cy.get(this.selectorsList().genericField).eq(4).clear().type("7587")
        cy.get(this.selectorsList().genericField).eq(5).clear().type("123456")
        cy.get(this.selectorsList().dateField).eq(0).clear().type("2025-12-25")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericCombobox).eq(0).click()
        cy.get(this.selectorsList().selectBrazil).click()
        cy.get(this.selectorsList().genericCombobox).eq(1).click()
        cy.get(this.selectorsList().selectSingle).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type("1987-07-05")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectMale).click()
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get("body").should("contain", "Successfully Updated")
        cy.get(".oxd-toast-close")
    }

    

}

export default MyinfoPage