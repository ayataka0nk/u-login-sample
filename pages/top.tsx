import { useEffect, useState } from "react";
import { baseUrl } from "../foundations/api/constants";
import { fetchUruApi } from "../foundations/api/fetchUruApi";
import { fetchClientApi } from "../foundations/api/fetchClientApi";

type Client = {
  email: string;
};

const Top = () => {
  const [client, setClient] = useState<Client>({
    email: "",
  });
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await fetchClientApi();
      if (result.status === 200) {
        setClient({
          email: result.client.email,
        });
      }
    };
    asyncFunc();
  }, []);
  return (
    <div>
      <div>ログイン成功後のページ</div>
      <div>{client.email}</div>
    </div>
  );
};

export default Top;
