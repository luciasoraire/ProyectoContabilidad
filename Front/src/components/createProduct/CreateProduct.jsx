import { useState } from "react"
import style from "./style.css"
import axios from 'axios'
import Button from 'react-bootstrap/Button';

import { BsCart4 } from "react-icons/bs";
import Logo from '../../img/logonegrosinf.png'

const CreateProduct = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [product, setProduct] = useState({
    name: '',
    image: '',
    precio: 0,
    stock: 0
  })

  const onChangeHandler = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }


  const createProductHandler = async (e) => {
    e.preventDefault()
    const newProduct = await axios.post('http://localhost:3001/contabilidad', product)
    console.log(newProduct);
  }
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
    <div>
      <header>
        <div className="row">
          <div className="square slide">
            <img className="logo square rotate" src={Logo} alt="" />
          </div>
        </div>
        <ul>
          <li><a href="/" >Inicio</a></li>
          <li><a href="/products">Shop</a></li>


          <li><a href="/nosotros">Nosotros</a></li>
          <li><a href="/novedades">New Arrivals</a></li>
          {currentUser?.correo === "admin@gmail.com" && <li><a href="/asientos" >Asientos</a></li>}

          {currentUser?.correo === "admin@gmail.com" && <li><a href="/createProduct" className="active">Crear producto</a></li>}

          {currentUserJSON?.correo && <li className="nav-item" id="navLogin">
            <Button variant="primary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </li>}
          <li className="nav-item" id="navAdmin"></li>
          <a href="/carrito" className='carrito'><BsCart4 /> </a>
          {currentUser?.correo && <a href='/'><button onClick={cerrarSesion} className='salir'>Salir</button></a>}
        </ul>
      </header>

      <div className="container">

        <div className="secondContainer">
          <form onSubmit={createProductHandler}>
            <label htmlFor="">Nombre</label>
            <input type="text" name="name" onChange={onChangeHandler} value={product.name} required />
            <label htmlFor="">Imagen</label>
            <input type="text" name="image" onChange={onChangeHandler} value={product.image} required />
            <label htmlFor="">Precio</label>
            <input type="number" name="precio" onChange={onChangeHandler} value={product.precio} required />
            <label htmlFor="">Stock</label>
            <input type="number" name="stock" onChange={onChangeHandler} value={product.stock} required />
            <button type="submit" className="crear">Crear</button>
          </form>
        </div>
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
            <p className="text-muted mb-0 py-2">© 2023 | Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>

  )
}

export default CreateProduct