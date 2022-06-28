import "./Calculator.css";
import { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";

function Calculator() {
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);

  const [registroLista, setEmployeeList] = useState([]);

  const addRegistro = () => {
    Axios.post("http://localhost:4000/api/agregar", {
      estatura: estatura,
      peso: peso
    }).then(() => {
      swal("Ingreso Exitoso!")
    });
  };

  const verRegistro = () => {
    Axios.get("http://localhost:4000/api/registros").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const borarRegistro = (id) => {
    Axios.delete(`http://localhost:4000/api/borrar/${id}`).then((response) => {
      swal("Elimacion de dato exitosa !")
      setEmployeeList(
        registroLista.filter((val) => {
          return val.id !== id;

        })
      );
    });
  };

  return (
    <div className="imc">
      <div className="information">
        <label>Estatura:</label>
        <input
          type="number"
          onChange={(event) => {
            setEstatura(event.target.value);
          }}
          placeholder="Ingrese estatura en metros"
        />
        <label>Peso:</label>
        <input
          type="number"
          onChange={(event) => {
            setPeso(event.target.value);
          }}
          placeholder="Ingrese peso en kg"
        />

        <button onClick={addRegistro}>Agregar registro</button>
      </div>
      <div className="employees">
        <button onClick={verRegistro}>Mostrar registros</button>

        {registroLista.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Estatura: {val.estatura} m.</h3>
                <h3>Peso: {val.peso} kg.</h3>
                <h3>IMC: {val.imc}</h3>
                <h3>fecha de registro: {val.fecha}</h3>


                <button
                  onClick={() => {
                    borarRegistro(val.id);
                  }}
                >
                  Borrar
                </button>
              </div>
              {/* <div>
                <input
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setNewWage(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateEmployeeWage(val.id);
                  }}
                >
                  {" "}
                  Actualizar
                </button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Borrar
                </button>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calculator;
