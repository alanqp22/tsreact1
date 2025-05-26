import { useState, useEffect } from "react";
import { apiClient } from "./servicios/apiClient";
import Card from "./components/Card";
import Table from "./components/Table";
import type { ProductoType } from "./types/Products";
import "./App.css";

function App() {
  const url = "http://localhost:3000/api/productos";
  const [idProducto, setIdProducto] = useState("");
  const [producto, setProducto] = useState<ProductoType | null>(null);
  const [productos, setProductos] = useState<ProductoType[]>([]);
  useEffect(() => {
    apiClient.get<ProductoType[]>(url).then((resp: ProductoType[]) => {
      setProductos(resp);
    });
  }, []);

  const obtenerProducto = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response2 = await apiClient.get<ProductoType>(`${url}/${idProducto}`);
    setProducto(response2);
  };

  const handleInptChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIdProducto(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>Mis recetas favoritas</h1>
          <form action="" onSubmit={obtenerProducto}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="id producto"
              onChange={handleInptChange}
            />
            <button type="submit" className="btn btn-primary">
              Cargar productos
            </button>
          </form>
        </div>
        <div className="col-6">{producto && <Card producto={producto} />}</div>
      </div>
      <div className="row mt-3">
        {productos && <Table productos={productos} />}
      </div>
    </div>
  );
}

export default App;
