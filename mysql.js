var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Leg0Br1ck",
	database: "test"
});

con.connect(function(err){
	if(err) throw err;
	var sql = "select * from users WHERE username='DaivikA'";
	con.query(sql, (err, result,fields) => {
		if (err) throw err;
		console.log(result);
	});
});