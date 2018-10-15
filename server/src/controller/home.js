const jwt = require('jsonwebtoken');

const User = require('../database/user');
const secret = require('../config/auth.json');



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
            data: null,
            token: null
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
                user.loginTime = await User.updateLoginTime(user.userId);
                let userToken = {
                    name: user.userName,
                    id: user.id
                };
                const token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'});
                result.msg = 'Success Login.';
                result.data = user;
                result.token = token;

            }
        }
        ctx.body = result;

    }
};