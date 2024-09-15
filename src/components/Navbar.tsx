import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/afiliados">Registro Afiliados</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/beneficiarios">Registro Beneficiarios</Link>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default Navbar;
