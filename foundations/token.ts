//実際はclientとworkerとadminで分ける
export const saveToken = (token: string) => {
  console.log(token);
  localStorage.setItem("token", token);
};

export const getToken = () => {
  try {
    return localStorage.getItem("token") || "";
  } catch (e) {
    return "";
  }
};
