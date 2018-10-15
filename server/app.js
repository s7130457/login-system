const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser= require('koa-bodyparser');
const jwtKoa = require('koa-jwt');


const routes = require('./src/routes');
const secert = require('./src/config/auth.json');


const app = new Koa();


//在其他Midderware之前加入logger
app.use(logger());

app.use(bodyParser());


app
    .use(jwtKoa({secert: secert.sign}).unless({
        path:[/\/register/, /\/login/, /\/logout/]
    }));

routes(app);


app.listen(3001, () => {
    console.log('✅  Server is running at http://localhost:3001');
});