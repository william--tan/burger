var orm = require("../config/orm.js");

var burger = {
	all: (res) => {
		orm.selectAll((result) => {res(result)})
	},
	insert: (name, res) => {
		orm.insertOne(name, (result) => {res(result)})
	},
	devour: (id, res) => {
		orm.updateOne(id, (result) => {res(result)})
	}
}

module.exports = burger;