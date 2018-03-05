var connection = require('./connection.js');


    


var orm = {
    /*selectAll: function(table,name,cb){
    	connection.query('select'+ name+' from'+ table+';',function(err,data){
    		if(err) throw err;
    		cb(data);

    	});


    }*/



    insertOne: function(table, col, val, cb) {


        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += col;
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += val
        queryString += "'); ";
        console.log('query',queryString);
        console.log(typeof(val));

        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            console.log('function result',result);

            return cb(result);
            
        });

    }

    /*updateOne:function(){

    }*/
}

module.exports = orm;