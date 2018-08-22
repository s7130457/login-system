import Router from 'koa-router'
const router = new Router()

router
    .get('/', async (ctx) => {
        ctx.response.body = 'get all todo-list';
    })
    .get('/creat', async (ctx) => {
        ctx.response.body =
        `<h1> Get create list page </h1>
        `
    })
    .post('/creat', async (ctx) => {
        ctx.response.body =
        `<h1> POST create list </h1>
        `
    })
    .get('/:id', async (ctx) => {
        
    })


module.exports = router