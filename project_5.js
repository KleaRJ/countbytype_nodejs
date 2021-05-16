var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "kleasdb"
});

con.connect(function(err) {
if (err) throw err;
con.query("SELECT Type, COUNT(*) FROM customers_kr GROUP BY Type;" , function (err, result) {
if (err) throw err;
console.log(result);
});
});


