import { ReactNode } from 'react';
import { useAuth } from './AuthContext.tsx';
import Login from '../Page/Login.tsx';

interface AdminRouteProps {
  children: ReactNode;
}

function getRoleFromToken(token: string): string | null {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role ?? null;
  } catch (e) {
    console.error('Invalid token', e);
    return null;
  }
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const { token } = useAuth();
  if (!token) return <Login />;
  const role = getRoleFromToken(token);
  if (role === 'admin') {
    return <>{children}</>;
  }
  return <Login />;
};

export default AdminRoute;
