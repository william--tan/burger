const mysql = require('mysql')

// let connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'burgers_db'
// })

let connection = mysql.createConnection({
	host:'us-cdbr-iron-east-05.cleardb.net',
	user: 'bb55da9d68bcc7',
	password: '82a9ed47c6b1974',
	database: 'heroku_c95269d4e05feb3'
})

connection.connect(err => {
	if (err) throw err;
	console.log("Connected as ID " + connection.threadId);
})

module.exports = connection;
