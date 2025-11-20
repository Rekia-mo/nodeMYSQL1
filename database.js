import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

//GET NOTES
async function getNotes(){
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
}

//GET NOT BY ID
async function getNote(id){
  const [rows] = await pool.query(`
    SELECT * 
    FROM notes 
    WHERE id = ?
    `,[id]);
  return rows;
}

//CREAT NOTE
async function creatNote(title, contents){
  const [rows] = await pool.query(`
   INSERT INTO notes (title, contents)
   VALUES (?, ?) 
  `, [title, contents])

  const id =  rows.insertId
  return getNote(id)
}
//const rslt = await creatNote("123", "456");
console.log(await getNotes());
