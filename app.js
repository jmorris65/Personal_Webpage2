var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index.ejs");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("App is running...");
});