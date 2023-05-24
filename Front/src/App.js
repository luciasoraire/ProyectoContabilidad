import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products/Products';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import Carrito from './components/carrito/Carrito';
import Select from './components/selectFactura/Select';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
