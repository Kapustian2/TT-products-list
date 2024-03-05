// Нужно получать данные из api по фильтрам, хук должен вернуть state(таблицу) и методы

import { GetIds } from "@/api/getIds";
import { GetProducts } from "@/api/getProducts";
import { PAGINATION_LIMIT } from "@/constants";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(0);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  useEffect(() => {
    async function fetchData() {
      const ids = await GetIds({
        limit: PAGINATION_LIMIT + 20,
        offset: PAGINATION_LIMIT * page,
      });
      if (ids) {
        const prods = await GetProducts({ ids });
        if (prods) setProducts(prods.slice(0, 50));
      }
    }
    fetchData();
  }, [page]);

  return { products, page, nextPage, prevPage };
};
