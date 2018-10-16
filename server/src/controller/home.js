const jwt = require('jsonwebtoken');

const UserDB = require('../database/user');
const secret = require('../config/auth.json');
const resp = require('../config/format');



module.exports = {

    home: async ctx => {
        ctx.body = {
            'page': '<h1> Home Page.</h1>',
            'b': 'rrrrr'
        };
    },
    getRegister: async ctx => {
        ctx.body = {
            'page': '<h1> Register Page.</h1>',
        };
    },
    postRegister: async ctx => {
        let result, user, msg;
        let request = ctx.request.body;
        user = await UserDB.findUser(request);
        if(user.length === 0) {
            user = await UserDB.createUser(request);
            msg = 'Success Register.';
            result = resp.success(null, msg);
        } else {
            msg = 'User already register.';
            result = resp.unAuthorized(msg);
        }
        ctx.body = result;
        ctx.status = result.statusCode;
    },
    getLogin: async ctx => {
        ctx.body = {
            'page': '<h1> Login Page.</h1>',
            'b': 'rrrrr'
        };
    },
    postLogin: async ctx => {
        let result, msg, user;
        let request = ctx.request.body;
        user = await UserDB.findUser(request);
        
        if(user.length === 0) {
            msg = 'Does not find user.';
            result = resp.badRequest(msg);
        } else {
            user = JSON.parse(JSON.stringify(user[0]));
            if(user.password !== request.password) {
                msg = 'Error password.';
                result = resp.unAuthorized(msg);
            } else {
                let userToken = {
                    name: user.userName,
                    id: user.id
                };
                user.token = jwt.sign(userToken, secret.sign, {expiresIn: '1h'});
                msg = 'Success Login.';
                result = resp.success(user, msg);
            }
        }
        ctx.body = result;
        ctx.status = result.statusCode;
    },
    logout: async ctx => {
        ctx.body = {
            'page': '<h1> Logout Page.</h1>'
        };
    }
};