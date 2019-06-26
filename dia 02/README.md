# Dia 02 - Capacitação Web 2019-01

Neste documento são apresentados os passos para execução das atividades executadas no dia 02 do curso de capacitação Web.

## Organizando o Projeto

1. Vamos começar organizando nosso projeto.
2. Crie uma pasta `routes` onde iremos colocar nosso conteúdo do servidor
3. Dentro dessa pasta, vamos criar o arquivo `index.js` dentro da pasta `routes`
4. Colocar o seguinte conteúdo neste arquivo:

```javascript
const express = require('express');

const routes = express.Router();

routes.get("/", function (req, res) {
    res.send('Capacitação Desenvolvedor Web');    
};);

module.exports = routes;
```

5. Agora vamos criar o arquivo `index.js` dentro da pasta `routes`

```javascript
const express = require('express');

const routes = express.Router();

routes.use("/", require('./info'));

module.exports = routes;
```

> Note que estamos usando rotas do Express. Ao acessar o caminho "/", usa-se o arquivo info.js contido em "/routes"

6. Agora vamos criar o arquivo `app.js` na raiz da pasta.
7. Colocar o seguinte conteúdo neste arquivo:

```javascript
const express = require('express');

const app = express();

app.use('/', require('./routes'));

module.exports = app;
```

> Note que estamos usando rotas do Express. Ao acessar o caminho "/", usa-se o arquivo index.js contido em "/routes"

7. Alterar o arquivo `server.js` para usar o `app.js`:

```javascript
const app = require('./app');

const port = 3000;

app.listen(port);
```

8. Executar via terminal o comando `npm run dev`. Este comando irá executar o server e monitorar as mudanças no arquivo.
9. Acessar o navegador Web acessando a porta 3000
10. caso não tenha funcionado, rever as mudanças realizadas neste tópico.
11. Executar o comando `git add ."`
12. Executar o comando `git commit -m "reestruturado server"`
13. Executar o comando `git push`

## Criando Controller

1. Na raiz do projeto, criar a pasta `controllers`
2. Nesta pasta, criar o arquivo `info.controller.js`
3. Adicionar o seguinte cotneúdo:

```javascript
const get = function (req, res) {
    res.send('Capacitação Desenvolvedor Web');    
};

module.exports = { get };
```

4. Alterar o arquivo `\routes\info.js`:

```javascript
const express = require('express');
const infoController = require('../controllers/info.controller');

const routes = express.Router();

routes.get("/", infoController.get);

module.exports = routes;
```

> Note que estamos utilizando o controller recém criado.

## Criando Tasks Controller e API

1. Vamos agora criar o controller de tasks. Criar o arquivo `\controllers\tasks.controller.js`.
2. Adicionar o seguinte conteúdo: 

```javascript
const get = function (req, res) {
    
};

const create = function (req, res) {
    
};

const update = function (req, res) {
    
};

const remove = function (req, res) {
    
};

module.exports = { get, create, update, remove };
```

3. Criar o arquivo `\routes\tasks.js`.
4. Adicionar o seguinte conteúdo: 

```javascript
const express = require('express');
const tasksController = require('../controllers/tasks.controller');

const routes = express.Router();

routes.get("/", tasksController.get);
routes.post("/", tasksController.create);
routes.put("/", tasksController.update);
routes.delete("/", tasksController.remove);

module.exports = routes;
```

5. Alterar o arquivo `routes\index.js` com o seguinte conteúdo:

```javascript
const express = require('express');

const routes = express.Router();

routes.use("/", require('./info'));
routes.use("/tasks", require('./tasks'));

module.exports = routes;
```

6. Agora, ao acessar o caminho http://localhost:3000/tasks

> Note que ele não retorna nada. Isso porque ainda não estamos enviando nada do servidor.

7. Volte no arquivo `\controllers\tasks.controller.js` e altere a função associada a constante get:

```javascript
const get = function (req, res) {
    const tasks = [
        {
            "title": "Aprender HTML",
            "description": "Estudar a tag body"
        },
        {
            "title": "Aprender CSS",
            "description": "Estudar seletores"
        }
    ];

    res.send(tasks);
};
```

8. Agora ele deve retornar o valor.
