import Router from 'koa-router'
const router = new Router()


// 添加路由
router
    .get('/', async (ctx) => {
        ctx.response.body = 'Koa2 index Get';
    })
    .get('login', async (ctx) => {
        ctx.response.body =
        `
        <h1> login page </h1>
        <form action="/user/login" method="post">
          <input name="name" type="text" placeholder="请输入用户名：admin"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：root"/>
          <br/> 
          <button>GoGoGo</button>
        </form>
      `
    })
    .get('register', async (ctx) => {
        ctx.response.body =
        `
        <h1> register page </h1>
        <form action="/user/register" method="post">
          <input name="name" type="text" placeholder="请输入用户名：admin"/> 
          <br/>
          <input name="password" type="text" placeholder="请输入密码：root"/>
          <br/> 
          <button>GoGoGo</button>
        </form>
      `
    })
    // .get('/query', async (ctx) => {
    //     console.log('query = ')
    //     console.log(ctx.request.query)
    //     ctx.response.body = 'query = ' + ctx.request.query.id
    // })

module.exports = router