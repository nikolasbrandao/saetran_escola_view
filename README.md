# escola-seatran-view

> Projeto para consumir a api do Seatran Escolas

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Para consumir a aplicação

O projeto tem a roda inicial ('/') configurada para receber o codigo do imovel (codigo_imovel) das tabelas oriundas do escola_saetran_api.

Ex:
``` bash
# Consultar Liceu Maranhense, com codigo_imovel = 88
http://localhost:8080/88

# Consultar Tiradentes, com codigo_imovel = 367
http://localhost:8080/367
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
