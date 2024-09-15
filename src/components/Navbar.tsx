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
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/afiliados">Afiliados</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/beneficiarios">Beneficiarios</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;