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
    updateLoginTime:  async (userId) => {
        try {
            let time = new Date().toLocaleString();
            await knex('user')
                .where('userId', userId)
                .update({
                    loginTime: time
                });
            return time;
        } catch (error) {
            throw new Error(error);
        }
    }

};