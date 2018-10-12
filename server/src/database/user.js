const mysql = require('mysql');

const config = require('./config');



// // const db = mysql.createPool(config);
// console.log('config');
// console.log(config);

const knex = require('knex')({
    client: config.client,
    connection: config.connection    
});
// const connection = mysql.createConnection({
//     host: config.connection.host,
//     user: config.connection.user,
//     password: config.connection.password,
//     database: config.connection.database
// });

module.exports = {
    searchUser: async (data) => {
        console.log('data');

        console.log(data);
        // const user = knex.select('account').from('user')
        //     .then((result) => {
        //         console.log('result');
        //         console.log(result);

        //     });
        let userSql;
        try {
            userSql = await knex('user')
                .select('account','password')
                .where('account',data.account)
                
                
            // let userData = await userSql
                // .then(rows => rows)
                .then((result) => {

                    return result;
                })
                .catch((err) => {
                    throw err;
                });
            // console.log('userData');
            // console.log(userSql);
            
        } catch (error) {
            throw new Error(error);
        }
        


        // const mysql = require('mysql');
        // try {
            
        //     connection.connect();
        //     console.log('Connect DB');
            
        // } catch (error) {
        //     console.log('err');
        //     console.log(error);
            
        // }
        return userSql;
    }

};