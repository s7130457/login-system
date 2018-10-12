const config = require('./config');

const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});

module.exports = {
    findUser: async (user) => {
        let result;
        try {
            result = await knex('user')
                .select()
                .where('account',user.account);
        } catch (error) {
            throw new Error(error);
        }
        return result;
    },
    updateLoginTime: async (userId) => {
        // let loginTime;
        console.log('time='+new Date().toLocaleString());
        
        try {
            await knex('user')
                .where('userId', userId)
                .update({
                    loginTime: new Date().toLocaleString()
                });
        } catch (error) {
            throw new Error(error);
        }
    }

};