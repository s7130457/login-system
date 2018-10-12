module.exports = {

    home: async (ctx, next) => {
        // ctx.body = '<h1> Home Page.</h1>';
        ctx.body = {
            'page': '<h1> User index (after login).</h1>',
            'b': 'rrrrr'
        };
        console.log('User index Page');
        
        
        
    },
    info: async(ctx, next) => {
        ctx.body = {
            'page': '<h1> User get info Page.</h1>',
            'b': 'rrrrr'
        };
    }
};