import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { Body } from "./components/Body/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
