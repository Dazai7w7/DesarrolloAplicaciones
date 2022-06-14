const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))
// const JWT = require('jsonwebtoken')
// const secretWord = 'Samus#Aran'

const credentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'login_node_db'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
})

app.post('/api/login', (req, res) => {
	const { username, password } = req.body
	const values = [username, password]
	var connection = mysql.createConnection(credentials)
	connection.query("SELECT * FROM users WHERE user = ? AND pass = ?", values, (err, result) => {
		if (err) {
			res.status(500).send(err)
		} else {
			if (result.length > 0) {
				res.status(200).send({
					"id": result[0].id,
					"user": result[0].user,
					"username": result[0].username
				})
			} else {
				res.status(400).send('Usuario no existe')
			}
		}
	})

	app.post('/api/register', (req, res) => {
		const { username, name, password} = req.body
		const values = [username, name, password]
		var connection = mysql.createConnection(credentials)
		connection.query('INSERT INTO users (user, name, pass) VALUES (?,?,?)',
		values, 
		(err, results) => {
			if (err) {
				console.log(err);
			} else {
				res.send("Valores ingresados exitosamente");
			}
		});
	})	
	connection.end()
})


app.listen(4000, () => console.log('hola soy el server de TheCapibaras inc'))