const Router = require('koa-router');
const HomeController = require('../controller/home');


const router = new Router({
    prefix: '/'
});

router.get('/', HomeController.home);
router.get('/login', HomeController.login);
    



module.exports = router;