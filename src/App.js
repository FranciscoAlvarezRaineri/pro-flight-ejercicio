import React, { useState } from "react";
import Arrow from "./components/Arrow";
import Square from "./components/Square";

function App() {
  const [selected, setSelected] = useState(0); // Estado que guarda el index del componente seleccionado.
  const amount = 4; // Determina la cantidad de componentes a renderizar.

  // Función que modifica el index seleccionado al presionar los botones dependiendo de la dirección.
  const handleClick = (direction) => {
    if (direction === "left") {
      selected - 1 < 0 ? setSelected(amount - 1) : setSelected(selected - 1);
    } else {
      selected + 1 >= amount ? setSelected(0) : setSelected(selected + 1);
    }
  };

  return (
    <div className="container">
      <Arrow direction={"left"} handleClick={handleClick} />
      {Array.from(Array(amount).keys()).map((index) => (
        <Square selected={selected} index={index} key={index} />
      ))}
      <Arrow direction={"right"} handleClick={handleClick} />
    </div>
  );
}

export default App;
