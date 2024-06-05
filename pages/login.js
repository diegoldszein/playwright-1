exports.LoginPage = class LoginPage {
    
    constructor(page) {
        this.page = page;
    }

    async gotoLoginPage(){
        await this.page.goto('https://www.royalcaribbean.com/account/signin');
        this.username_textbox = await this.page.getByPlaceholder('text');
        this.password_textbox = await this.page.getByPlaceholder('password');
        this.login_button = await this.page.getByRole('button',{name:'Sign in'});
    }

    async login(username, password){
        await this.username_textbox.click();
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }

}
