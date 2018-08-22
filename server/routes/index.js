import Router from 'koa-router'
import home from './home'
import users from './users'

const router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())

 
module.exports = router