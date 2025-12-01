# — Páginas Home e Login + Testes Cypress

Este repositório contém as páginas **Home** e **Login** da aplicação *Connext*, além de testes automatizados desenvolvidos com **Cypress** para validar o comportamento e os elementos principais de cada página.

---

#  Páginas da Aplicação

A seguir, uma explicação detalhada de cada página incluída no projeto:

---

##  Página Home (`home.html`)

A página **Home** é a porta de entrada do sistema Connext. Ela apresenta uma visão geral da plataforma e explica a finalidade da aplicação.

### Componentes principais

### **Navbar**
- Contém o nome “Connext”
- Link “Home”
- Botão **Login / Cadastro**

### **Seção Hero**
- Título: **Bem-vindo ao Connext**
- Subtítulo explicando o objetivo do sistema

### **Sobre o Projeto**
Explica:
- O propósito do Connext  
- Como ele funciona  
- Vantagens e aplicabilidade  

### **Lista: Nossos Objetivos**
1. Desenvolver interface simples e moderna  
2. Exibir informações como nome, IP e status dos dispositivos  
3. Atualizações em tempo real  
4. Segurança e controle para administradores  

### **Rodapé**
- Direitos autorais  
- Nome do sistema  
- Ano atual  

---

## Página Login (`login.html`)

A página **Login** permite o acesso ao sistema através das credenciais do usuário.

###  Componentes principais

### **Logo da aplicação**
Imagem principal exibida no topo.

### **Título**
`Entrar`

### **Inputs**
- Usuário ou e-mail  
- Senha  

### **Botão Login**
Envia o formulário.

### **Link de recuperação de senha**
`esqueceu a senha?`

---

#  Testes Automatizados com Cypress

Os testes desse repositório garantem o funcionamento correto das duas páginas.

##  `home_teste.cy.js`
Valida:
- Título da página  
- Navbar  
- Hero  
- Seção “Sobre o Projeto”  
- Lista de objetivos  
- Footer  

## `login_teste.cy.js`
Valida:
- Título  
- Favicon  
- Logo  
- Inputs  
- Botão  
- Link “Esqueceu a senha?”  
- Digitação nos campos  

---

#  Como Executar os Testes

##  Instale as dependências

```sh
npm install
npx http-server . -p 8080
npm run cypress:open
npm run cypress:run
