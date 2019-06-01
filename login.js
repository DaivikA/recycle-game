var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Leg0Br1ck",
	database: "test"
});


con.connect(function(err){
	if(err) throw err;
	console.log("connected to mysql");
});

app.listen(8000, () => {
	console.log('app is listneing');
});

app.use(bodyparser.json());
app.get("/login", (req, res)=>{
	//use body-parser
	var data = ""
	req.on('data', (chunk)=>{
		data+= chunk
	});
	
	req.on('end', () => {
		req.rawBody = data;
		if (data && data.infexOf('{') > -1) {
			req.body = JSON.parse(data);
			console.log(req.body);
		}
	});
	console.log(req.data);
	con.query("SELECT * FROM users", function (err, result, fields){
		if(err) throw err;
		
	});
	
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send('hello');
})