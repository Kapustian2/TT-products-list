import { useEffect } from "react";
import "./App.css";
import { Filters, Pagination, ProductList } from "./components";
import { useProductsData } from "./hooks/useProductsData";

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
      {!isLoading ? (
        <>
          <Filters onFilterChange={setFilter} />
          <ProductList products={products} />
          <Pagination
            currentPage={page}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
