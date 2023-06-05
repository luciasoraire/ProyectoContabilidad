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
    const currentUserJSON = JSON.stringify(user);
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


          <li><a href="pages/contact.html" className="active">Nosotros</a></li>
          <li><a href="http://localhost:3000/novedades">New Arrivals</a></li>
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

      <main>

        <div className="section-container1">



          <div className="columns1 content1">

            <br />
            <br />

            <div className='videoaparato'>
              <video src={Video} autoPlay loop ></video>
            </div>
            <div className="content-container1">

              <h5 className="proximamente1">Próximamente</h5>
              <p className="texto1">
                En el mes de Julio ingresará un nuevo autorefratómetro, este es un instrumento que calcula la capacidad  de enfoque de sus ojos e indica un valor aproximado de su graduación. Se le pedirá que mire fijamente a través de dos lentes a una imagen, por ejemplo, un globo aerostático al final de una carretera larga y estrecha, y que se centre en la imagen.


                El autorefratómetro que entrará a Optique es el último modelo "Trazado de pupila 3D", será automático y avanzado de tipo Hartman. Una adquisición e identificación de imágenes de alta velocidad, con pantalla TFT de 8 pulgadas, admite rotación de 360 grados y giro de 180 grados. La medición inteligente 3D logra un enfoque automático y su impresora térmica incorporada tiene función de corte automático de papel.

                El refractómetro automático y el refracto-queratómetro es un instrumento de alta precisión de medición objetiva de los ojos del paciente con un sistema óptico único en el interior y un análisis y procesamiento de imágenes precisos en la tecnología Hartman. Se utiliza principalmente para medir la dioptría del paciente, incluida la potencia de la esfera, la potencia del cilindro, el eje óptico, la distancia de la pupila y la curvatura corneal, para proporcionar datos de referencia para el tratamiento de los ojos y la elección de anteojos.
              </p>
              <br></br>
              <button className='primero'>Solicitar turno</button>
            </div>

          </div>


        </div>

      </main>
      <hr />
      <br />

      <div className="section-container">

        <br />

        <img src={Negocio} alt="local" width="80%" className='negocio' />


        <div className="columns content">
          <div className="content-container">
            <h5 className="proximamenteUsual">¿Dónde nos encontramos?</h5>
            <br />
            <p className="textoubi">
              Inauguramos el nuevo local en Vera 859, Capital Federal, Buenos Aires.
            </p>
            <br />
            <p className="textoubi">También puedes encontrarnos en:</p>
            <p className="textoubi">25 de Mayo 464, San Miguel de Tucumán, Tucumán.</p>
            <p className="textoubi">
              Av. Alicia Moreau de Justo 390, Puerto Madero, Buenos Aires.
            </p>
            <p className="textoubi">Av. Colón 608, Ciudad de Córdoba, Córdoba.</p>
          </div>
        </div>
      </div>
      <br />
      <hr />
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