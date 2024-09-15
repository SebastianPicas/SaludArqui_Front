import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import contact from '../assets/images/about-img.jpg';

const RegistroBeneficiarios: React.FC = () => {
  const [showId, setShowId] = useState(false);

  const handleUpdateClick = () => {
    setShowId(prevShowId => !prevShowId);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>{showId ? 'Actualizar Beneficiario' : 'Registrar Beneficiario'}</h2>
          <form>
            {showId && (
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" id="id" className="form-control" placeholder="ID" />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="beneficiaryName" className="form-label">Nombre Completo</label>
              <input type="text" id="beneficiaryName" className="form-control" placeholder="Nombre completo" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="beneficiaryRequestAfiliadoID" className="form-label">ID Afiliado</label>
              <input type="number" id="beneficiaryRequestAfiliadoID" className="form-control" placeholder="ID Afiliado" />
            </div>
            <div className="mb-3">
              <button type="button" className="btn btn-primary" onClick={handleUpdateClick}>
                {showId ? 'Registrar' : 'Actualizar'} Beneficiario
              </button>
            </div>
            <button type="submit" className="btn btn-primary">
              {showId ? 'Actualizar' : 'Registrar'}
            </button>
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
