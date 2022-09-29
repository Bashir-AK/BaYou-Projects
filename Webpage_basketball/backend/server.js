const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

var sqlite3 = require('sqlite3').verbose();
var file = "play_info_database";
var db = new sqlite3.Database(file);
db.all("SELECT * FROM Player_data", function(err, rows) {
  rows.forEach(function (row) {
      console.log(row.player_name);
  })
});	
db.close();


server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});