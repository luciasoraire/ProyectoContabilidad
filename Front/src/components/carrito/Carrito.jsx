import axios from 'axios'
import style from './style.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './../index/style.css'
import Logo from '../../img/logonegrosinf.png'
import { BsCart4 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const Carrito = () => {

    const [carrito, setCarrito] = useState([])

    const cart = JSON.parse(localStorage.getItem('carrito'))
    useEffect(() => {


        const fetchData = async () => {
            console.log(cart);
            const response = await axios.post('http://localhost:3001/contabilidad/carrito', cart)
            console.log(response.data);
            setCarrito(response.data)
        }
        fetchData()
    }, [])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const usuario = {
        correo: "",
        contraseña: ""
    }
    
    const cerrarSesion = () => {
        const currentUserJSON = JSON.stringify(usuario);
        localStorage.setItem('usuario', currentUserJSON);
    }
    const currentUserJSON = localStorage.getItem('usuario');
    const currentUser = JSON.parse(currentUserJSON);
    
  

    return (
        <div className='container'>
             <header>
             <div className="row">
          <div className="square slide">
            <img className="logo square rotate" src={Logo} alt="" />
          </div>
        </div>
        <ul>
          <li><a href="http://localhost:3000">Inicio</a></li>
          <li><a href="http://localhost:3000/products">Shop</a></li>
      
          
          <li><a href="pages/contact.html" className="active">Nosotros</a></li>
          <li><a href="http://localhost:3000/novedades">New Arrivals</a></li>
          {currentUser.correo === "admin@gmail.com" &&<li><a href="http://localhost:3000/asientos">Asientos</a></li>}

          {currentUser.correo === "admin@gmail.com" &&<li><a href="http://localhost:3000/createProduct">Crear producto</a></li>}
         
          <li className="nav-item" id="navLogin">
            <Button variant="primary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </li>
          <li className="nav-item" id="navAdmin"></li>
          <a href="http://localhost:3000/carrito" className='carrito'><BsCart4 /> </a>
          <a href='http://localhost:3000/'><button onClick={cerrarSesion} className='salir'>Salir</button></a>
        </ul>
      </header>
        <div className='primercontenedor'>
            <div className="segundocontenedor">
                {
                    carrito.length > 0 && carrito.map(producto => {
                        return (
                            <div className="card">
                                <img className="imagecarrito" src={producto.image} alt={producto.name} />
                                <h3>{producto.name}</h3>
                                <h4>${producto.precio}</h4>
                                {
                                    cart.compras.map(prod => prod.id == producto.id && <h4>Cantidad: {prod.cantidad}</h4>)
                                }

                            </div>
                        )
                    })
                }
            </div>
                <NavLink to='/select'><button className='factura'>Tipo de factura</button></NavLink>
        </div>
        <footer className="bg-white">
        <div className="container py-5">
          
          <div className="row py-4">
            
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Nosotros</h6>
              <p className="font-italic text-muted">Optique es la óptica y boutique de lentes más reconocida del país. Contamos con una gran variedad de armazones recetados y lentes de contacto. Especialista en Multifocales y altas graduaciones.</p>
              <ul className="list-inline mt-4">
                <li className="list-inline-item"><a href="#" target="_blank" title="github"><i className="bi bi-github"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="bi bi-facebook"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="bi bi-instagram"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="ubicación"><i className="bi bi-geo-alt-fill"></i></a></li>
                <li className="list-inline-item"><a href="#" target="_blank" title="telefono"><i className="bi bi-telephone-fill"></i></a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">Mujeres</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Hombres</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Unisex</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Niños</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2"><a href="#" className="text-muted">e-Mail</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Whatsapp</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Facebook</a></li>
                <li className="mb-2"><a href="#" className="text-muted">Instagram</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
              <p className="text-muted mb-4">Bienvenido a nuestro histórico de Newsletters, aquí puedes acceder a todos los números de nuestra revista digital.

                Si te gusta estar a la última en moda, tendencias, novedades de las marcas más prestigiosas y eventos relacionados con nuestras ópticas este es tu sitio.</p>
              <div className="p-1 rounded border">
                <div className="input-group">
                  <input type="email" placeholder="Ingrese su dirección de correo" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                  <div className="input-group-append">
                    <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-4">
          <div className="containerf text-center">
            <p className="text-muted mb-0 py-2">© 2022 | Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
        </div>
    )
}

export default Carrito