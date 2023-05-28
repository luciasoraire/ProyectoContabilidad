import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Products from './components/products/Products';
import Login from './components/login/Login';
import NavBar from './components/navbar/NavBar';
import Carrito from './components/carrito/Carrito';
import Select from './components/selectFactura/Select';
import Asientos from './components/asientos/Asientos';

function App() {

  const location = useLocation()

  return (
    <div>
        {location.pathname !== "/" && <NavBar />}
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/select" element={<Select />} />
          <Route path="/asientos" element={<Asientos />} />
        </Routes>
    </div>
  );
}

export default App;
