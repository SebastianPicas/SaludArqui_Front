import './assets/css/App.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistroAfiliados from './pages/RegistroAfiliados';
import RegistroBeneficiarios from './pages/RegistroBeneficiarios';
import Home from './pages/Home';
import Citas from './pages/Citas';
import AfiliadosTablas from './pages/AfiliadosTable';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/afiliados" element={<RegistroAfiliados />} />
          <Route path="/beneficiarios" element={<RegistroBeneficiarios />} />
          <Route path="/citas" element={<Citas />}/>
          <Route path="/listafiliados" element={<AfiliadosTablas />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;