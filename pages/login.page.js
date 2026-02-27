import { expect } from '@playwright/test';

export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('http://paybank-mf-auth:3000/');
  }

  async enterCPF(cpf) {
    await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf);
  }

  async clickContinue() {
    await this.page.getByRole('button', { name: 'Continuar' }).click();
  }

  async enterPasswordDigits(password) {
    for (const digito of password) {
      await this.page.getByRole('button', { name: digito }).click();
    }
  }

  async enterVerificationCode(code) {
    await this.page.getByRole('textbox', { name: '000000' }).fill(code);
    await this.page.getByRole('button', { name: 'Verificar' }).click();
  }

  invalidCodeLocator() {
    return this.page.getByText('Código inválido. Por favor,');
  }
}
