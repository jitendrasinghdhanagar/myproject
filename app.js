var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Jitendra how r u? new line");
});

app.listen(4000);
