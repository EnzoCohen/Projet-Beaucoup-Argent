import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home.tsx";
import {Login} from "./Login.tsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}