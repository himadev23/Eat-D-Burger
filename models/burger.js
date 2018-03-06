var orm = require('../config/orm.js');

var burger = {

	selectAll:function(cb){
		orm.selectAll('burgers',function(res){
			return cb(res)
		});

	},

    insertOne: function(col,val,cb) {
    	console.log('himaaaaaaaaaaaaa' ,col,val,cb);
        orm.insertOne("burgers",col,val,function(res) {
            //console.log('res',res);
            return cb(res);
        });
    },

    updateOne:function(set,update,cb){
    	orm.updateOne('burgers',set,update,function(res){
    		return cb(res);
    	});

    }

}


module.exports = burger;