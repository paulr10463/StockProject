const { Pool } = require('pg');

// Configuración de la conexión
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stocksdb',
  password: 'password',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});

module.exports = pool;