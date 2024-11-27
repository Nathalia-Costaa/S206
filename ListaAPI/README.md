# Lista de Testes de API

Este projeto contém uma coleção de testes automatizados para APIs, utilizando o **Postman** e o **Newman** para execução e geração de relatórios em HTML.

---

## **Como usar**

Siga os passos abaixo para clonar o repositório, configurar as dependências e executar os testes:

### **1. Clonar o repositório**
```bash
git clone https://github.com/Nathalia-Costaa/S206/tree/main/ListaAPI.git
cd ListaAPI

### **2. Testes de API**
1. Navegue até o diretório de testes de API:
``` bash
cd "Testes de API"

2. Instale o Newman e o htmlextra para executar e gerar os relatórios:
``` bash
npm install -g newman newman-reporter-htmlextra

3. Execute os testes utilizando o arquivo collection.json e gere o relatório:
``` bash
newman run collection.json -e environment.json -r htmlextra

4. O relatório HTML será gerado na pasta atual.