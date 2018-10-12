const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        port: '3306',
        user: 'jeni',
        password: 'jeni',
        database: 'todo-list-system',
        dateStrings: true //將時間轉成字串
    }

};

module.exports = mysql;
