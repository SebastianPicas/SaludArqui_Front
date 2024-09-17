import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../public/react.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="nav">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/SaludArqui_Front/">Home</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="afiliadosDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Afiliados
              </a>
              <ul className="dropdown-menu" aria-labelledby="afiliadosDropdown">
                <li>
                  <Link className="dropdown-item" to="/afiliados">Registro/Actualización</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/listafiliados">Lista Afiliados</Link>
                </li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
            <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="afiliadosDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Beneficiarios
              </a>
              <ul className="dropdown-menu" aria-labelledby="afiliadosDropdown">
                <li>
                  <Link className="nav-link" to="/beneficiarios">Registro/Actualización</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/listbeneficiario">Lista Beneficiarios</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/citas">Citas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
