const Koa = require('koa');
const logger = require('koa-logger');
const bodyParser= require('koa-bodyparser');

const router = require('./src/routes/index');


const app = new Koa();


//在其他Midderware之前加入logger
app.use(logger());
app.use(bodyParser());

// app.use(async function(ctx) {
//      ctx.body = 'Hello World!';
// });
router(app);//???

module.exports = app;

app.listen(3001, () => {
    console.log('Server is running at http://localhost:3001');
});