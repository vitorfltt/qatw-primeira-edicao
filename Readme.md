🚀 Automação E2E com Playwright, Docker e Jenkins

Este projeto contém uma automação de testes end-to-end utilizando Playwright, totalmente integrada com Docker, Jenkins e relatórios Allure.
Também inclui integração com PostgreSQL (pgAdmin) e consumo de fila no Redis, permitindo testar fluxos completos de backend + frontend.

🧰 Tecnologias utilizadas

Playwright (Test Runner + Chromium)

Node.js

Docker & Docker Compose

Jenkins (pipeline declarativo)

Allure Reports

PostgreSQL + pgAdmin

Redis

Arquitetura Page Objects

📁 Estrutura do Projeto
/tests              → Cenários de teste
/pages              → Page Objects
/support            → Helpers, factories, massa de dados
/utils              → Utilidades gerais
/playwright.config  → Configurações do Playwright
/dockerfile         → Build da imagem Playwright customizada
/docker-compose.yml → Subida dos serviços auxiliares
/Jenkinsfile        → Pipeline CI/CD
🐳 Como rodar com Docker
1. Build da imagem
docker build -t vitorfltt/playwright-nj-v1.58.2-noble .
2. Subir os serviços (pgAdmin, PostgreSQL, Redis)
docker-compose up -d
3. Executar os testes
npx playwright test
🤖 Pipeline no Jenkins

O pipeline executa:

Checkout do repositório

Instalação das dependências

Execução dos testes Playwright

Geração do relatório Allure

Publicação automática no Jenkins

Tudo isso rodando dentro da imagem Docker do Playwright, garantindo reprodutibilidade.

📊 Relatórios

Após a execução dos testes, os relatórios Allure ficam dentro de:

allure-results/

E o Jenkins publica automaticamente a visualização.