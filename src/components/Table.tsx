import type { ProductoType } from "../types/Products";

type Props = {
  productos: ProductoType[];
};
const Table: React.FC<Props> = ({ productos }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Id</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos &&
            productos.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item._id}</td>
                  <td>
                    <button className="btn btn-success btn-sm">
                      <i className="fas fa-square-plus"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
