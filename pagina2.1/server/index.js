const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const bcrypt = require("bcryptjs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));


const credentials = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'login_node_db'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
});

app.post('/api/register', async (req, res) => {
	const {username, name, password} = req.body;
	//const passwordHash = await bcrypt.hash(password, 10);
	var connection = mysql.createConnection(credentials);
	connection.query('INSERT INTO login (user, username, password) VALUES (?,?,?)', 
	[username, name, password],
	(error, results) => {
		if (error){
			console.log(error);
		}else{
			res.send("valores ingresados exitosamente");
		}
	}
	);
});

app.post('/api/login', async (req, res) => {
	const { username, password } = req.body;
	

	var connection = mysql.createConnection(credentials);
	connection.query("SELECT * FROM login WHERE user = ? AND password = ?", [username, password], (err, result) => {
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
	});
});

// app.post('/api/login', async (req, res) => {
// 	try{
// 		var connection = mysql.createConnection(credentials);
// 		const { username, password } = req.body;
// 		const passwordHash = bcrypt.hash(password, 10);
// 		const user = await connection.query('SELECT * FROM users WHERE user = ?', [username],
// 		(error, results) =>{
// 			if (error) {
// 				res.status(500).send(error);
// 			}
// 		});

// 		if (user){
// 			const validarPass = await bcrypt.compare(passwordHash, user.pass);
// 			if (validarPass){
// 				res.status(200).send('Login exitoso!');
// 			}else{
// 				res.send('Contraseña errónea!');
// 			}
// 		}else{
// 			res.status(400).send('Usuario no encontrado!');
// 		}
// 	}catch(error){
// 		console.log(error);
// 		res.status(500).send('Algo salió mal :/');
// 	}
// });

app.listen(4000, () => console.log('hola soy el server de TheCapibaras inc'));
