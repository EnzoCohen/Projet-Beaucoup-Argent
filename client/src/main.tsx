import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Page/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Page/Login.tsx";
import Register from "./Page/Register.tsx";
import Test from "./Page/Test.tsx";
import { Tech } from './Page/Tech.tsx'
import ProtectedRoute from "./Auth/ProtectedRoute.tsx";
import {AuthProvider} from "./Auth/AuthContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/tech" element={<Tech />} />
                    <Route path="/test" element={<ProtectedRoute> <Test /> </ProtectedRoute> } />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
     </StrictMode>,
)
