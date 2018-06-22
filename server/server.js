const express = require('express')
    , app = express()
    , server = require('http').Server(app);

const PORT = process.env.PORT || 8082;

app.use(express.static('./../'));

server.listen(PORT, (err, res) => {
  if (err) {
    console.log("err in server - > ", err);
  } else {
    console.log("Server up and listening on port ", PORT);
  }
});
