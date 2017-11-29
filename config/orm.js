const connection = require('./connection.js');

var orm = {
	selectAll: (res) => {
		connection.query('SELECT * FROM burgers', (err, result) => {
			if (err) throw err;
			res(result);
		})
	},
	insertOne: (name, res) => {
		connection.query('INSERT INTO burgers(name) VALUES (?)', [name], (err, result) => {
			if (err) throw err;
			res(result);
		})
	},
	updateOne: (id, res) => {
		console.log(id);
		connection.query('UPDATE burgers SET devoured = 1 WHERE id = '+id, (err, result) => {
			if (err) throw err;
			res(result);
		})
	}
}

module.exports = orm;