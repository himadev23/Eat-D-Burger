var orm = require('../config/orm.js');

var burger = {

    insertOne: function(col,val,cb) {
        orm.insertOne("burgers",col,val,function(res) {
            console.log('res',res);
            return cb(res);
        });
    }

}


module.exports = burger;