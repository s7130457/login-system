let resObj;
module.exports = {
    success: (data, msg) => {
        resObj = {
            statusCode: 200,
            error: false,
            data: data,
            msg: msg || 'OK'
        };
        return resObj;
    },
    unAuthorized: (msg) => {
        resObj = {
            statusCode: 401,
            error: true,
            data: null,
            msg: msg || 'Unauthorized'
        };
        return resObj;
    },
    badRequest: (msg) => {
        resObj = {
            statusCode: 400,
            error: true,
            data: null,
            msg: msg || 'Bad Request'
        };
        return resObj;
    }
};