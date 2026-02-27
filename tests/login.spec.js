import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';
import DashPage from '../pages/dash.page';
import { obterCodigo2FA } from '../support/db';
import { cleanJobs, getJob } from '../support/redis';

test('Validação de login inválido', async ({ page }) => {
  const usuario = {
    cpf: '00000014141',
    senha: '147258',
  };

  const login = new LoginPage(page);
  await login.goto();
  await login.enterCPF(usuario.cpf);
  await login.clickContinue();

  await login.enterPasswordDigits(usuario.senha);
  await login.clickContinue();

  await login.enterVerificationCode('000000');
  await expect(login.invalidCodeLocator()).toBeVisible();
});

test('Login sucesso', async ({ page }) => {
  const usuario = {
    cpf: '00000014141',
    senha: '147258',
  };

  await cleanJobs();

  const login = new LoginPage(page);
  const dash = new DashPage(page);
  await login.goto();
  await login.enterCPF(usuario.cpf);
  await login.clickContinue();

  await login.enterPasswordDigits(usuario.senha);
  await login.clickContinue();

  await page.getByRole("heading", { name: "Verificação em duas etapas" }).waitFor({timeout: 3000});

  const codigo = await getJob();
  // const codigo2FA = await obterCodigo2FA(usuario.cpf);

  await login.enterVerificationCode(codigo);

  await page.waitForTimeout(2000); // Aguarda um tempo para garantir que o código 2FA seja gerado

  await expect(dash.validatorSuccessLogin()).toHaveText("R$ 5.000,00");
});