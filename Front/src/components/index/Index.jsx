import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../../img/video.mp4'
import Armazon1 from '../../img/armazon1.png'
import Armazon3 from '../../img/armazon3.png'
import Armazon2 from '../../img/armazon2.png'
import Armazon4 from '../../img/armazon4.png'
import Armazon5 from '../../img/armazon5.png'
import Negocio from '../../img/negocio.png'
import Logo from '../../img/logonegrosinf.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { BsCart4 } from "react-icons/bs";


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function changeImageSrc(anything) {
    document.querySelector('.anteojos').src = anything;
  }

  const pos = document.documentElement;
  pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.clientX + "px");
    pos.style.setProperty("--y", e.clientY + "px");
  });


  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const [usuario, setUsuario] = useState({
      correo: "",
      contraseña: ""
  })

  useEffect(() => {

      const crearLocalStorage = () => {
          const object = {
              factura: '',
              cliente: {},
              compras: []
          };

          const miArrayString = JSON.stringify(object);

          // Almaceno el array en el localstorage
          localStorage.setItem('carrito', miArrayString);
      };

      // Verifica si el localStorage ya existe
      if (!localStorage.getItem('carrito')) {
          crearLocalStorage();
      }
  }, [])

  const onChangeHandler = (event) => {
      setUsuario({
          ...usuario,
          [event.target.name]: event.target.value
      })
  }
  const saveUser = () => {
      if (usuario.correo && usuario.contraseña) {
          setAccess(true)

          const currentUserJSON = JSON.stringify(usuario);
          localStorage.setItem('usuario', currentUserJSON);
          
          navigate('/products')
      }
  }

  const user = {
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


    <div>
      <header>
        <div className="row">
          <div className="square slide">
            <img className="logo square rotate" src={Logo} alt="" />
          </div>
        </div>
        <ul>
          <li><a href="http://localhost:3000" className="active">Inicio</a></li>
          <li><a href="http://localhost:3000/products">Shop</a></li>
      
          
          <li><a href="http://localhost:3000/nosotros">Nosotros</a></li>
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

      <main>
        <article className="desenfoque">
          <div className="box">
            <h2>Sin Optique</h2>
          </div>
          <div className="box">
            <h2>Con Optique</h2>
          </div>
          <div className="circle"></div>
        </article>
       
        <section className="main">
          <div className="container" id="primercontainer">
            <div className="row">
              <div className="col-sm-12 col-md-6"></div>
            </div>
          </div>
        </section>

      
     
      </main>
      

      

      <div></div>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='headerform'>
          <Modal.Title className='yatienecuenta'>¿Ya tiene una cuenta?</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bienvenido'>
          <div className="form">
            <div className="formLogin">
                <input className='correo' type="text" name="correo" placeholder="Correo" onChange={onChangeHandler} value={usuario.correo} />
                <input className='contrasena' type="text" name="contraseña" placeholder="Contraseña" onChange={onChangeHandler} value={usuario.contraseña} />
                <button onClick={saveUser} className='iniciar'>Ingresar</button>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>

        
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;