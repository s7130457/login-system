const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'jeni',
        password: 'jeni',
        database: 'todo-list-system',
        insecureAuth : true
    }
    // ,
    // pool: {
    //     min: 0,
    //     max: 5
    // }

};

module.exports = mysql;
