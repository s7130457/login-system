import Koa from 'koa'

import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import router from './routes/index'

const app = new Koa()


//Middleware

app.use(bodyParser())
    .use(logger())

app.use(router.routes())
    .use(router.allowedMethods())


app.listen(3001)
console.log('Connect server!')
module.exports = app