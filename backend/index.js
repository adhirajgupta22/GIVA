const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const { Pool } = require('pg');

const PORT =  5000;
var corsoption = {
    origin: 'http://localhost:5173',
  };

  const app = express();
  app.use(cors(corsoption));
  app.use(express.json())

const pool = new Pool({
    connectionString: 'postgresql://adhirajg22:GuvTu3KeEXl5qEMxfdwZ3LP05rzpzHJY@dpg-csedjnm8ii6s7391k3eg-a.oregon-postgres.render.com/postgressql_0tzj',  
    ssl: {
      rejectUnauthorized: false, 
    },
  });
  
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price FLOAT,
    quantity INTEGER
  );
`;

async function createTable() {
  try {
    await pool.query(createTableQuery);
    console.log("Table 'products' created successfully.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

createTable();  

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// GET operation
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST operation
app.post('/api/products', async (req, res) => {
  const { name, description, price, quantity } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, description, price, quantity]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT operation
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, quantity } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE id = $5 RETURNING *',
      [name, description, price, quantity, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE operation
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
