import Router from 'koa-router'
import home from './home'
import users from './users'
import lists from './lists'

const router = new Router()

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', users.routes(), users.allowedMethods())
router.use('/lists', lists.routes(), lists.allowedMethods())

 
module.exports = router