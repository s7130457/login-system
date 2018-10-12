const User = require('../database/user');

module.exports = {

    home: async ctx => {
        ctx.body = {
            'page': '<h1> Home Page.</h1>',
            'b': 'rrrrr'
        };
    },
    getLogin: async ctx => {
        ctx.body = {
            'page': '<h1> Login Page.</h1>',
            'b': 'rrrrr'
        };
    },
    postLogin: async ctx => {
        let result = {
            msg: '',
            data: null
        };
        let request = ctx.request.body;
        let user =await User.findUser(request);
        if(user == 0) {
            result.msg = 'Does not find account.';
        } else {
            user = JSON.parse(JSON.stringify(user[0]));
            if(user.password !== request.password) {
                result.msg = 'Error password.';
            } else {
                result.msg = 'Success Login.';
                user = await User.getUserInfo(user.userId);
                result.data = user;
            }
        }
        ctx.body = result;

    }
};