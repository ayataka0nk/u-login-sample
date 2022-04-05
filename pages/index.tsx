import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { fetchLoginApi } from "../hooks/api/fetchLoginApi";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const onLoginButtonClick = async () => {
    const result = await fetchLoginApi({ email, password });
    if (result.status === 200) {
      router.push("/top");
    } else {
      setError(result.message);
    }
  };
  return (
    <div>
      <div>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        {
          //本番ではtype='password'
        }
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={onLoginButtonClick}>ログイン</button>
      </div>
      {error !== "" && <div>{error}</div>}
    </div>
  );
};

export default Home;
