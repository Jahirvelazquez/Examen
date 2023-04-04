import React from "react";

const ListaPaciente = () => {
  
  return (
    <table className="table container mt-3">
      <thead>
      <tr>
        <th colSpan="9" className="text-center">Lista de paciente</th>
      </tr>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">CURP</th>
          <th scope="col">Edad</th>
          <th scope="col">Direccion</th>
          <th scope="col">Telefono</th>
          <th scope="col">Correo</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        
        <tr>
          
          <td >Dato1</td>
          <td >Dato2</td>
          <td >Dato3</td>
          <td >Dato4</td>
          <td >Dato5</td>
          <td >Dato6</td>
          <td >Dato7</td>
          <td >Dato8</td>
		<td>Editar Eliminar</td>
        </tr>

      </tbody>
    </table>
  );
};

export default ListaPaciente;
