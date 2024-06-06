
exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.icon = page.getByRole('figure').locator('path')
        this.head = page.getByRole('heading')
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.royalcaribbean.com/account/signin');
    }

    async login(username, password){
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
        await expect(page.getByRole('figure').getByRole('img')).toBeVisible();
        await expect(page.getByRole('heading')).toContainText('Iniciar sesión');
    }

}