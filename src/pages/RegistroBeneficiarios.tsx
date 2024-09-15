import React from 'react';

const RegistroBeneficiarios: React.FC = () => {
return (
    <div className="container mt-4">
        <h2>Registro de Beneficiarios</h2>
        <form>
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
                <input type="Int" id="beneficiaryRequestAfiliadoI" className="form-control" placeholder="ID Afilado" />
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
        </form>
    </div>
);
};

export default RegistroBeneficiarios;
