# CRUD_LINX

#Requisitos para aplicação

Node versão LTS

#BackEnd

Na pasta raiz backend executar via terminal npm install pois o node_modules foi colocado no arquivo gitignore para melhor performance no clone do repositorio, em seguida executar o comando npm start para inicio do servidor JSON que irá servir o front end e a API de dados.


A url da API é http://localhost:3001/users e http://localhost:3001/users/{id}, caso sua maquina esteja utilizando a porta 3001 ou se desejar alterar basta ir no arquivo package.json na linha 7 e alterar a porta de 3001 para a que desejar.

#FrontEnd

Na pasta raiz frontend executar via terminal npm install pois o node_modules foi colocado no arquivo gitignore para melhor performance no clone do repositorio, após isso executar npm start para iniciar a aplicação de CRUD, por default ela inicia na porta 3000, porem caso seja necessário alterar basta acessar o arquivo package.json e alterar na linha 17 "start": "set PORT=3005 && react-scripts start" colocando a porta de preferência.
Caso não inicie automaticamente basta seguir a url a seguir http://localhost:3000/

Utilização do Sistema

Clicando na barra de navegação a esquerda em usuários ele ira trazer a lista de todos os usuários cadastrados, caso deseje cadastrar um novo é necessário preecher todos os campos de input e clicar em salvar, caso deseje alterar é necessário clicar no botao amarelo a direita da tela com um icone de lapis, alterar os campos necessário e clicar em salvar, caso deseje limpar os campos pode clicar no botão cancelar que todos os inputs irão voltar para o estado inicial e por ultimo caso deseje apagar um usuário é necessário clicar no botão vermelho a direita da tela com um icone de lixeira.
