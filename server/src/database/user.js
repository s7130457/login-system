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
                .select('account','password')
                .where('account',user.account);
        } catch (error) {
            throw new Error(error);
        }
        return result;
    }

};