const User = require('../database/user');

module.exports = {

    home: async ctx => {
        // ctx.body = '<h1> Home Page.</h1>';
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
        console.log('ctx.request');
        console.log(ctx.request.body);
        let user = ctx.request.body;
        let result =await User.searchUser(user);
        ctx.body = {
            data: result
        };
    }
};