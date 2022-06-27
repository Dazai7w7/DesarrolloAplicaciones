import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";


function createData(tipo, trackingId, date, status) {
  return { tipo, trackingId, date, status };
}

const rows = [[
  createData("Ejercicio lvl1 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl1 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl1 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl1 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl1 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
  
  
],[
  createData("Ejercicio lvl2 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl2 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl2 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl2 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl2 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl3 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl3 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl3 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl3 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl3 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl4 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl4 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl4 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl4 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl4 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl5 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl5 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl5 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl5 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl5 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl6 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl6 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl6 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl6 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl6 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl7 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl7 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl7 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl7 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl7 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl8 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl8 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl8 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl8 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl8 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
],[
  createData("Ejercicio lvl9 n1", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl9 n2", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl9 n3", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl9 n4", "cantidad de veces", "tiempo duracion", "descanso por serie"),
  createData("Ejercicio lvl9 n5", "cantidad de veces", "tiempo duracion", "descanso por serie")
]];

function reco(imc){
    
  let x = 0;
  const array1 = [16.00, 17.00, 18.50, 25.00, 30.00, 35.00, 40.00, 41.00]
  let c = true;
  let i = 0;
  while(c){    
      if(imc >= array1[i] && imc < array1[i+1]){
          c = false;
          x = i+1
      }else if(imc < array1[0]){
          c = false;
          x = 0;
      }else if(imc > array1[6]){
          c = false;
          x = 8;
      }
      i = i + 1
  }
  
  return x
}

var equis = reco(15.00)
//consulta a base de datos de ultimo dato imc 

const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div id="borde">
      <p onClick={() => console.log(equis)}> Nivel de IMC = 21.50</p>
      <div className="Table">
      <h3>Ejercicios en seguimiento</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ejercicios</TableCell>
                <TableCell align="left">Series</TableCell>
                <TableCell align="left">Tiempo</TableCell>
                
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows[equis].map((row) => (
                //SELECT * FROM TableName WHERE id=(SELECT max(id) FROM TableName);
                <TableRow
                  key={row.tipo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.tipo}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.date}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
  );
}