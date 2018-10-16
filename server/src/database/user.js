const config = require('./config');
const resp = require('../config/format');

const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});

module.exports = {
    findUser: async (data) => {
        let result, msg;
        try {
            result = await knex('user')
                .select()
                .where('account',data.account);
        } catch (error) {
            throw error;
           
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
            throw new Error('DB update user login time happen error.');
        }
    }

};