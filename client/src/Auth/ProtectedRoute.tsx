import { ReactNode } from 'react';
import { useAuth } from './AuthContext.tsx';
import Login from "../Page/Login.tsx";

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { token } = useAuth();
    console.log(token);
    return <>{token ? children:<Login></Login>}</>;
};

export default ProtectedRoute;