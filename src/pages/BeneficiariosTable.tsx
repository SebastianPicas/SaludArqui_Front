import React, { useEffect, useState } from 'react';

interface Beneficiario {
  id_beneficiario: number;
  nombre: string;
  email: string;
  afliliadoORM: {
    id_afiliado: number;
    nombre: string;
    edad: number;
    email: string;
    genero: string;
  };
}

const BeneficiariosTable: React.FC = () => {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/beneficiario/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Beneficiario[]) => {
        console.log('Datos recibidos:', data);
        setBeneficiarios(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        setError('No se pudieron cargar los datos. Por favor, intenta de nuevo más tarde.');
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Beneficiarios</h1>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID Beneficiario</th>
              <th>Nombre Beneficiario</th>
              <th>Email Beneficiario</th>
              <th>ID Afiliado</th>
              <th>Nombre Afiliado</th>
              <th>Email Afiliado</th>
            </tr>
          </thead>
          <tbody>
            {beneficiarios.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center">Cargando datos...</td>
              </tr>
            ) : (
              beneficiarios.map((beneficiario) => (
                <tr key={beneficiario.id_beneficiario}>
                  <td>{beneficiario.id_beneficiario}</td>
                  <td>{beneficiario.nombre}</td>
                  <td>{beneficiario.email}</td>
                  <td>{beneficiario.afliliadoORM?.id_afiliado ?? 'N/A'}</td>
                  <td>{beneficiario.afliliadoORM?.nombre ?? 'N/A'}</td>
                  <td>{beneficiario.afliliadoORM?.email ?? 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BeneficiariosTable;
