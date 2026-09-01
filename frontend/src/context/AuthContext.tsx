import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  role: string;
  setRole: (r: string) => void;
  engineerName: string;
  team: string;
  cluster: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState('AI_ENGINEER');
  return (
    <AuthContext.Provider value={{
      role,
      setRole,
      engineerName: 'Elena Rostova (Lead AI Architect)',
      team: 'Foundation Models & Swarm Engineering',
      cluster: '4x NVIDIA H100 SXM5 (Cluster 01)'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const c = useContext(AuthContext);
  if (!c) throw new Error('useAuth error');
  return c;
};
