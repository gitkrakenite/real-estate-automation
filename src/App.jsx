import { useState } from "react";
import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./screens/landLordScreens/authentication/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
