import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3010; 
const DB_USER = process.env.DB_USER || "roomiez";
const DB_PASSWORD = process.env.DB_PASSWORD || "roomiezpass";
const DB_DATABASE = process.env.DB_DATABASE || "RoomieZ";


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Environment loaded:
                PORT: ${PORT}
                
                Database environment variables:

                DB_USER: ${DB_USER}
                DB_PASSWORD: ${DB_PASSWORD}
                DB_DATABASE: ${DB_DATABASE}

                Google Cloud SQL Configuration:

                Socket Path: ${socketPath}
                `);
});

app.get('/', (req, res) => {
    res.send('Servidor iniciado!');
})