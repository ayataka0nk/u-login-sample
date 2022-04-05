import { saveToken } from "../token";
import { baseUrl } from "./constants";
import { fetchUruApi } from "./fetchUruApi";

type FetchLoginApiParams = {
  email: string;
  password: string;
};

type FetchLoginApiResponseBody = {
  token?: string;
};

type FetchLoginApiResult =
  | {
      status: 200;
      token: string;
    }
  | {
      status: 401;
      message: string;
    }
  | {
      status: 500;
      message: string;
    };

export const fetchLoginApi = async ({
  email,
  password,
}: FetchLoginApiParams): Promise<FetchLoginApiResult> => {
  const requestBody = {
    email: email,
    password: password,
  };
  try {
    const response = await fetchUruApi("/api/auth/client/login", {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const responseBody: FetchLoginApiResponseBody = await response.json();

    if (response.status === 200) {
      return {
        status: 200,
        token: responseBody.token || "",
      };
    } else if (response.status === 401) {
      return {
        status: 401,
        message: "入力されたユーザが存在しないか、パスワードが間違っています。",
      };
    } else {
      return {
        status: 500,
        message: "不明なエラーが発生しました。",
      };
    }
  } catch (e) {
    return {
      status: 500,
      message: "不明なエラーが発生しました。",
    };
  }
};
