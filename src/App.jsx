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
import { UsuarioAlojamiento } from "./pages/UsuarioAlojamiento/UsuarioAlojamiento";
import { AgregarTipoAlojamiento } from "./pages/AgregarTipoAlojamiento/AgregarTipoAlojamiento";
import { GetTipoAlojamiento } from "./pages/GetTipoAlojamiento/GetTipoAlojamiento";
import { AllTiposAlojamientos } from "./pages/AllTiposAlojamientos/AllTiposAlojamientos";
import { EliminarTipoAlojamiento } from "./pages/EliminarTipoAlojamiento/EliminarTipoAlojamiento";
import { EditarTipoAlojamiento } from "./pages/EditarTipoAlojamiento/EditarTipoAlojamiento";
import { UsuarioAgregarAlojamiento } from "./pages/UsuarioAlojamiento/AgregarAlojamiento/UsuarioAgregarAlojamiento";
import { TodosAlojamientos } from "./pages/UsuarioAlojamiento/TodosAlojamientos/TodosAlojamientos";
import { GetAlojamientoId } from "./pages/UsuarioAlojamiento/GetAlojamientoId/GetAlojamientoId";
import { ListaAlojamientos } from "./pages/UsuarioAlojamiento/ListaAlojamientos/ListaAlojamientos";
import { UsuarioEditarAlojamiento } from "./pages/UsuarioAlojamiento/UsuarioEditarAlojamiento/UsuarioEditarAlojamiento"; // Importa el componente
import { UsuarioDeleteAlojamiento } from "./pages/UsuarioAlojamiento/UsuarioDeleteAlojamiento/UsuarioDeleteAlojamiento";
import { AgregarServicio } from "./pages/Servicios/AgregarServicio/AgregarServicio";
import { AllServicios } from "./pages/Servicios/AllServicios/AllServicios";

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
          <Route path="/UsuarioAddAlojamiento" element={<UsuarioAlojamiento />} />
          <Route path="/idAlojamiento/:idAlojamiento" element={<AlojamientoDetailContainer />} />
          <Route path="/AgregarTipoAlojamiento" element={<AgregarTipoAlojamiento />} />
          <Route path="/GetTipoAlojamiento" element={<GetTipoAlojamiento />} />
          <Route path="/AllTiposAlojamientos" element={<AllTiposAlojamientos />} />
          <Route path="/EliminarTipoAlojamiento" element={<EliminarTipoAlojamiento />} />
          <Route path="/EditarTipoAlojamiento" element={<EditarTipoAlojamiento />} />
          <Route path="/UsuarioAgregarAlojamiento" element={<UsuarioAgregarAlojamiento />} />
          <Route path="/TodosAlojamientos" element={<TodosAlojamientos />} />
          <Route path="/GetAlojamientoId" element={<GetAlojamientoId />} />
          <Route path="/ListaAlojamientos" element={<ListaAlojamientos />} />
          <Route path="/UsuarioEditarAlojamiento/:id" element={<UsuarioEditarAlojamiento />} />
          <Route path="/UsuarioDeleteAlojamiento" element={<UsuarioDeleteAlojamiento />} />
          <Route path="/AgregarServicio" element={<AgregarServicio />} />
          <Route path="/AllServicios" element={<AllServicios />} />
          <Route path="Login" element={<AlojamientoContenedor />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
