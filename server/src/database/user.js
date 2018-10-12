const config = require('./config');

const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});
const updateLoginTime =  async (userId) => {
    try {
        await knex('user')
            .where('userId', userId)
            .update({
                loginTime: new Date().toLocaleString()
            });
    } catch (error) {
        throw new Error(error);
    }
};

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
    getUserInfo: async (userId) => {
        updateLoginTime(userId);
        let user;
        try {
            user = await knex('user')
                .where('userId', userId);
        } catch (error) {
            throw new Error(error);
        }
        return user;
    },
    

};