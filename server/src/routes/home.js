const Router = require('koa-router');
const HomeController = require('../controller/home');


const router = new Router({
    prefix: '/'
});

router.get('/', HomeController.home);
router.get('register', HomeController.getRegister);
router.post('register', HomeController.postRegister);
router.get('login', HomeController.getLogin);
router.post('login', HomeController.postLogin);
router.post('logout', HomeController.logout);
    



module.exports = router;