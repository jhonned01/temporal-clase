import React, { useState } from "react";

const Incremento = () => {
  const [DensidadInitial, setDensidadInitial] = useState(0);
  const [DensidadFinal, setDensidadFinal] = useState(0);
  const [Incremento, setIncremento] = useState(0);

  const handleIncremento = (e) => {
    e.preventDefault();
    if (DensidadInitial && DensidadFinal) {
      let operacion =
        ((DensidadFinal - DensidadInitial) / DensidadInitial) * 100;

      setIncremento(operacion);
      console.log(DensidadFinal - DensidadInitial / DensidadInitial);
    } else {
      alert("Ingrese Datos");
    }
  };
  return (
    <div>
      <h1>Luego, se encuentra el incremento de las densidades.</h1>
      <form>
        <label>
          <input
            onChange={(e) => setDensidadInitial(parseFloat(e.target.value))}
            type="number"
            placeholder="Ingrese Densidad inicial"
          />
        </label>
        <label>
          <input
            onChange={(e) => setDensidadFinal(parseFloat(e.target.value))}
            type="number"
            placeholder="Ingrese Nueva Densidad"
          />
        </label>
        <button onClick={handleIncremento}>Calcular</button>
      </form>
      <p>Incremento:{Incremento}%</p>
    </div>
  );
};

export default Incremento;
