import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, FloatingWhatsApp } from './components/SharedComponents';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { ProductsProvider } from './context/ProductsContext';
import './index.css';

const App = () => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoryId" element={<CategoryPage />} />
            <Route path="/produto/:productId" element={<ProductPage />} />
          </Routes>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </ProductsProvider>
  );
};

export default App;
