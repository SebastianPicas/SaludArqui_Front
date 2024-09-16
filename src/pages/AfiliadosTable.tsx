import React, { useEffect, useState } from 'react';

// Definir la interfaz del tipo de afiliado
interface Afiliado {
  id_afiliado: number;
  nombre: string;
  edad: number;
  email: string;
  genero: string;
  citasMedicas: any[]; // Puedes refinar esto si tienes información sobre cómo es este array
}

const AfiliadosTable = () => {
  const [afiliados, setAfiliados] = useState<Afiliado[]>([]);

  // Función para obtener los datos de la API
  useEffect(() => {
    fetch('/api/afiliado/todos')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Afiliado[]) => {
        console.log('Datos recibidos:', data); // Mostrar los datos en la consola
        setAfiliados(data);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Afiliados</h1>
      <table border={1}>
        <thead>
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
              <td colSpan={5}>Cargando datos...</td>
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
