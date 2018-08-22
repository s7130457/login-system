import Router from 'koa-router'
const router = new Router()


// 添加路由
router
    .get('/', async(ctx, next)=>{
        ctx.response.body = 'Hello, User!'
    })
    .post('/login', async(ctx) => {
        let {name, password} = ctx.request.body
        if( name === 'admin' && password === 'root' ){
            ctx.response.body = `Hello， ${name}！`
            // router.redirect('/user/')
        }else{
            ctx.response.body = '帳號密碼錯誤'
        }
    })
    .post('/register',async(ctx)=>{
        let {name, password} = ctx.request.body
        if( name === 'admin' && password === 'root' ){
            ctx.response.body = `註冊成功！`
        }else{
            ctx.response.body = '註冊失敗'
        }
    })
// .get('/:test', async (ctx) => {
//     ctx.response.body = 'test = ' + ctx.params.test
// })
module.exports = router