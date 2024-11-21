import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

interface Afiliado {
  idAfiliado: number;
  nombre: string;
  edad: number;
  email: string;
  genero: string;
}

const AfiliadosTable = () => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);

  useEffect(() => {
    fetch('https://api-saludarqui-170213186572.us-central1.run.app/afiliado/todos')
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
              <tr key={afiliado.idAfiliado}>
                <td>{afiliado.idAfiliado}</td>
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
