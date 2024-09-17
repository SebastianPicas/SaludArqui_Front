import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import contact from '../assets/images/contact-img.jpg';

const RegistroAfiliado: React.FC = () => {
  const [id, setId] = useState<number | ''>('');
  const [nombre, setFullName] = useState<string>('');
  const [edad, setAge] = useState<number | ''>('');
  const [email, setEmail] = useState<string>('');
  const [genero, setGender] = useState<string>('');
  const [showId, setShowId] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  interface Afiliado {
    id_afiliado: number;
    nombre: string;
    edad: number;
    email: string;
    genero: string;
  }

  const CORSHEADER = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  const handleGetClick = () => {
    if (id) {
      fetch(`/api/afiliado/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la respuesta HTTP: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Afiliado) => {
          console.log('Afiliado encontrado:', data);
          setFullName(data.nombre);
          setAge(data.edad);
          setEmail(data.email);
          setGender(data.genero);
          setMessage('Afiliado encontrado y cargado correctamente');
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
          setMessage('Error al buscar el afiliado.');
        });
    } else {
      setMessage('Por favor ingresa un ID válido.');
    }
  };

  const handleUpdateClick = () => {
    setShowId(prevShowId => !prevShowId);
    setMessage(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    fetch('/api/afiliado', {
      method: 'POST',
      headers: {
        ...CORSHEADER,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, edad, email, genero }), 
    })
    .then(() => {
      setMessage('Afiliado registrado con éxito!');
      setFullName('');
      setAge('');
      setEmail('');
      setGender('');
    })
    .catch(error => {
      setMessage(`Error al registrar el afiliado: ${error.message}`);
    });
  };


  const handleUpdate = (event: React.FormEvent) => {
    event.preventDefault();
  
    fetch(`/api/afiliado/${id}`, {
      method: 'PUT',
      headers: {
        ...CORSHEADER,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, edad, email, genero }), 
    })
    .then(() => {
      setMessage('Afiliado actualizado con éxito!');
      setFullName('');
      setAge('');
      setEmail('');
      setGender('');
    })
    .catch(error => {
      setMessage(`Error al actualizar el afiliado: ${error.message}`);
    });
  };
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <h2>{showId ? 'Actualizar Afiliado' : 'Registrar Afiliado'}</h2>
          <form onSubmit={showId ? handleUpdate : handleSubmit}>
            {showId && (
              <div className="mb-3">
                <label htmlFor="id" className="form-label">ID</label>
                <input 
                  type="number" 
                  id="id" 
                  className="form-control" 
                  placeholder="ID" 
                  value={id}
                  onChange={(e) => setId(Number(e.target.value))}
                />
              </div>
            )}
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Nombre Completo</label>
              <input 
                type="text" 
                id="fullName" 
                className="form-control" 
                placeholder="Nombre completo" 
                value={nombre}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Edad</label>
              <input 
                type="number" 
                id="age" 
                className="form-control" 
                placeholder="Edad" 
                value={edad}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Género</label>
              <input 
                type="text" 
                id="gender" 
                className="form-control" 
                placeholder="Género" 
                value={genero}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            {showId && (
              <div className="mb-3">
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={handleGetClick}
                >
                  Buscar afiliado por ID
                </button>
              </div>
            )}
            <div className="mb-3">
              <button 
                type="button" 
                className="btn btn-primary" 
                onClick={handleUpdateClick}
              >
                {showId ? 'Registrar' : 'Actualizar'} Afiliado
              </button>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary">
              {showId ? 'Actualizar' : 'Registrar'}
            </button>
            {message && <div className="mt-3 alert alert-info">{message}</div>}
          </form>
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="mt-4">
            <img src={contact} alt="Contact" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroAfiliado;
