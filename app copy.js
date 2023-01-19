//incluindo bibliotecas
const http = require('http')
const url = require('url')
const queryString = require('query-string')

//definindo requisição / url
const hostname = '127.0.0.1'
const port = 4000

//implementação regra de negócio
const server = http.createServer((req, res) => {
    const params = queryString.parse(url.parse(req.url, true).search)
    console.log(params)

    let resposta;

    if (params.pergunta == 'melhor-filme') {
        resposta = 'Frances Ha'
    }
    else if (params.pergunta == 'melhor-fruta') {
        resposta = 'Uva'
    }
    else {
        resposta = 'Não sei'
    }

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(resposta)
})

//execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// const http = require('http')
// const url = ('url')
// const queryString = require('query-string')
// const fs = require('fs')

// const hostname = '127.0.0.1'
// const port = 4000

// const server = http.createServer((req, res) => {
//     const params = queryString.parse(url.parse(req.url, true).search)

//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end("Hello World")
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })