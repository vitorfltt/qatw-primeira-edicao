import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

    validatorSuccessLogin() {
    return this.page.locator('#account-balance');
  }

}