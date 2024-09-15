import React from 'react';

const RegistroAfiliados: React.FC = () => {
return (
    <div className="container mt-4">
        <h2>Registro de Afiliados</h2>
        <form>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Nombre Completo</label>
                <input type="text" id="fullName" className="form-control" placeholder="Nombre completo" />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Edad</label>
                <input type="number" id="age" className="form-control" placeholder="Edad" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label">Género</label>
                <input type="text" id="gender" className="form-control" placeholder="Género" />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    </div>
);
};

export default RegistroAfiliados;
