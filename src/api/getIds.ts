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
      body: JSON.stringify({
        params,
        action: "get_ids",
      }),
    });
    if (response.status >= 400) throw new Error(await response.text());

    const data = (await response.json()).result as string[];
    return data;
  } catch (error) {
    console.error("getIds error :", error);
    return null;
  }
};
