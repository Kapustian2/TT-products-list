import "./App.css";
import { Filters, Pagination, ProductList } from "./components";
import { useProductsData } from "./hooks/useProductsData";

function App() {
  const { products, page, nextPage, prevPage, setFilter } = useProductsData();
  return (
    <div>
      <Filters onFilterChange={setFilter} />

      <ProductList products={products} />
      <Pagination currentPage={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
