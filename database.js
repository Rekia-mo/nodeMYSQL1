import mysql from 'mysql2'

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'notes_app'
}).promise();

async function getNotes(){
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
}
console.log( await getNotes());
