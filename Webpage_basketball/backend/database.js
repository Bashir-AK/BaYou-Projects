const sqlite3 = require("sqlite3").verbose();
const fs = require("fs")


function connect_open(){
    let db = new sqlite3.Database('database.db',sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
        return console.error(err.message);
        }
        console.log('Connected to the in-memory SQlite database.');
    });
    return db;
}

function connect_close(db){
    db.close((err) => {
        if (err) {
        return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

function db_init(db){
    const datasql = fs.readFileSync("play_info_database.sql").toString();
    db.run(datasql);

}

function display_database(db){
    db.all("SELECT * FROM Player_data",[], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          console.log(row);
        });
      });
}


module.exports = {db_init, connect_open, connect_close, display_database};