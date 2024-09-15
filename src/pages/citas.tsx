import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Citas: React.FC = () => {
    return (
        <div className="container-fluid mt-4">
            <h2>Historial de Citas</h2>
            <div className="row mb-3">
                <div className="col-md-6"> {/* Ajusta el ancho del campo de texto */}
                    <label htmlFor="id" className="form-label">ID</label>
                    <input 
                        type="text" 
                        id="id" 
                        className="form-control" 
                        placeholder="ID" 
                        style={{ maxWidth: '300px' }} // Ajusta el ancho del campo de texto
                    />
                </div>
                <div className="col-md-6 d-flex align-items-end"> {/* Alinea el botón a la izquierda */}
                    <button type="submit" className="btn btn-primary btn-sm">
                        Search
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Description</th>
                                    <th>UOM</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NU-CH-000001</td>
                                    <td>Chocolate chip cookies</td>
                                    <td>Pack</td>
                                    <td>
                                        <a href="#" className="btn btn-default">Edit</a> &nbsp;
                                        <a href="#" className="btn btn-default">Default</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Citas;
