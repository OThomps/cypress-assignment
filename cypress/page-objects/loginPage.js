export class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return ('#user-name');
    }

    get inputPassword() {
        return ('#password');
    }

    get btnSubmit() {
        return ('#login-button');
    }

    get loginMessage() {
        return ('h3[data-test="error"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        cy.get(this.inputUsername).type(username);
        cy.get(this.inputPassword).type(password);
        cy.get(this.btnSubmit).click();
    }

}
export default new LoginPage()