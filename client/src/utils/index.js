const Token = localStorage.getItem("user");

// export const login = () => {
//   localStorage.setItem(Token, "testlogin");
// };
export const logout = () => {
  localStorage.removeItem(Token);
};
export const isLogin = () => {
  if (localStorage.getItem("token")) {
    return true;
  }
  return false;
};
