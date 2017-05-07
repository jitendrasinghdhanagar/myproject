var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Jitendra");
});

app.listen(4000);
