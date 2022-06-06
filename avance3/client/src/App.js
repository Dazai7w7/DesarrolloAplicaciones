import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addRegistro = () => {
    Axios.post("http://localhost:3001/create", {
      estatura: estatura,
      peso: peso
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          estatura: estatura,
          peso: peso
        },
      ]);
    });
  };

  const verRegistro = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const borarRegistro = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Estatura:</label>
        <input
          type="number"
          onChange={(event) => {
            setEstatura(event.target.value);
          }}
        />
        <label>Peso:</label>
        <input
          type="number"
          onChange={(event) => {
            setPeso(event.target.value);
          }}
        />
        
        <button onClick={addRegistro}>Agregar registro</button>
      </div>
      <div className="employees">
        <button onClick={verRegistro}>Mostrar registros</button>

        {employeeList.map((val, key) => {
          return (
            <div className="employee">
              <div>
                <h3>Estatura: {val.estatura} cm.</h3>
                <h3>Peso: {val.peso} kg.</h3>
                <h3>IMC: {val.imc}</h3>
      

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

export default App;
