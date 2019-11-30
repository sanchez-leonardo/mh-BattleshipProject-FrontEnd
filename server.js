const express = require("express");
const port = proscess.env.PORT || 3030;
const app = express();

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log("Vue Server Started");
