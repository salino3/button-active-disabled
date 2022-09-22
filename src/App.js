import './App.css';
import { useState } from 'react';

function App() {

  const [botonActivo, setBotonActivo] = useState(true);
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Mario", puesto: "Developer fullstack" },
    { id: 2, nombre: "Carlos", puesto: "Developer frontend" },
    { id: 3, nombre: "Ana", puesto: "Developer backend" },
  ]);

  const [checkBoxSelected, setCheckBoxSelected] = useState([])
//

 const handleClickCheckBox = (event) => {
  console.log('checkbox nº:', event.target.value)
 let auxiliar = null;
  if (checkBoxSelected.includes(event.target.value)){
  auxiliar = checkBoxSelected.filter(item => item !== event.target.value);

} else {
    auxiliar = checkBoxSelected.concat( event.target.value);

  }
     setCheckBoxSelected(auxiliar);
//
if (auxiliar.length > 0) {
  setBotonActivo(false);
} else {
  setBotonActivo(true);
}

 }

  return (
    <div className="App">
      <table className="table table-sm table-hover mt-5">
        <thead>
          <tr style={{ background: 'lightgrey'}}>
            <th></th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puesto</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user, index) => (
            <tr key={index}>
              <td>
                <input 
                 style={{width: '1.5em', height: '1.5em'}}
                  type="checkbox"
                  value={user.id}
                  onChange={handleClickCheckBox}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.puesto}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" disabled={botonActivo}>
        Seleccionar
      </button>
    </div>
  );
}

export default App;
