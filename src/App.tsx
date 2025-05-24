import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0);
  const id: string = "682c91021458dda78015985c";
  const url = "http://localhost:3000/api/productos";
  const cargarProducto = async (id: string) => {
    setCount(count + 1);
    const config = {
      methos: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${url}/${id}`, config);
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="container">
      <h1>Productos encontrados {count}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => cargarProducto(id)}
      >
        Cargar productos
      </button>
      <ToastContainer />
      <div className="card mt-3">
        <div className="card-header">
          <h3>Productos</h3>
        </div>
        <div className="card-body">name</div>
      </div>
    </div>
  );
}

export default App;
