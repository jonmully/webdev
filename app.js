var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, function () {
    console.log("Server Has Started!");
});