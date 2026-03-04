# QA - Playwright Pipeline

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/vitorfltt/qatw-primeira-edicao)
[![Playwright](https://img.shields.io/badge/playwright-1.58.2-blue)](https://playwright.dev/)
[![Docker](https://img.shields.io/badge/docker-enabled-blue)](https://www.docker.com/)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

Automação E2E com **Playwright**, **Docker** e **Jenkins**, incluindo integração com PostgreSQL, Redis e relatórios Allure. Permite testar fluxos completos de **frontend e backend** de forma confiável e reprodutível.

---

## Tecnologias Utilizadas

- **Playwright** (Test Runner + Chromium)
- **Node.js**
- **Docker & Docker Compose**
- **Jenkins** (Pipeline declarativo)
- **Allure Reports**
- **PostgreSQL + pgAdmin**
- **Redis**

---

## Arquitetura

- **Page Objects** – `/pages`
- **Cenários de Teste** – `/tests`
- **Helpers, Factories, Massa de Dados** – `/support`
- **Utilitários Gerais** – `/utils`
- **Configuração do Playwright** – `/playwright.config.js`
- **Dockerfile** – Build da imagem customizada do Playwright
- **Docker Compose** – Subida dos serviços auxiliares
- **Jenkinsfile** – Pipeline CI/CD

---

## Como Rodar com Docker (tudo em um bloco para copiar e colar)

```bash
# 1. Build da imagem personalizada
docker build -t vitorfltt/playwright-nj-v1.58.2-noble .

# 2. Subir serviços auxiliares (pgAdmin, PostgreSQL, Redis)
docker-compose up -d

# 3. Executar testes
npx playwright test

# Pipeline no Jenkins (manual se precisar rodar localmente)
# Checkout do repositório
# Instalação das dependências
# Execução dos testes Playwright
# Geração do relatório Allure
# Publicação automática no Jenkins

# 4. Relatórios (local)
# Caminho dos relatórios Allure após execução
allure-results/