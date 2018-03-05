var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/',function(req,res){
	
 /* burger.selectAll(function(data) {
    var bugerData = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });*/
  res.render("index");
});

router.post('/api/burger',function(req,res){
inputBurgerName =req.body.burgerName;
	
	console.log('body', req.body.burgerName);
	burger.insertOne('burger_name',req.body.burgerName,function(result){
		// res.render();
		console.log('result', result);
		
	});

});

module.exports= router;