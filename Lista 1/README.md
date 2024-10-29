
# S206 - Projeto de Automação de Testes com Cypress e Mochawesome

## Instalação

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/Nathalia-Costaa/S206.git
   cd "./S206/Lista 1"
   ```

2. **Instale as Dependências:**
   Instale Cypress e Mochawesome:
   ```bash
   npm install cypress --save-dev
   npm install cypress-mochawesome-reporter --save-dev
   ```

## Execução dos Testes

Para rodar os testes, use:

```bash
npx cypress open
```

## Geração de Relatórios

Após a execução dos testes, o Mochawesome gera um relatório com detalhes dos testes.

- Os relatórios são salvos na pasta `cypress/reports` por padrão.
- Para visualizar o relatório, abra o arquivo `.html` gerado no navegador, localizado em `cypress/reports/mochawesome-report.html`.
