import { formatDate } from "@/lib/dateTime";
import { MD5 } from "@/lib/md5";

const key = MD5("Valantis" + "_" + formatDate());

interface FetchConfig extends RequestInit {}

function createFetchInstance(config: FetchConfig) {
  return function (options?: RequestInit) {
    const mergedOptions: RequestInit = { ...config, ...options };
    return fetch("http://api.valantis.store:40000/", mergedOptions);
  };
}

// Пример использования:
const commonConfig: FetchConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Auth": `${key}`,
  },
};

export const api = createFetchInstance(commonConfig);
