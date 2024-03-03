import { Product } from "@/types/product";
import { api } from ".";

type GetProductsParams = {
  ids: string[];
};

export const GetProducts = async (
  params: GetProductsParams
): Promise<Product[] | null> => {
  try {
    const response = await api({
      body: JSON.stringify({ params, action: "get_items" }),
    });
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("getProducts", error);
    return null;
  }
};
