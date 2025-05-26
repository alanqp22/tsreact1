import type React from "react";
import type { ProductoType } from "../types/Products";

type PropsType = {
  producto: ProductoType;
};

const Card: React.FC<PropsType> = ({ producto }) => {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>PRODUCTO</h3>
      </div>
      <div className="card-body">
        <h4>Nombre de producto: {producto.name}</h4>
        <h4>Precio del producto: {producto.price}</h4>
        <h4>Cantidad disponible: {producto.quantity}</h4>
        <h4>Imagen: {producto.imagen || "default"}</h4>
      </div>
    </div>
  );
};

export default Card;
