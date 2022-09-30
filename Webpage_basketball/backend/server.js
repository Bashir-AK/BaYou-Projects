const http = require('http');
const database = require("./database")

const db = database.connect_open();

//database.db_init(db);

database.display_database(db);

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});



database.connect_close(db);

server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
