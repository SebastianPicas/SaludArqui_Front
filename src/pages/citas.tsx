import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface AfiliadoORM {
  idAfiliado: number;
  nombre: string;
  edad: number;
  email: string;
  genero: string;
}

interface CitaMedica {
  idCita: number;
  tipoDeCita: string;
  fechaConsulta: Date;
  descripcion: string;
}

interface HistorialMedico {
  idHistorialMedico: number;
  citasMedicas: CitaMedica[];
  afiliadoORM: AfiliadoORM;
}

const Citas: React.FC = () => {
  const [id, setId] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [citasMedicas, setCitasMedicas] = useState<CitaMedica[]>([]);

  const handleGetClick = () => {
    if (id === '') {
      setError('Por favor ingresa un ID válido');
      return;
    }

    fetch(`https://api-saludarqui-170213186572.us-central1.run.app/historialMedico/afiliado/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: HistorialMedico) => {
        console.log('Datos recibidos:', data);
        setCitasMedicas(data.citasMedicas);
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
          <label htmlFor="id" className="form-label">ID de afiliado a buscar</label>
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
            Buscar
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
                    <th>Tipo De Cita</th>
                    <th>Fecha Consulta</th>
                    <th>Descripcion</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(citasMedicas) && citasMedicas.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center">No se encontraron citas médicas</td>
                    </tr>
                  ) : (
                    Array.isArray(citasMedicas) && citasMedicas.map((cita) => (
                      <tr key={cita.idCita}>
                        <td>{cita.idCita}</td>
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
