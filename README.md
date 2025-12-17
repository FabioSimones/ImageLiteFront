# 🖼️ ImageLite – Frontend

## 📌 Sobre o projeto

O **ImageLite Frontend** é a interface web do projeto **ImageLite**, desenvolvida para consumir a API REST do backend e permitir a interação do usuário com o sistema de upload e gerenciamento de imagens.

O foco deste projeto é o **estudo e prática de desenvolvimento frontend moderno**, utilizando **React** aliado ao **Tailwind CSS**, com ênfase em componentização, responsividade e integração com APIs protegidas por autenticação JWT.

---

## 🎯 Objetivos

* Consumir uma **API REST segura** com autenticação JWT
* Implementar telas de **cadastro e login de usuários**
* Permitir o **upload e visualização de imagens**
* Aplicar boas práticas de componentização no React
* Utilizar **Tailwind CSS** para estilização rápida e responsiva

---

## 🛠️ Tecnologias Utilizadas

* ⚛️ **React**
* 🎨 **Tailwind CSS**
* 🌐 **JavaScript (ES6+)**
* 🔐 **Autenticação via JWT**
* 📡 **Integração com API REST (ImageLite Backend)**

---

## ⚙️ Funcionalidades

* ✅ Tela de cadastro de usuário
* ✅ Tela de login com geração e armazenamento do token JWT
* ✅ Upload de imagens para o backend
* ✅ Listagem e visualização de imagens cadastradas
* ✅ Proteção de rotas autenticadas
* ✅ Layout responsivo

---

## 🧱 Arquitetura Frontend

O projeto segue uma organização baseada em **componentização**, separando responsabilidades entre:

* Componentes reutilizáveis
* Páginas
* Serviços de comunicação com a API
* Gerenciamento de autenticação

Essa abordagem facilita a manutenção, escalabilidade e reutilização de código.

---

## 🚀 Como executar o projeto

### Pré-requisitos

* Node.js (versão LTS recomendada)
* Gerenciador de pacotes (npm ou yarn)
* Backend do **ImageLite** em execução

### Passo a passo

```bash
# Instalar as dependências
npm install

# Iniciar a aplicação
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

*(ou conforme indicado no terminal)*

---

## 🔗 Integração com o Backend

Certifique-se de que o backend esteja rodando corretamente.

Configure a **URL da API** no arquivo de serviço (ex: `api.js` ou `axiosConfig.js`):

```js
const API_URL = "http://localhost:8080";
```

---

## 🧪 Testes das Funcionalidades

> 📸 **Espaço reservado para imagens/gifs da interface em funcionamento**

Você pode adicionar aqui:

* Tela de cadastro de imagens.
* Tela de pesquisa de imagens.
* Rela de pesquisa de imagem pela tag.


Exemplo:

<img width="1936" height="830" alt="image" src="https://github.com/user-attachments/assets/e150e2c9-796a-4cb2-8719-81c46ae3ae3d" />
<img width="1295" height="584" alt="image" src="https://github.com/user-attachments/assets/69632d0a-fd7c-48ae-b812-7805088e92c2" />
<img width="1359" height="714" alt="image" src="https://github.com/user-attachments/assets/19c05bad-52ae-418b-9051-607753f3ffd1" />


---

## 📚 Aprendizados

* Consumo de APIs REST com React
* Gerenciamento de autenticação JWT no frontend
* Estilização com Tailwind CSS
* Criação de layouts responsivos
* Organização de projetos React

---

## 🔮 Melhorias Futuras

* 🔄 Paginação de imagens
* 🧪 Testes automatizados (Jest / React Testing Library)
* 🌙 Modo dark

---

## 👤 Autor

Projeto desenvolvido por **Fábio Simones** 🚀

Este frontend faz parte do ecossistema do projeto **ImageLite**, em conjunto com o backend desenvolvido em Java com Spring Boot.
