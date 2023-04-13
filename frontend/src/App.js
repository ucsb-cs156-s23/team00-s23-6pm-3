import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import SanDiegoPage from "main/pages/SanDiegoPage";
import CalgaryPage from "main/pages/CalgaryPage";

import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <BrowserRouter basename="/team00-s23-6pm-3">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/SanDiego" element={<SanDiegoPage />} />
        <Route exact path="/towns/Calgary" element={<CalgaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
