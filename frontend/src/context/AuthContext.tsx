import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  role: string;
  setRole: (r: string) => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState('ADMIN');
  return (
    <AuthContext.Provider value={{ role, setRole, userName: 'Elena Rostova (Lead AI Architect)' }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
