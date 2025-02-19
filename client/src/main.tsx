import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Page/Home.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./Page/Login.tsx";
import Register from "./Page/Register.tsx";
import Test from "./Page/Test.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)