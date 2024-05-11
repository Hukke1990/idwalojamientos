import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/Contact/Contact";
import { About } from "./pages/About/About";

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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
