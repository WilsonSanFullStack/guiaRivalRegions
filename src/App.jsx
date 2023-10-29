import { Routes, Route, useLocation } from "react-router-dom";

import Inicio from "./components/Inicio.jsx";
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
