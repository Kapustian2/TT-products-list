import { useEffect } from "react";
import "./App.css";
import { Filters, Pagination, ProductList } from "./components";
import { useProductsData } from "./hooks/useProductsData";
import { Loading } from "./components/loading/loading";

function App() {
  const { products, page, nextPage, prevPage, setFilter, isLoading } =
    useProductsData();

  useEffect(() => {
    if (isLoading) {
      document.title = "Loading...";
    } else {
      document.title = "Products";
    }
  }, [isLoading]);

  return (
    <div>
      <Filters onFilterChange={setFilter} />
      <Loading show={isLoading} />
      <ProductList products={products} />
      <Pagination currentPage={page} nextPage={nextPage} prevPage={prevPage} />
    </div>
  );
}

export default App;
