const burger = require('../models/burger');
const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	burger.all((data) => {
		let burger_data = {burgers: data};
		res.render('index', burger_data)
	})
});

router.post('/api/burgers', (req, res) => {
	burger.insert(req.body.name, (data) => {
		 res.redirect('/');
	})
})

router.put("/api/burgers/:id", (req, res) => {
	//console.log(req.params.id);
	burger.devour(req.params.id, (result) => {
		res.redirect('/');
	})
})

router.delete("/api/burgers/:id", (req, res) => {
	//console.log(req.params.id);
	burger.delete(req.params.id, (result) => {
		res.redirect('/');
	})
})

module.exports = router;