import { api } from ".";

type GetIdsParams = {
  offset: number;
  limit: number;
};

export const GetIds = async (
  params: GetIdsParams
): Promise<string[] | null> => {
  try {
    const response = await api({
      body: JSON.stringify({ params, action: "get_ids" }),
    });

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("getIds error -", error);
    return null;
  }
};
