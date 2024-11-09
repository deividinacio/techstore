const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'techstore'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados');
});

module.exports = connection;