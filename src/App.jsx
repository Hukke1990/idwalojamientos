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
import { AdministrarAlojamientos } from "./pages/AdministrarAlojamientos/AdministrarAlojamientos";
import { AddTipoAlojamiento } from "./components/Form/AddTipoAlojamiento/AddTipoAlojamiento";
import { AgregarAlojamiento } from "./pages/AgregarAlojamiento/AgregarAlojamiento";

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
          <Route path="/AgregarAlojamiento" element={<AgregarAlojamiento />} />
          <Route path="Login" element={<AlojamientoContenedor />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
