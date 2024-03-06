const express = require('express');
const cors = require('cors'); // Importa el paquete CORS
const { Pool } = require('pg');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
const apiKey = 'L0T7TP9DKLIUYOH8';


// Configuración de la conexión
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'stocksdb',
  password: 'password',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});

app.get('/stock', (req, res) => {
    pool.query('SELECT * FROM stocks', (error, result) => {
        if (error) {
            throw error;
        }
        res.json(result.rows);
    });
});

app.post('/stock', (req, res) => {
    const { name, purchase_date, purchase_price, quantity, total, change, diff } = req.body;
    pool.query('INSERT INTO stocks (name, purchase_date, purchase_price, quantity ,total, change, diff) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', [name, purchase_date, purchase_price, quantity, total, change, diff], (error, result) => {
        if (error) {
            throw error;
        }
        const insertedId = result.rows[0].id;
        res.status(201).send(`Stock added with ID: ${insertedId}`);
    });
});

app.get('/stockprice/:name', async (req, res) => {
  console.log('Fetching stock price of ' + req.params.name);
  const symbol = req.params.name;
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${apiKey}`;

  try {
    /*
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    // Asumiendo que 'data' tiene la estructura esperada y contiene 'Time Series (5min)'
    const timeSeries = data['Time Series (5min)'];
    // Verifica que timeSeries no es undefined
    if (!timeSeries) {
      throw new Error('No time series data found');
    }
    const lastTimePeriod = Object.keys(timeSeries)[0];
    const lastClosePrice = timeSeries[lastTimePeriod]['4. close'];
*/
    const lastClosePrice = 20.0;
    res.json({ symbol, lastClosePrice });
  } catch (error) {
    console.error('There was an error with the fetch operation:', error.message);
    // Envía una respuesta de error al cliente
    res.status(400).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

