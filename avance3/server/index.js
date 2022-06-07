const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "informacion",
});

app.post("/agregar", (req, res) => {
  const estatura = req.body.estatura;
  const peso = req.body.peso;
  const imc = (peso/(estatura)**2);
  const fecha = Date.now();

  db.query(
    "INSERT INTO prueba (estatura, peso, fecha, imc) VALUES (?,?,?,?)",
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

app.get("/registros", (req, res) => {
  db.query("SELECT * FROM prueba", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/borrar/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM prueba WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Servidor funcionando en el puerto 3001!");
});
