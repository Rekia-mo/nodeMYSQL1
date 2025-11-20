import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
<<<<<<< HEAD
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
=======
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'notes_app'
>>>>>>> 1dfbeb804ac2442a9ef44d4a83c4c1b68530fae0
}).promise();

async function getNotes(){
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
}

async function getNote(id){
  const [rows] = await pool.query(`
    SELECT * 
    FROM notes 
    WHERE id = ?
    `,[id]);
  return rows;
}
console.log( await getNote(2));
