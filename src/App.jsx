import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState(() => {
    return JSON.parse(localStorage.getItem("tareas")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (tarea.trim() !== "") {
      setTareas([...tareas, tarea]);
      setTarea("");
    }
  };

  const removerTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="contenedor">
      <h1 className="titulo">To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea..."
          className="input"
        />
        <button onClick={agregarTarea} className="boton">
          Agregar
        </button>
      </div>

      <ul className="lista">
        {tareas.map((t, index) => (
          <li key={index} className="tarea">
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => removerTarea(index)}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
