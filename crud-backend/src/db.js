import pg from 'pg';
import env from 'dotenv'; //best practice to use env variables for db credentials

const db = new pgClient({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

db.on('error', (err) => {
    console.error('Database connection error:', err);
    process.exit(-1);
});

export const query = (text, params) => db.query(text, params);