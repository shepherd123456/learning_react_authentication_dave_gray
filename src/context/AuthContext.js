const { createContext, useState, useContext } = require("react");

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{
      auth,
      setAuth
    }}>
      {children}
    </AuthContext.Provider>
  )
}