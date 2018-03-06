var connection = require('./connection.js');


    


var orm = {
    selectAll: function(table,cb){
    	connection.query('select * from '+ table+';',function(err,data){
    		if(err) throw err;
    		cb(data);

    	});


    },



    insertOne: function(table, col, val, cb) {
console.log('orm arguments: ',table,col,val,cb)

        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += col;
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += val
        queryString += "')";
        console.log('query',queryString);
        console.log(typeof(val));

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            	//console.log("errrrrrrr", err)
            //console.log('function result',result);

            return cb(result);
            
        });

    },


    updateOne:function(table,set,update,cb){
       var queryString= 'UPDATE '+ table ;
       queryString+= ' SET devoured = '+ set; 
        queryString+= ' WHERE id = '+ update +';';

        console.log(queryString);
        connection.query(queryString,function(err,result){
            if(err) throw err;
            return cb(result);

        });
    }
}

module.exports = orm;