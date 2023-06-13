import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Video from '../../img/5.mp4'
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


function Novedades() {

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
          <li><a href="http://localhost:3000">Inicio</a></li>
          <li><a href="http://localhost:3000/products">Shop</a></li>


          <li><a href="http://localhost:3000/nosotros" >Nosotros</a></li>
          <li><a href="http://localhost:3000/novedades" className="active">New Arrivals</a></li>
          {currentUser?.correo === "admin@gmail.com" && <li><a href="http://localhost:3000/asientos">Asientos</a></li>}

          {currentUser?.correo === "admin@gmail.com" && <li><a href="http://localhost:3000/createProduct">Crear producto</a></li>}

          {currentUserJSON?.correo && <li className="nav-item" id="navLogin">
            <Button variant="primary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </li>}
          <li className="nav-item" id="navAdmin"></li>
          <a href="http://localhost:3000/carrito" className='carrito'><BsCart4 /> </a>
          {currentUser?.correo && <a href='http://localhost:3000/'><button onClick={cerrarSesion} className='salir'>Salir</button></a>}
        </ul>
      </header>

      <div className='videoaparato'>
        <video src={Video} autoPlay loop ></video>
      </div>
      <div className="section-container1">
        <div className="columns1 content1">
          <div className="content-container1">
            <h5 className="proximamente1">Armazón Reef</h5>
            <p className="texto1">
              REEF ofrece un nuevo modelo de lente flexible en 5 diferentes tonos; blanco, gris, verde, bordó y celeste.
              Podes encargarlos para sol o graduados, estos han sido desarrollados para proteger los ojos de los efectos nocivos y desagradables de los rayos solares.
              Ofreciendo protección UV de acuerdo con las principales Normas Internacionales. Las lentes Reef de sol absorben el 100% de los rayos ultravioletas, poseen una alta calidad optica y son resistentes a los impactos.
              Estos marcos son 100% resistentes y flexibles, realizados con material inalterable, termodormable y colores
              perdurables con el tiempo.


              Los anteojos vienen en talle S, M y L. Las medidas del talle S son de 49 a 52 mm, las del M se encuentran entre
              53 a 56 mm y los mas grandes de 57 a 59 mm, esto quiere decir que pueden usarlos tanto niños como adultos.
              <br></br>
              <br></br>
              El armazón no incluye el lente, por lo que al hacer tu compra de forma presencial debes traer la receta con la
              graduación para realizarte un presupuesto.

              Puedes agregarle cristales unifocales o monofocales, de relax, bifocales, progresivos o multifocales,
              ocupacionales. Y eso no es todo ¿Querés saber la mejor parte? Podes agregarle lentes polarizados en una amplia
              variedad de tonos degradados todos estos contienen un filtro especial que
              bloquea la luz reflejada y sólo deja pasar la luz útil, permitiendo una visión sin reflejos y con un color y
              contraste naturales.

            </p>
            <br />
            <button className='primero'>Ver más</button>

          </div>
          <hr></hr>
        </div>

        <div className="columns image">
          <div className="containerc">
            <ul className="thumb">
              <li onMouseOver={() => changeImageSrc(Armazon1)}><img src={Armazon1} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon2)}><img src={Armazon2} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon3)}><img src={Armazon3} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon4)}><img src={Armazon4} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon5)}><img src={Armazon5} alt="" /></li>
            </ul>
            <div className="imgBox">

              <img src={Armazon1} className="anteojos" alt="" />
              <ul className="size">
                <span>Size</span>
                <li>S</li>
                <li>M</li>
                <li>L</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />

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
            <p className="text-muted mb-0 py-2">© 2023 | Todos los derechos reservados.</p>
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

export default Novedades;