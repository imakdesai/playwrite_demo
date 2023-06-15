import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly loginBtn: Locator;
    readonly emailInput: Locator;
    readonly passwordField: Locator;
    readonly oktaEmailInput: Locator;
    readonly oktaPasswordInput: Locator;
    readonly oktaSubmitInput: Locator;
    readonly btnCreateGoal: Locator;

    page: Page;
    
    constructor( page: Page ) {
        this.page = page;
        this.loginBtn = page.locator(`[data-ptor="log-in-btn"]`);
        this.emailInput = page.locator(`[data-ptor="signin-email"]`);
        this.passwordField = page.locator(`[data-ptor="signin-password"]`);
        this.oktaEmailInput = page.locator('#okta-signin-usernam');
        this.oktaPasswordInput = page.locator('#okta-signin-password');
        this.oktaSubmitInput = page.locator('#okta-signin-submit');
        this.btnCreateGoal = page.locator(`[data-ptor="create-goal-button"]`)
    }

    async visit () {
        await this.page.goto('/')
    }

    async  inputEmailAndPressEnter(email) {
        await this.emailInput.fill(email)
        await this.emailInput.press('Enter');
      }

     /**
   * Login with credentails
   */
  async loginWithCredentails(username, password) {
      await this.visit()
      await this.emailInput.fill(username);
      await this.loginBtn.click();
      await this.page.waitForLoadState();
      await this.passwordField.type(password);
      await this.loginBtn.click();
      await this.page.waitForURL('/app/#/');
      await expect(this.btnCreateGoal).toBeVisible();
  }
}
