module.exports = {

    home: async (ctx, next) => {
        // ctx.body = '<h1> Home Page.</h1>';
        ctx.body = {
            'page': '<h1> Home Page.</h1>',
            'b': 'rrrrr'
        };
        console.log('Home Page');
        
        
        
    },
    login: async(ctx, next) => {
        ctx.body = '<h1> Login Page.</h1>';
    }
};