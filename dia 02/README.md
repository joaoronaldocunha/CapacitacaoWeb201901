# Dia 01 - Capacitação Web 2019-01

Neste documento são apresentados os passos para execução das atividades executadas no dia 01 do cursod e capacitação Web.

## Instalando as Ferramentas de Desenvolvimento

- Baixar e Instalar Node (https://nodejs.org/en/download/)
- Baixar e Instalar Visual Studio Code (https://code.visualstudio.com/download)
- Baixar e Instalar Git-Bash (https://git-scm.com/downloads)

## Criando Repositório Back-End

1. Acessar página http://github.com
2. Se não tiver cadastro, criar nova conta gratuita.
3. Efetuar login
4. Criar novo repositório Git
5. Após criar novo repositório, clicar em opção para efetuar *clone* do repositório 

> Segue link de vídeo contendo curso básico de Git: https://www.youtube.com/playlist?list=PLInBAd9OZCzzHBJjLFZzRl6DgUmOeG3H0

## Baixando Cópia do Repositório na Máquina Local 

1. Abrir o Visual Studio Code
2. Acessar o terminal (Menu View > Terminal)
3. Acessar uma pasta onde deseja baixar o seu repositório Git (eg Desktop)
4. Efetuar comando git para clonar repositório
    `git clone <url-copiado-do-git-hub>`

## Criar Arquivo a ser Servido

1. Abrir no Visual Studio Code a pasta que corresponde ao repositório clonado a pouco na sua máquina
2. Criar novo arquivo na pasta chamado `server.js`
3. Escrever o seguinte código
```javascript
const http = require('http')

var server = http.createServer(function (req, res) {
    res.end("Hello World");
}).listen(3000);
```
4. Acessar o terminal (Menu View > Terminal)
5. Executar o comando `node server.js`
6. Abrir o Navegador Web e acessar a página http://localhost:3000 
7. Interromper a executar do node através do Ctrl+C


## Salnvando mudanças no Repositório

1. Notem que as mudanças que fizemos até agora (criação do arquivo server.js) foram detectadas pelo Visual Studio Code. Isso acontece porque a pasta aberta no Visual Studio Code é uma cópia local do repositório que criamos no Github e o arquivo server.js não existe no repositório remoto, somente na máquina local.
2. Podemos subir essas mudanças para o nosso repositório remoto. 
3. Acessar o terminal (Menu View > Terminal)
4. Executar o comando `git add .` (este comando adiciona arquivos novos)
5. Executar o comando `git commit -m "criado server.js"` (este comando confirma as mudanças na cópia local do repositório)
6. Executar o comando `git push` (este comando submete as mudanças para o repositório remoto)

> Pode ser necessário efetuar login usando seu mesmo usuário e senha do Gitub para que você possa atualizar seu repositório remoto.
> Toda mudança na cópia local irá indicar como diferente do repositório remoto. É recomendável sempre quando houver mudanças relevantes, que estas sejam enviadas para o repositório.

## Utilizando Pacoate NPM

Fizemos a criação inicial o servidor JS usando recursos básicos. Mas existem pacotes Node que possuem vários recursos novos. Um deles é o express. Mas para usá-lo, precisamos instalar esse pacote.

1. Abrir no Visual Studio Code a pasta que corresponde ao repositório clonado a pouco na sua máquina
2. Acessar o terminal (Menu View > Terminal)
3. Executar o comando `npm init`
4. Seguir com todas as opções padrão. Será criado o arquivo package.json
5. Executar o comando `npm install express --save`. Este comando irá instalar o pacote express e incluí-lo no arquivo package.json

> A dependência para o pacote "express" é adicionado no arquivo package.json. Para instalar local este pacote, pode-se agora executar somente `npm install`

6. Alterar o arquivo `server.js`:

```javascript
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
```

7. Executar o comando `node server.js`
8. Abrir o Navegador Web e acessar a página http://localhost:3000 
9. Interromper a executar do node através do Ctrl+C
10. Note agora que o Visual Studio Code aponta várias alterações no repositório local para serem enviadas para o repositório remoto. Porém, a pasta node_modules não deve ser enviada para o repositório remoto. 
11. Adiciona o arquivo `.gitignore` para incluir a pasta node_modules como pasta a ser ignorada pelo Git. Coloque o seguinte conteúdo neste arquivo:

```javascript
node_modules
```

12. Note que agora as alterações são apenas do arquivo `server.js`
13. Executar o comando `git commit -m "aualizado para express"`
14. Executar o comando `git push`

## Utilizando Node Monitor

1. Abrir no Visual Studio Code a pasta que corresponde ao repositório clonado a pouco na sua máquina
2. Acessar o terminal (Menu View > Terminal)
3. Executar o comando `npm install nodemon --save-dev`. Este comando irá instalar o pacote nodemon como dependência de desenvolvimento e incluí-lo no arquivo package.json
4. Alerar o package.json para incluirnovo script npm. Altere o `scripts` para que fique da seguinte forma:

```javascript
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
```

5. Executar via terminal o comando `npm run dev`. Este comando irá executar o server e monitorar as mudanças no arquivo.
6. Ao alterar a mensagem em `res.send('Hello World');` e salvar o arquivo server.js, automaticamente será atualizado o conteúdo do arquivo executado no Node. Ao atualizar o navegador Web, o conteúdo exibido será atualizado.


