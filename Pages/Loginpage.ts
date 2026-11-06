import { Page } from "playwright";

export class Loginpage {

    constructor(private page: Page) {}

    async navigate() {
        const url = process.env.BASE_URL;

        if (!url) {
            throw new Error("BASE_URL is missing in .env file");
        }

        await this.page.goto(url);
    }

async login(username:string, password:string){ 
 await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
  await this.page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
  await this.page.getByRole('button', { name: 'Login' }).click();
}

async recruitmentPage(){
  await this.page.getByRole('link', { name: 'Recruitment' }).click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.locator('.oxd-icon.bi-calendar').first().click();
  await this.page.getByText('5', { exact: true }).click();
  await this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await this.page.getByText('6', { exact: true }).click();
  await this.page.getByText('-- Select --').click();
  await this.page.getByRole('button', { name: 'Reset' }).click();
  await this.page.getByRole('link', { name: 'Leave' }).click();
  await this.page.locator('.oxd-icon.bi-calendar').first().click();
  await this.page.getByText('1', { exact: true }).click();
  await this.page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  await this.page.getByText('4', { exact: true }).click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByRole('button', { name: 'Reset' }).click();

}

async loginButton(){
    await this.page.locator('#login').click();
}
async leavePage(){
  await this.page.getByRole('link', { name: 'Leave' }).click();
  await this.page.getByText('-- Select --').first().click();
  await this.page.getByText('-- Select --').nth(1).click();
  await this.page.getByRole('button', { name: 'Reset' }).click();

}

}