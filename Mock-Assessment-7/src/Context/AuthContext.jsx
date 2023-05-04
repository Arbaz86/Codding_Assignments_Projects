import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const loginUser = (tok) => {
    if (tok !== null) {
      setToken(tok);
      setIsAuth(true);
    } else {
      setIsAuth(false);
      setToken(null);
    }
  };

  const logoutUser = () => {
    setIsAuth(false);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
