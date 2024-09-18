import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import contact from '../assets/images/contact-img.jpg';

const RegistroCitas: React.FC = () => {
  const [tipoDeCita, setTipoDeCita] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [fechaConsulta, setFechaConsulta] = useState<string>('');
  const [idAfiliado, setIdAfiliado] = useState<number | ''>('');
  const [idBeneficiario, setIdBeneficiario] = useState<number | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    fetch('https://saludarqui.uc.r.appspot.com/citaMedica', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tipoDeCita, descripcion, fechaConsulta, idAfiliado, idBeneficiario }), 
    })
    .then(() => {
      setMessage('Cita registrada con éxito!');
      setTipoDeCita('');
      setDescripcion('');
      setFechaConsulta('');
      setIdAfiliado('');
      setIdBeneficiario(null);
    })
    .catch(error => {
      setMessage(`Error al registrar la cita: ${error.message}`);
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>Registrar Cita</h2>
          <form onSubmit={handleSubmit}>
            
          <div className="mb-3">
              <label htmlFor="idAfiliado" className="form-label">ID Afiliado</label>
              <input
                type="number"
                id="idAfiliado"
                className="form-control"
                placeholder="ID Afiliado"
                value={idAfiliado}
                onChange={(e) => setIdAfiliado(Number(e.target.value))}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="tipoDeCita" className="form-label">Tipo de Cita</label>
              <input
                type="text"
                id="tipoDeCita"
                className="form-control"
                placeholder="Tipo de Cita"
                value={tipoDeCita}
                onChange={(e) => setTipoDeCita(e.target.value)}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <input
                type="text"
                id="descripcion"
                className="form-control"
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fechaConsulta" className="form-label">Fecha de Consulta</label>
              <input
                type="date"
                id="fechaConsulta"
                className="form-control"
                value={fechaConsulta}
                onChange={(e) => setFechaConsulta(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar Cita
            </button>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </form>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="mt-4">
            <img src={contact} alt="Contact" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroCitas;
