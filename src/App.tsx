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
import BeneficiariosTablas from './pages/BeneficiariosTable';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/SaludArqui_Front/" element={<Home />} />
          <Route path="/SaludArqui_Front//afiliados" element={<RegistroAfiliados />} />
          <Route path="/SaludArqui_Front//beneficiarios" element={<RegistroBeneficiarios />} />
          <Route path="/SaludArqui_Front//citas" element={<Citas />}/>
          <Route path="/SaludArqui_Front//listafiliados" element={<AfiliadosTablas />}/>
          <Route path="/SaludArqui_Front//listbeneficiario" element={<BeneficiariosTablas />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;