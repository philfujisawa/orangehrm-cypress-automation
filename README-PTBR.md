# OrangeHRM Cypress Automation
![projeto1](assets/hrm_orange_art.png)
_Este é o meu projeto de automação de testes para a aplicação OrangeHRM, um site estruturado para RH, minha automação foi desenvolvida com o objetivo de validar algumas das funcionalidades principais do sistema. Estruturei usando o padrão Page Object Model (POM), que facilita tanto a organização quanto a manutenção dos testes._

## Funcionalidades Automatizadas
**Automatizei os seguintes cenários:**

1. Login com Credenciais Válidas

2. Login com Credenciais Inválidas

3. Logout

4. Cadastro de um Novo Usuário

5. Edição de Informações do Usuário

**Integrei com CI/CD através do GitHub Actions**

## Estrutura do Projeto
Utilizei o padrão Page Object Model para organizar o código, separando a lógica de cada página em classes específicas. Essa abordagem torna o código mais modular, fácil de manter e escalável, facilitando futuras adições de novos testes.

### Melhorias Futuras
Planejo algumas melhorias para o projeto, incluindo:

+ **Expansão dos Cenários de Teste:** Quero expandir o escopo para incluir mais cenários.
+ **Implementação de Relatórios Detalhados:** Quero adicionar um gerador de relatórios detalhados que permita uma visualização mais clara dos resultados dos testes.

## Como Executar o Projeto
### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
+ [Node.js](https://nodejs.org/pt)
  
**Observação:** Caso você não tenha um navegador instalado, o Cypress utilizará o Electron por padrão para executar os testes.
Para aumentar a diversidade e tornar os dados de teste mais dinâmicos, integrei a biblioteca Chance ao projeto. Ela gera dados aleatórios, como nomes de usuário e números de identificação, entre outros. Isso contribui para evitar a repetição dos mesmos dados nos testes, proporcionando mais realismo e abrangência nos cenários testados.
+ Para Instalar:
npm install chance


### Passos para Instalação

1. **Clone o repositório** para sua máquina local:
git clone https://github.com/philfujisawa/orangehrm-cypress-automation.git

2. **Acesse o diretório do projeto.** O diretório pode ser escolhido de acordo com o local onde você clonou o repositório:
cd caminho/para/o/diretorio/orangehrm-cypress-automation

3. **Instale as dependências** do projeto:
npm install

4. **Execute o Cypress** para rodar os testes:
   
Para abrir o Cypress com a interface gráfica:
   
npx cypress open

Ou, para rodar os testes em modo headless (sem interface gráfica):
npx cypress run

Obrigado!