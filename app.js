
// using express framework
var express = require("express");
var app = express();

// setting public folder as custom asset
app.use(express.static("public"));

// root directory (only page)
app.get("/*", function(req, res){
	res.render("index.ejs");
});

// setting up local server
var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("App is running...");
});