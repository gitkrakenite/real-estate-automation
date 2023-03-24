import { useState } from "react";
import "./App.css";
import Splash from "./screens/splash/Splash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./screens/landLordScreens/authentication/Auth";
import Dashboard from "./screens/landLordScreens/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
