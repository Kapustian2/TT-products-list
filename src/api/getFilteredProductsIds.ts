import { Product } from "@/types/product";
import { api } from ".";

type GetFilteredProductsIdsParams = Partial<Product>;

export const getFilteredProductsIds = async (
  params: GetFilteredProductsIdsParams
): Promise<string[] | null> => {
  try {
    const response = await api({
      body: JSON.stringify({ params, action: "filter" }),
    });

    if (response.status >= 400) throw new Error(await response.text());

    const data = (await response.json()).result as string[];
    return data;
  } catch (error) {
    console.error("getFilteredProductsIds error :", error);
    return null;
  }
};
