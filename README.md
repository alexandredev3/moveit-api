<h1 align="center">
  <img width="400px" src="./.github/moveit.svg" />
  <br />
  <a href="https://www.linkedin.com/in/alexandre-costa-401699199">
    <img alt="Linkedin" src="https://img.shields.io/badge/-Alexandre%20Costa-29B6D1?label=Linkedin&logo=linkedin&style=flat-square">
  </a>
  <a href="https://github.com/alexandredev3/moveit-api/blob/master/LICENSE.txt">
    <img alt="GitHub license" src="https://img.shields.io/github/license/alexandredev3/moveit-api?logo=mint&style=flat-square">
  </a>
  <a href="https://github.com/alexandredev3/moveit-api/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/alexandredev3/moveit-api?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/alexandredev3/moveit-api/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub issues" src="https://badgen.net/github/closed-issues/alexandredev3/moveit-api?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/alexandredev3/moveit-api/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/alexandredev3/moveit-api?color=29B6D1&style=flat-square">
  </a>
  <a href="https://github.com/alexandredev3/moveit-api/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/alexandredev3/moveit-api?color=29B6D1&style=flat-square">
  </a>
</h1>
<p align="center">
  <a href="#page_facing_up-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#clipboard-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#closed_book-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#man-Autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-Licença">Licença</a>
</p>

<img src="./.github/browser.svg" />

## :page_facing_up: Descrição
API para gerar uma thumbnail com algumas informações do usuário para SEO, essa API faz parte do app <a href="https://github.com/alexandredev3/moveit-nlw4" target="__blank">move.it</a>. </br>
Acesse este <a href="https://moveit-api-v2-alexandredev3.herokuapp.com/thumbnail?id=603f8c597748042ad1b292cd">Link</a> para acessar a aplicação em produção.

## :motorway: Rotas
__GET__: Retornará uma imagem em PNG. (```/thumbnail?id=$USER_ID```)

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com)
- [Puppeteer](https://pptr.dev/)
- [HandleBars](https://handlebarsjs.com/)

## :clipboard: Funcionalidades
- [x] Gerar uma Thumbnail mostrando o nível, experiência e desafios cumpridos. 

## :closed_book: Instalação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

```bash
# Clone este repositório.
$ git clone https://github.com/alexandredev3/moveit-api.git

# Vá para a pasta moveit-nlw4
$ cd moveit-api

# Instale as dependências
$ npm install 

# Execute aplicação
$ npm run dev

# O app vai está rodando na porta 3000 - acesse <http://localhost:3000>
```

## :man: Autor

<a href="https://github.com/alexandredev3/">
 <img src="https://avatars0.githubusercontent.com/u/61118233?s=400&u=37870397a9363ce5e768975c05e95a5f5d323ca1&v=4" width="70px;" alt=""/>
 <br />
 <sub><b>Alexandre Costa</b></sub>
</a>


Feito com ❤️ por Alexandre Costa :wave::wave: Entre em contato!🚀

<a href="https://www.linkedin.com/in/alexandre-costa-dos-santos">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Alexandre%20Costa-9871F5?label=Linkedin&logo=linkedin&style=flat-square">
</a>


## :memo: Licença

Copyright © 2020 [Alexandre Costa](https://github.com/alexandredev3).<br />
This project is [MIT](./LICENSE.txt) licensed.
