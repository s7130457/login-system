// const router = require('koa-router')();
// const home = require('./home');

// module.exports = (app) => {

//     // router.get('/', home);
    
//     app.use('/', home);



//     app.use(router.routes());
// };


const router = require('koa-router')();
const HomeController = require('../controller/home');

module.exports = (app) => {

    router.get('/', HomeController.home);
    




    app.use(router.routes());
};