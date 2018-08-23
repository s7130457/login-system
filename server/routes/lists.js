import Router from 'koa-router'
const router = new Router()

router
    .get('/', async (ctx) => {
        ctx.response.body = 'get all todo-list';
    })
    .get('/creat', async (ctx) => {
        ctx.response.body =
        `<h1> Get create list page </h1>
        <form method="POST" action="/lists/creat">
            <p>list Name</p>
            <input name="listName" /><br/>
            <p>TODO something</p>
            <input name="todo" /><br/>
            <button type="submit">submit</button>
        </form>
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
        <form method="put" action="/lists/${ctx.params.id}/update">
            <p>list Name</p>
            <input name="listName" value="${ctx.params.id}" /><br/>
            <p>TODO something</p>
            <input name="todo" value="install"><br/>
            <button type="submit">submit</button>
        </form>
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