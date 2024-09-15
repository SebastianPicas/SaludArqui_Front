import React from 'react';
import imgHome from '../assets/images/slider-img.jpg';

const Home: React.FC = () => {
return (
    <div className="container mt-4">
        <h2>Bienvenido a la Página Principal</h2>
        <p>Este es el contenido de la página de inicio.</p>
        <div className="img-box">
            <img src={imgHome} alt="Contact" />
        </div>
    </div>
);
};

export default Home;
