import { useEffect, useState } from "react";
import { fetchUruApi } from "../foundations/api/fetchUruApi";

type User = {
  email: string;
  name: string;
};

const Top = () => {
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
  });
  useEffect(() => {
    const asyncFunc = async () => {
      const result = await fetchUruApi("https://localhost/api/user");
      if (result.status === 200) {
        const body = await result.json();
        setUser({
          email: body.email,
          name: body.name,
        });
      }
    };
    asyncFunc();
  }, []);
  return (
    <div>
      <div>ログイン成功後のページ</div>
      <div>{user.email}</div>
      <div>{user.name}</div>
    </div>
  );
};

export default Top;
