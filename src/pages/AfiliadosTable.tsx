import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface Afiliado {
  id_afiliado: number;
  nombre: string;
  edad: number;
  email: string;
  genero: string;
}

const AfiliadosTable = () => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);

  useEffect(() => {
    fetch('/api/afiliado/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Afiliado[]) => {
        console.log('Datos recibidos:', data);
        setAfiliados(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Afiliados</h1>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          {afiliados.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">Cargando datos...</td>
            </tr>
          ) : (
            afiliados.map((afiliado) => (
              <tr key={afiliado.id_afiliado}>
                <td>{afiliado.id_afiliado}</td>
                <td>{afiliado.nombre}</td>
                <td>{afiliado.edad}</td>
                <td>{afiliado.email}</td>
                <td>{afiliado.genero}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AfiliadosTable;