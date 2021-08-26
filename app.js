// Incluindo uma biblioteca (pacote http e pacote para url)
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Definindo qual é o IP/Port [endereço / URL]
const hostname = '127.0.0.1'; // [localhost]
const port = 3000;


// Implementação da regra de negócios
const server = http.createServer((req, res) => { //createServer - cria o server no localhost

// Pegar a pergunta na url
const params = queryString.parse(url.parse(req.url, true).search);

// Verificar a pergunta e escolher uma resposta
let resposta; // Variável de bloco que recebe diferentes valores dependendo do momento
if(params.pergunta == 'melhor-filme') {
  resposta = 'Star Wars';
} else if(params.pergunta == 'melhor-tecnologia-backend') {
  resposta = 'node.js';
} 
else {
  resposta = 'Não sei, desculpe :(';
}

// Retornar a resposta escolhida

  res.statusCode = 200; //200 - código de sucesso
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta); // Imprime a variável resposta na tela
});

//Execução do código
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});