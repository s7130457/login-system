const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser= require('koa-bodyparser');

const routes = require('./src/routes');

const app = new Koa();


//在其他Midderware之前加入logger
app.use(logger());

app.use(bodyParser());
routes(app);


app.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});