import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import contact from '../assets/images/about-img.jpg';

const RegistroBeneficiarios: React.FC = () => {
  const [id] = useState<string>('');
  const [nombre, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [idAfiliado, setIdA] = useState<number | ''>('');
  const [showId, setShowId] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const CORSHEADER = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const handleRegistro = (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!nombre || !email || !idAfiliado) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    console.log({ nombre, email, idAfiliado });

    fetch('/api/beneficiario', {
      method: 'POST',
      headers: {
        ...CORSHEADER,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, idAfiliado }),
    })
    .then((data) => {
      setMessage('Beneficiario registrado con éxito!');
      setFullName('');
      setEmail('');
      setIdA('');
    })
    .catch(error => {
      setMessage(`Error al registrar el beneficiario: ${error.message}`);
    });
  };

  const handleUpdateClick = () => {
    setShowId(prevShowId => !prevShowId);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>{showId ? 'Actualizar Beneficiario' : 'Registrar Beneficiario'}</h2>
          <form onSubmit={handleRegistro}>
            {showId && (
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input 
                  type="text" 
                  id="id" 
                  className="form-control" 
                  placeholder="ID"
                  value={id} 
                  readOnly
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="beneficiaryName" className="form-label">Nombre Completo</label>
              <input 
                type="text" 
                id="beneficiaryName" 
                className="form-control" 
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setFullName(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="beneficiaryRequestAfiliadoID" className="form-label">ID Afiliado</label>
              <input 
                type="number" 
                id="beneficiaryRequestAfiliadoID" 
                className="form-control" 
                placeholder="ID Afiliado"
                value={idAfiliado || ''} 
                onChange={(e) => setIdA(Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary" onClick={handleUpdateClick}>
                {showId ? 'Registrar' : 'Actualizar'} Beneficiario
              </button>
            </div>
            <button type="submit" className="btn btn-primary">
              {showId ? 'Actualizar' : 'Registrar'}
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

export default RegistroBeneficiarios;
