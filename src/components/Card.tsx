import type React from "react";

type CardProps = {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  _id?: string;
};
const Card: React.FC<CardProps> = ({ name, price, quantity, image }) => {
  return (
    <div className="card mt-3">
      <div className="card-header">
        <h3>PRODUCTO</h3>
      </div>
      <div className="card-body">
        <h4>Nombre de producto: {name}</h4>
        <h4>Precio del producto: {price}</h4>
        <h4>Cantidad disponible: {quantity}</h4>
        <h4>Imagen: {image || "default"}</h4>
      </div>
    </div>
  );
};

export default Card;
