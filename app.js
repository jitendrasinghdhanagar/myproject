var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Jitendra how r u?");
});

app.listen(4000);
