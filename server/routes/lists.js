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
        ctx.response.body =
        `<h1> Get id = ${ctx.params.id} list page</h1>
        `
    })
    .put('/:id/update', async (ctx) => {
        ctx.response.body =
        `<h1> Update id = ${ctx.params.id} list </h1>
        `
    })
    .del('/:id/delete', async (ctx) => {
        ctx.response.body =
        `<h1> delete id = ${ctx.params.id} list </h1>
        `
    })

module.exports = router