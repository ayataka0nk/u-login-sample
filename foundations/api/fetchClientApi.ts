import { baseUrl } from "./constants";
import { fetchUruApi } from "./fetchUruApi";

type FetchClientApiResponseBody = {
  client_id: number;
  email: string;
};

type FetchClientApiResult =
  | {
      status: 200;
      client: {
        clientId: number;
        email: string;
      };
    }
  | {
      status: 401 | 500;
    };

export const fetchClientApi = async (): Promise<FetchClientApiResult> => {
  //ログインが必要なAPI
  const res = await fetchUruApi("/api/client");
  const resBody: FetchClientApiResponseBody = await res.json();
  if (res.status === 200) {
    return {
      status: 200,
      client: {
        clientId: resBody.client_id,
        email: resBody.email,
      },
    };
  } else if (res.status === 401) {
    return {
      status: 401,
    };
  } else {
    return {
      status: 500,
    };
  }
};
