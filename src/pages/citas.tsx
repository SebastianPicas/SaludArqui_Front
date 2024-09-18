import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface CitasA {
  idCita: number;
  tipoDeCita: string;
  fechaConsulta: Date;
  descripcion: string;
  afliliadoORM: {
    idAfiliado: number;
    nombre: string;
    edad: number;
    email: string;
    genero: string;
  };
}

const Citas: React.FC = () => {
  const [id, setId] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [citasA, setCitasA] = useState<CitasA[]>([]);

  const handleGetClick = () => {
    if (id === '') {
      setError('Por favor ingresa un ID válido');
      return;
    }

    fetch(`/api/historialMedico/afiliado/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: CitasA[]) => {
        console.log('Datos recibidos:', data);
        setCitasA(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        setError('No se pudieron cargar los datos. Por favor, intenta de nuevo más tarde.');
      });
  };

  return (
    <div className="container-fluid mt-4">
      <h2>Historial de Citas</h2>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">ID</label>
          <input
            type="text"
            id="id"
            className="form-control"
            placeholder="ID"
            style={{ maxWidth: '300px' }}
            value={id}
            onChange={(e) => setId(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        <div className="col-md-6 d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            onClick={handleGetClick}
          >
            Search
          </button>
        </div>
      </div>
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Id Cita</th>
                    <th>Id Afiliado</th>
                    <th>Tipo De Cita</th>
                    <th>Fecha Consulta</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(citasA) && citasA.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center">Cargando datos...</td>
                    </tr>
                  ) : (
                    Array.isArray(citasA) && citasA.map((cita) => (
                      <tr key={cita.idCita}>
                        <td>{cita.idCita}</td>
                        <td>{cita.afliliadoORM.idAfiliado}</td>
                        <td>{cita.tipoDeCita}</td>
                        <td>{new Date(cita.fechaConsulta).toLocaleDateString()}</td>
                        <td>{cita.descripcion}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Citas;
