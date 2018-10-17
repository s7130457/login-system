const resp = require('./src/config/format');


module.exports = () => {
    return async (ctx, next) => {
        let msg, result;
        try {
            await next();
        } catch (err) {
            if(process.env.NODE_ENV === 'production') {
                result = resp.internalError('Internal Server Error');
                ctx.body = result;
                ctx.status = result.statusCode;
            } 
            else {
                msg = err.message;
                result = resp.internalError(msg);
                ctx.body = result;
                ctx.status = result.statusCode;
            } 
            console.log(err);
        }
    };
};