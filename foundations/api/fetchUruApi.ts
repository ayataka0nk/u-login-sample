const baseHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const baseInit: Pick<RequestInit, "mode" | "credentials"> = {
  mode: "cors",
  credentials: "include",
};

export const fetchUruApi = async (input: RequestInfo, init?: RequestInit) => {
  const response = await fetch(input, {
    ...baseInit,
    ...init,
    headers: { ...baseHeaders, ...init?.headers },
  });
  return response;
};
