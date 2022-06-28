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
	database: 'dbcapibaras'
}

app.get('/', (req, res) => {
	res.send('hola desde tu primera ruta de la Api')
});

app.post('/api/register', async (req, res) => {
	const {username, name, password} = req.body;
	//const passwordHash = await bcrypt.hash(password, 10);
	var connection = mysql.createConnection(credentials);
	connection.query('INSERT INTO informacion_login (user, name, pass) VALUES (?,?,?)', 
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
	connection.query("SELECT * FROM informacion_login WHERE user = ? AND pass = ?", [username, password], (err, result) => {
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

app.post("/api/agregar", (req, res) => {
	const estatura = req.body.estatura;
	const peso = req.body.peso;
	const imc = (peso/(estatura)**2);
	let f = new Date();
	let fecha=(f.getFullYear() + "." + (f.getMonth() +1) + "." +f.getDate());
	var connection = mysql.createConnection(credentials);

	connection.query(
	  "INSERT INTO informacion_imc (estatura, peso, fecha, imc) VALUES (?,?,?,?)",
	  [estatura, peso, fecha, imc],
	  (err, result) => {
		if (err) {
		  console.log(err);
		} else {
		  res.send("Valores Ingresados");
		}
	  }
	);
  });
  
  app.get("/api/registros", (req, res) => {
	var connection = mysql.createConnection(credentials);
	connection.query("SELECT estatura,peso,SUBSTRING(fecha,1,10) As fecha,imc FROM informacion_imc" , (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });
  
  app.delete("/api/borrar/:id", (req, res) => {
	var connection = mysql.createConnection(credentials);
	const id = req.params.id;
	connection.query("DELETE FROM informacion_imc WHERE id = ?", id, (err, result) => {
	  if (err) {
		console.log(err);
	  } else {
		res.send(result);
	  }
	});
  });

app.listen(4000, () => console.log('hola soy el server de TheCapibaras inc'));
