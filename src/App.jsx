import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";
//import { AlojamientoDetalles } from "./pages/AlojamientoDetalles/AlojamientoDetalles";
//import { AlojamientoContenedor } from "./components/Body/AlojamientoContenedor/AlojamientoContenedor";
import { AlojamientoDetailContainer } from "./components/Body/AlojamientoDetailContainer/AlojamientoDetailContainer";
import { AlojamientoContenedor } from "./components/Body/AlojamientoContenedor/AlojamientoContenedor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/idAlojamiento/:idAlojamiento" element={<AlojamientoDetailContainer />} />
          <Route path="Login" element={<AlojamientoContenedor />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
