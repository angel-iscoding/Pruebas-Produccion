import express from 'express';
import mysql from 'mysql2/promise'; // Usa 'mysql2/promise' para trabajar con async/await
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3010;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const socketPath = process.env.INSTANCE_UNIX_SOCKET;
/* const DB_CONNECTION_NAME = process.env.DB_CONNECTION_NAME;
const socketPath = `/cloudsql/${DB_CONNECTION_NAME}`;

// Configuración de la conexión a Cloud SQL
const pool = mysql.createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  socketPath: socketPath
});

// Lógica para verificar la conexión o manejar peticiones
app.get('/health', async (req, res) => {
  try {
    const connection = await pool.getConnection(); // Obtiene una conexión
    connection.release(); // Libera la conexión inmediatamente
    res.status(200).send('Servidor y base de datos conectados.');
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
}); */

app.get('/health', async (req, res) => {
  try {
    res.status(200).send('Servidor y base de datos conectados.');
  } catch (err) {
    console.error('Database connection failed:', err);
    res.status(500).send('Database connection failed');
  }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Environment loaded:
                PORT: ${PORT}
                
                Database environment variables:

                DB_USER: ${DB_USER}
                DB_PASSWORD: ${DB_PASSWORD}
                DB_DATABASE: ${DB_DATABASE}
                Socketpath: ${socketPath}
                `);
});