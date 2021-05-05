import React, { useState } from "react";

const Aristas = () => {
  const [Densidad, setDensidad] = useState(0);
  const [Aristas, setAristas] = useState(0);
  const [Vertice, setVertice] = useState(0);

  const handleVertices = (e) => {
    e.preventDefault();
    if (Densidad && Aristas) {
      let Operacion =
        ((Densidad / 100).toFixed(4) * (Aristas * (Aristas - 1))) / 2;

      setVertice(Operacion);
    } else {
      alert("Ingrese datos");
    }
  };
  return (
    <div>
      <h1>Encuentre el grafo:</h1>
      <form>
        <label>
          <input
            onChange={(e) => setDensidad(e.target.value)}
            type="number"
            placeholder="Ingrese Densidad "
          />
        </label>
        <label>
          <input
            onChange={(e) => setAristas(e.target.value)}
            type="number"
            placeholder="Ingrese cantidad de puntos o aristas"
          />
        </label>
        <button onClick={handleVertices}>Calcular</button>
      </form>
      <p>Vertice:{Vertice}</p>
      <p>Vertice Redondeado:{Math.round(Vertice)}</p>
    </div>
  );
};

export default Aristas;
