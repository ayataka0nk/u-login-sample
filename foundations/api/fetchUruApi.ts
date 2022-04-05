import { getToken } from "../token";
import { baseUrl } from "./constants";

const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const baseInit: Pick<RequestInit, "mode" | "credentials"> = {
  credentials: "include",
};

export const fetchUruApi = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(baseUrl + input, {
    ...baseInit,
    ...init,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      ...baseHeaders,
      ...init?.headers,
    },
  });
  return response;
};
