import './assets/css/App.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistroAfiliados from './pages/RegistroAfiliados';
import RegistroBeneficiarios from './pages/RegistroBeneficiarios';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afiliados" element={<RegistroAfiliados />} />
          <Route path="/beneficiarios" element={<RegistroBeneficiarios />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
