var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/',function(req,res){
	
  burger.selectAll(function(data) {
    var bugerData = {
      burgers: data
    };
    //console.log(bugerData);
    res.render("index", bugerData);
  });
  //res.render("index");
});

router.post('/api/burgers',function(req,res){
var inputBurgerName =req.body.burgerName;
console.log(inputBurgerName);
	
	console.log('body', req.body.burgerName);
	burger.insertOne('burger_name',req.body.burgerName,function(result){
		// res.render();
		//console.log('result', result);
		res.json(result);
		
	});

});

router.put('/api/update',function(req,res){
	var updateBurger = req.body;
	console.log(req.body);
	burger.updateOne(req.body.devoured,req.body.id,function(result){
		console.log('put' ,result);
		res.json(result);
	});



});


module.exports= router;