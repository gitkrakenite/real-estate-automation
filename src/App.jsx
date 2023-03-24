import { useState } from "react";
import "./App.css";
import Splash from "./screens/splash/Splash";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Splash />
    </div>
  );
}

export default App;
