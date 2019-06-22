var mysql = require('mysql');
var express = require('express');
var app = express();
const bodyParser = require('body-parser')


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
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json());
app.get("/login", (req, res, next)=>{
	//use body-parser
	/*
	var data = ""
	res.on('data', (chunk)=>{
		data+= chunk
	});
	console.log(data);
	res.on('end', () => {
		console.log(JSON.parse(data));
		con.query("SELECT * FROM users", function (err, result, fields){
		if(err) throw err;
		
	});
	  });
	
	*/
	console.log(req)
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.send('hello');
})