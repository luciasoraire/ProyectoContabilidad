import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Products from './components/products/Products';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import Carrito from './components/carrito/Carrito';
import Select from './components/selectFactura/Select';
import Asientos from './components/asientos/Asientos';
import CreateProduct from './components/createProduct/CreateProduct';
import Index from './components/index/Index';

function App() {

  const location = useLocation()

  return (
    <div>
        <Routes>
        <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/select" element={<Select />} />
          <Route path="/asientos" element={<Asientos />} />
          <Route path="/createProduct" element={<CreateProduct />}/>
        </Routes>
    </div>
  );
}

export default App;
