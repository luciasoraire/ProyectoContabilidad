import axios from 'axios'
import { useState } from 'react'
import style from './style.css'
import Logo from '../../img/logonegrosinf.png'
import { BsCart4 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const Select = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [cliente, setCliente] = useState({
        nombre: "",
        cuit: "",
        direccion: "",
        localidad: "",
        pago: ""
    })

    const cart = JSON.parse(localStorage.getItem('carrito'))

    const onClickHandler = (event) => {

        cart.factura = event.target.name

        localStorage.setItem('carrito', JSON.stringify(cart))
    }

    const finCompra = async () => {
        cart.cliente = cliente
        console.log(cart);
        const response = await axios.put('http://localhost:3001/contabilidad', cart, { responseType: 'blob' });
        const fileURL = URL.createObjectURL(response.data);
        window.open(fileURL);
        localStorage.setItem('carrito', JSON.stringify({ factura: '', compras: [] }))
    }

    const onChangeHandler = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
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
          <li><a href="http://localhost:3000">Inicio</a></li>
          <li><a href="http://localhost:3000/products">Shop</a></li>
      
          
          <li><a href="pages/contact.html" className="active">Nosotros</a></li>
          <li><a href="http://localhost:3000/novedades">New Arrivals</a></li>
          {currentUser?.correo === "admin@gmail.com" &&<li><a href="http://localhost:3000/asientos">Asientos</a></li>}

          {currentUser?.correo === "admin@gmail.com" &&<li><a href="http://localhost:3000/createProduct">Crear producto</a></li>}
         
          <li className="nav-item" id="navLogin">
            <Button variant="primary" onClick={handleShow}>
              Iniciar sesión
            </Button>
          </li>
          <li className="nav-item" id="navAdmin"></li>
          <a href="http://localhost:3000/carrito" className='carrito'><BsCart4 /> </a>
          {currentUser?.correo && <a href='http://localhost:3000/'><button onClick={cerrarSesion} className='salir'>Salir</button></a>}
        </ul>
      </header>
            <div className="secondContainer">
                <div className="containerCliente">
                    <button className='buttonsDiv' name="RI" onClick={onClickHandler}>Responsable Inscripto</button>
                    <button className='buttonsDiv' name="MO" onClick={onClickHandler}>Monotributista</button>
                    <button className='buttonsDiv' name="CO" onClick={onClickHandler}>Consumidor Final</button>
                </div>
                <div className="containerCliente">
                    <div>
                        <input className={style.input} placeholder='Nombre' type="text" name='nombre' onChange={onChangeHandler} />
                        <input className={style.input} placeholder='Cuit' type="text" name='cuit' onChange={onChangeHandler} />
                        <input className={style.input} placeholder='Localidad' type="text" name='localidad' onChange={onChangeHandler} />
                        <input className={style.input} placeholder='Direccion' type="text" name='direccion' onChange={onChangeHandler} />
                        <select className={style.select} name="pago" onChange={onChangeHandler}>
                            <option value='contado' >Contado</option>
                            <option value='cc' >Cuenta corriente</option>
                            <option value='tarjeta'>Tarjeta</option>
                        </select>
                    </div>
                </div>
                <div className="containerButton">
                    <button className="finalizar" onClick={finCompra}>Finalizar compra</button>
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

export default Select