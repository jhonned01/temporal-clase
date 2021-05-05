import React, { useState } from "react";

const Densidad = () => {
  const [Vertice, setVertice] = useState(0);
  const [Aristas, setAristas] = useState(0);
  const [Densidad, setDensidad] = useState(0);

  const handleDensidad = (e) => {
    e.preventDefault();
    if (Vertice && Aristas) {
      let Operacion = (2 * Vertice) / (Aristas * (Aristas - 1)).toFixed(4);

      setDensidad(Operacion);
    } else {
      alert("Ingrese datos");
    }
  };
  return (
    <div>
      <h1>Densidad </h1>
      <form>
        <label>
          <input
            onChange={(e) => setVertice(e.target.value)}
            type="number"
            placeholder="Ingrese Relaciones posibles o vertice"
          />
        </label>
        <label>
          <input
            onChange={(e) => setAristas(e.target.value)}
            type="number"
            placeholder="Ingrese cantidad de puntos o aristas"
          />
        </label>
        <button onClick={handleDensidad}>Calcular</button>
      </form>
      <p>Densidad:{Densidad}</p>
      <p>Densidad:{Densidad * 100}%</p>
    </div>
  );
};

export default Densidad;
