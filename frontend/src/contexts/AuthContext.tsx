import { createContext, useContext } from 'react';

interface User {
  id: string;
  name: string;
  role: string;
}

interface AuthContextType {
  user: User;
  isAuthenticated: boolean;
}

// Create a demo user
const demoUser: User = {
  id: '1',
  name: 'Demo User',
  role: 'admin'
};

const AuthContext = createContext<AuthContextType>({
  user: demoUser,
  isAuthenticated: true
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <AuthContext.Provider
      value={{
        user: demoUser,
        isAuthenticated: true
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
