var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload")

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });