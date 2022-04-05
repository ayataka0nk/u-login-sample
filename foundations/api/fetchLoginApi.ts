import { fetchUruApi } from "./fetchUruApi";

type FetchLoginApiParams = {
  email: string;
  password: string;
};
type FetchLoginApiResult =
  | {
      status: 200;
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
  const body = {
    email: email,
    password: password,
  };
  try {
    await fetchUruApi("https://localhost/sanctum/csrf-cookie");
    const response = await fetchUruApi("https://localhost/api/login", {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (response.status === 200) {
      return {
        status: 200,
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
