const TOKEN_KEY = localStorage.getItem("user");

// export const login = () => {
//   localStorage.setItem(Token, "testlogin");
// };
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const isLogin = () => {
  if (TOKEN_KEY) {
    return true;
  }
  return false;
};
