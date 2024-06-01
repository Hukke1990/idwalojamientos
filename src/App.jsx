import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
import { AlojamientoDetailContainer } from "./components/Body/AlojamientoDetailContainer/AlojamientoDetailContainer";
import { AlojamientoContenedor } from "./components/Body/AlojamientoContenedor/AlojamientoContenedor";
import { AdministrarAlojamientos } from "./pages/AdministrarAlojamientos/AdministrarAlojamientos/AdministrarAlojamientos";
import { AgregarAlojamiento } from "./pages/AgregarTipoAlojamiento/AgregarTipoAlojamiento";
import { GetTipoAlojamiento } from "./pages/GetTipoAlojamiento/GetTipoAlojamiento";
import { AllTiposAlojamientos } from "./pages/AllTiposAlojamientos/AllTiposAlojamientos";
import { EliminarTipoAlojamiento } from "./pages/EliminarTipoAlojamiento/EliminarTipoAlojamiento";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/AdministrarAlojamientos" element={<AdministrarAlojamientos />} />
          <Route path="/idAlojamiento/:idAlojamiento" element={<AlojamientoDetailContainer />} />
          <Route path="/AgregarTipoAlojamiento" element={<AgregarAlojamiento />} />
          <Route path="/GetTipoAlojamiento" element={<GetTipoAlojamiento />} />
          <Route path="/AllTiposAlojamientos" element={<AllTiposAlojamientos />} />
          <Route path="/EliminarTipoAlojamiento" element={<EliminarTipoAlojamiento />} />
          <Route path="Login" element={<AlojamientoContenedor />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
