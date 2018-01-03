var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes.js");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", routes);

var port = process.env.port || 5000;
var server = app.listen(port, function(req, res) {
  console.log("Server running");
});