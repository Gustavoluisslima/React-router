import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home';
import { Product } from '../Pages/Product';
import { NotFound } from '../Pages/NotFound';
import { About } from "../Pages/About";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}