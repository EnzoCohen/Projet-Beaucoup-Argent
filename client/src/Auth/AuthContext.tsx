import {createContext, ReactNode, useContext, useState} from "react";

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const handleSetToken = (newToken: string | null) => {
        if (newToken) {
            localStorage.setItem('token', newToken);
        } else {
            localStorage.removeItem('token');
        }
        setToken(newToken);
    };

    return (
        <AuthContext.Provider value={{ token, setToken: handleSetToken }}>
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