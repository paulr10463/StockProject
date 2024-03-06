const { Client } = require('pg');

// Configuración de la conexión
const client = new Client({
  user: 'user',
  host: 'localhost',
  database: 'acciones',
  password: 'mypassword',
  port: 5432,
});

client.connect().then(() => {
  client.query('SELECT NOW()', (err, res) => {
    console.log(res.rows)
    client.end()
  });
});

