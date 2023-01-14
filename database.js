//This file will be use to connect with our DB
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()//ading our enviroment values to be more safe with our db password etc


//next lines will be connecting to DB
const connection = mysql.createPool({
    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

//getting all my values from the table
export async function getAllValues() {
    const values = await connection.query
        ("SELECT * FROM animals")
    const table_rows = values[0]//because we only want information bou our rows values
    return table_rows
    
}
//getting single value by its id
export async function getSingleValue(id) {
    const value = await connection.query
        (`SELECT * FROM animals
        WHERE id=? `,[id])//giving ? mark is practice to protect agains injections attack on our DB, here question and value are sent to DB completly separately
    const row = value[0][0]//extra zero is to give single object not array
    return row
    
}
//Adding item to our DB
export async function addingValue(animal_name, species) {
    const [value] = await connection.query
        (`INSERT INTO animals(animal_name, species)
    VALUES (?,?)`, [animal_name, species])
    const id = value.insertId
    return getSingleValue(id)
    
    
}

