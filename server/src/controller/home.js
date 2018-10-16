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
                user.loginTime = await UserDB.updateLoginTime(user.userId);
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
        
    }
};