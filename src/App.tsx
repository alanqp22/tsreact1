import { useState, useEffect } from "react";
import { apiClient } from "./servicios/apiClient";
import Card from "./components/Card";
import Table from "./components/Table";
import type { ProductoType } from "./types/Products";
import "./App.css";
import Login from "./components/Login";

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
      <Login />
      <div className="row">
        <div className="col-6">
          <h1 className="bg-amber-200 text-3xl font-bold underline">
            Hello World
          </h1>
          <input
            type="file"
            className="file:bg-amber-600 file:px-4 file:rounded-lg p-2 file:text-white file:border-0 file:font-semibold hover:file:bg-violet-600"
          />
          <ol className="list-decimal marker:text-red-500">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 5</li>
          </ol>
          <h1 className="text-4xl bg-clip-text text-transparent font-extrabold bg-linear-to-r from-cyan-300 to-red-500">
            Mis recetas favoritas
          </h1>
          <form action="" onSubmit={obtenerProducto}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="id producto"
              onChange={handleInptChange}
            />
            <button
              type="submit"
              className="bg-mint-500 cursor-pointer relative hover:bg-emerald-600 p-2 rounded-lg block mx-auto my-8 w-60 text-white after:content-[''] after:absolute after:top-3 after:left-60 after:border-8 after:border-l-mint-500 after:hover:border-l-emerald-600 after:border-transparent"
            >
              Cargar productos
            </button>
          </form>
        </div>
        <div className="bg-linear-to-r from-cyan-500 to-blue-500 border-4 border-emerald-900">
          {producto && <Card producto={producto} />}
        </div>
      </div>
      <div className="row mt-3">
        {productos && <Table productos={productos} />}
      </div>
    </div>
  );
}

export default App;
