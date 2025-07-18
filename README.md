# 📚 Catálogo de Livros com Angular

Este projeto é uma aplicação web desenvolvida com Angular que permite visualizar, adicionar e excluir livros de um catálogo simples. Ele foi construído utilizando as **Standalone APIs** do Angular (versão 15+, ou a que você usou), demonstrando a abordagem moderna para desenvolvimento de componentes e roteamento sem a necessidade de módulos `NgModule` explícitos.

## ✨ Funcionalidades

* **Listagem de Livros:** Exibe uma tabela com o título, resumo, editora e autores dos livros.
* **Cadastro de Livros:** Permite adicionar novos livros ao catálogo através de um formulário intuitivo.
* **Exclusão de Livros:** Possibilita remover livros existentes do catálogo.
* **Navegação:** Interface simples com navegação entre a lista de livros e o formulário de cadastro.

## 🚀 Tecnologias Utilizadas

* **Angular CLI:** Ferramenta para iniciar, desenvolver e manter aplicações Angular.
    * Versão: `Angular CLI 19.2.15` (ou a versão que você usou)
* **TypeScript:** Linguagem de programação que adiciona tipagem estática ao JavaScript.
* **HTML5:** Linguagem de marcação para a estrutura da página.
* **CSS3:** Linguagem de estilo para a aparência da aplicação.
* **Bootstrap 5.3:** Framework CSS para estilização rápida e responsividade da interface.
* **Git:** Sistema de controle de versão para gerenciar o histórico do código.
* **GitHub:** Plataforma para hospedagem do repositório de código.

## 📂 Estrutura do Projeto (Standalone Components)

A estrutura segue o padrão Angular com a particularidade de utilizar **Standalone Components**, o que significa que o projeto não possui um arquivo `app.module.ts` principal. As principais configurações e dependências são gerenciadas em:

* `src/app/app.routes.ts`: Define as rotas da aplicação.
* `src/app/app.config.ts`: Configura os provedores de serviço (como `ControleEditoraService` e `ControleLivrosService`) e o roteamento global.
* `src/main.ts`: Ponto de entrada da aplicação, responsável pelo bootstrapping do `AppComponent` como um componente standalone.
* `src/app/controle-editora.service.ts`: Serviço para gerenciar dados das editoras.
* `src/app/controle-livros.service.ts`: Serviço para gerenciar dados dos livros (obter, incluir, excluir).
* `src/app/editora.ts`: Classe que define a estrutura de uma editora.
* `src/app/livro.ts`: Classe que define a estrutura de um livro.
* `src/app/livro-lista/`: Componente para exibir a lista de livros.
    * `livro-lista.component.ts` (standalone, importa `CommonModule`)
    * `livro-lista.component.html`
* `src/app/livro-dados/`: Componente para o formulário de cadastro de livros.
    * `livro-dados.component.ts` (standalone, importa `CommonModule`, `FormsModule`)
    * `livro-dados.component.html`
* `src/app/app.component.ts`: Componente raiz da aplicação (standalone, importa `CommonModule`, `RouterOutlet`, `RouterLink`).
* `src/index.html`: Arquivo HTML principal, inclui o Bootstrap CSS.

## ⚙️ Como Rodar o Projeto Localmente

Para executar esta aplicação em seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/EduardoPinheiroS/livros-angular.git](https://github.com/EduardoPinheiroS/livros-angular.git)
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd livros-angular
    ```
3.  **Instale as dependências:**
    Certifique-se de ter o Node.js e o Angular CLI instalados. Em seguida, instale as dependências do projeto:
    ```bash
    npm install
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
5.  **Acesse a aplicação:**
    Abra seu navegador e navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você fizer alguma alteração nos arquivos.

## 🤝 Contribuição

Sinta-se à vontade para explorar o código, sugerir melhorias ou relatar problemas.

---

**Desenvolvido por:** Eduardo Pinheiro dos Santos
**Disciplina:** Desenvolvimento full stack	
**Instituição:** Estácio
**Data:** 18 de Julho de 2025 
