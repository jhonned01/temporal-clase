import React from "react";
import Densidad from "../src/components/Densidad.jsx";
import Vertice from "./components/Vertice.jsx";
import Aristas from "../src/components/Aristas";
import Incremento from "../src/components/Incremento";

const App = () => {
  return (
    <div className="main">
      <div>
        <Densidad />
      </div>
      <div>
        <Vertice />
      </div>
      <div>
        <Incremento />
      </div>
    </div>
  );
};

export default App;
