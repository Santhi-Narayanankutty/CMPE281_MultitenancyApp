var ejs= require('ejs');
var mysql = require('mysql');

function getConnection(){
	var connection = mysql.createConnection({
	    host     : '127.12.40.2',
	    user     : 'adminI3ZyK5c',
	    password : 'pjXscVpzdUkd',
	    database : 'team09multitenantapp'
		
/*		host     : '127.0.0.1',
	    user     : 'root',
	    password : 'root123',
	    database : 'MULTI_TENANT_APP'*/
		
	});
	return connection;
}


function fetchData(callback,sqlQuery){
	
	console.log("\nSQL Query::"+sqlQuery);
	
	var connection=getConnection();
	
	connection.query(sqlQuery, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else 
		{	// return err or result
			console.log("DB Results:"+rows);
			callback(err, rows);
		}
	});
	console.log("\nConnection closed..");
	connection.end();
}	

exports.fetchData=fetchData;