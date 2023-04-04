import React from "react";

const Registrar = () => {
  
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">
        <div className="card col-lg-6">
          <h2 className="text-center">Registrar Paciente</h2>
          <div className="card-body">
            <form className="from-group" >
              <div>
                <label className="form-label" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Nombre"
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="lastname">
                  Apellido
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Apellido"
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="age">
                  Edad
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  id="age"
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="weight">
                  Peso
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="weight"
                  id="weight"
                                  />
              </div>
              <div>
                <label className="form-label" htmlFor="address">
                  Direccion
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  placeholder="Direccion"
                />
              </div>
              <div>
                <label className="form-label" htmlFor="email">
                  Correo
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="phone">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Telefono"
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="height">
                  Estatura
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="height"
                  id="height"
                  placeholder="Estatura"
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="curp">
                  CURP
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="curp"
                  id="curp"
                  placeholder="CURP"
                  
                />
              </div>
              <div>
                <label className="form-label" htmlFor="categoria">
                  Categoria
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Categoria"
                  
                />
              </div>
              <div className="d-grip gap-2">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Registrar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrar;
