import Router from 'koa-router'
const router = new Router()


// 添加路由
router
.get('/', async (ctx) => {
    ctx.response.body = 'Koa2 index Get';
})
.get('login', async (ctx) =>{
    ctx.response.body = 'Koa2 login Get';
})
.get('/query', async (ctx) => {
    console.log('query = ')
    console.log(ctx.request.query)
    ctx.response.body = 'query = ' + ctx.request.query.id
})

// .get('/user', async(ctx, next)=>{
//     ctx.response.body = 
//     `
//     <form action="/user/register" method="post">
//         <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
//         <br/>
//         <input name="password" type="text" placeholder="请输入密码：123456"/>
//         <br/> 
//         <button>GoGoGo</button>
//     </form>
//     `
// })
// .post('/user/register',async(ctx, next)=>{
//     console.log('ctx.request=')
//     console.log(ctx.request.body)
// let {name, password} = ctx.request.body
//     // let name = ctx.request.body.name
//     // let password = ctx.request.body.password
// if( name === 'ikcamp' && password === '123456' ){
//     ctx.response.body = `Hello， ${name}！`
// }else{
//     ctx.response.body = '账号信息错误'
// }
// })
// .get('/:test', async (ctx) => {
//     ctx.response.body = 'test = ' + ctx.params.test
// })
module.exports = router