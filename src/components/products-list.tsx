import { Product } from "@/types/product";

export const ProductList = (props: { products: Product[] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Бренд</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
