const mysql = require('mysql')

let connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
})

connection.connect(err => {
	if (err) throw err;
	console.log("Connected as ID " + connection.threadId);
})

module.exports = connection;
