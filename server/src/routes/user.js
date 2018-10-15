const Router = require('koa-router');
const UserController = require('../controller/user');


const router = new Router({
    prefix: '/user'
});

router.get('/', UserController.home);
router.get('/info', UserController.info);




module.exports = router;