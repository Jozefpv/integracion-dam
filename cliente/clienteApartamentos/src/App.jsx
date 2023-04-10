import Inicio from "./components/Inicio/Inicio"
import Navbar from "./components/Header/NavbarTest";
import Conocenos from "./components/Conocenos/conocenos";
import Apartamentos from "./components/Apartamentos/Apartamentos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApartmentDetail from "./components/Apartamentos/ApartmentDetail";

function App() {

  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <main>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/apartamentos" element={<Apartamentos/>}/>
          <Route path="/apartamentos/:id" element={<ApartmentDetail/>}/>
          <Route path="/conocenos" element={<Conocenos/>}/>
        </Routes>
      </main>
    </Router>
    
  )
}

export default App
