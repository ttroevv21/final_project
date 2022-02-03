import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import AdminPanel from "./pages/AdminPanel";
import CartPage from "./pages/CartPage";
import DemoComponents from "./pages/DemoComponents";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import AuthProvider from "./contexts/AuthProvider";
import AdminProvider from "./contexts/AdminProvider";
import ClientProvider from "./contexts/ClientProvider";
import FaceCareProductsPage from "./pages/FaceCareProductsPage";
import MakeUpProductsPage from "./pages/MakeUpProductsPage";
import MyFooter from "./components/MyFooter";

const MyRoutes = () => {
  return (
    <AuthProvider>
      <AdminProvider>
        <ClientProvider>
          <BrowserRouter>
            <MyNavbar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/demo" element={<DemoComponents />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/faceCare" element={<FaceCareProductsPage />} />
              <Route path="/makeUp" element={<MakeUpProductsPage />} />
            </Routes>
            <MyFooter />
          </BrowserRouter>
        </ClientProvider>
      </AdminProvider>
    </AuthProvider>
  );
};

export default MyRoutes;
