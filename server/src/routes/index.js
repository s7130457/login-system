const home = require('./home');
const user = require('./user');
module.exports = (app) => {

    app.use(home.routes());
    app.use(user.routes());
    
};

