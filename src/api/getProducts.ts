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

    if (response.status >= 400) throw new Error(await response.text());

    const data = (await response.json()).result as Product[];
    return data.filter((item, index, arr) => {
      return arr.findIndex((el) => el.id === item.id) === index;
    });
  } catch (error) {
    console.error("getProducts", error);
    return null;
  }
};
