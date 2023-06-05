import { useState } from 'react'
import style from './Asientos.module.css'
import Logo from '../../img/logonegrosinf.png'
import Button from 'react-bootstrap/Button';

import { BsCart4 } from "react-icons/bs";

const Asientos = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [asientos, setAsientos] = useState([])
    const [model, setModel] = useState({
        fecha: "",
        nombre: "",
        productoDebe: [],
        productoHaber: [],
        referencia: "",
        debe: [],
        haber: []
    })


    const AgregarAsiento = () => {
        const nuevoAsiento = <div className={style.container}>
            <p className={style.fecha}>{model.fecha}</p>
            <div className={style.info}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>{asientos.length + 1}</p>
                    </div>
                </div>
                <p className={style.p}>{model.nombre}</p>
                <div className={style.containerDebeYHaber} >
                    {
                        model.productoDebe.map(product => {
                            return <p className={style.p}>{product}</p>
                        })
                    }
                    <div className={style.productoHaber2}>
                        {
                            model.productoHaber.map(product => {
                                return <p className={style.pHaber}>{product}</p>
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className={style.p}>{model.referencia}</p>
                </div>
            </div>
            <div className={style.debe}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>Debe</p>
                    </div>
                </div>
                <div className={style.containerHaberP}>
                    {
                        model.debe.map(debe => {
                            return <p>${debe}</p>
                        })
                    }
                </div>
            </div>
            <div className={style.haber}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>Haber</p>
                    </div>
                </div>
                <div className={style.containerHaberP}>
                    {
                        model.haber.map(haber => {
                            return <p>${haber}</p>
                        })
                    }
                </div>
            </div>
        </div>
        setAsientos([...asientos, nuevoAsiento])
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setModel((prevState) => ({
            ...prevState,
            fecha: selectedDate
        }));
    };

    const onChangeHandler = (event) => {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        })
    }
    // -------- PRODUCTOS DEBE -----------------
    const agregarElemento = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            productoDebe: [...prevState.productoDebe, valor]
        }));

    };

    const handleInputChange = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.productoDebe];
            newArray[index] = valor;
            return { ...prevState, productoDebe: newArray };
        });
    };
    // --------------------------------------------

    // -------- PRODUCTOS HABER -----------------
    const agregarProductoHaber = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            productoHaber: [...prevState.productoHaber, valor]
        }));
    };

    const handleInputChangeProductoHaber = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.productoHaber];
            newArray[index] = valor;
            return { ...prevState, productoHaber: newArray };
        });
    };
    // --------------------------------------------


    // ------------- DEBE ------------------------

    const agregarDebe = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            debe: [...prevState.debe, valor]
        }));
    };

    const handleInputChangeDebe = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.debe];
            newArray[index] = valor;
            return { ...prevState, debe: newArray };
        });
    };
    //--------------------------------------------

    // ------------- Haber ------------------------

    const agregarHaber = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            haber: [...prevState.haber, valor]
        }));
    };

    const handleInputChangeHaber = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.haber];
            newArray[index] = valor;
            return { ...prevState, haber: newArray };
        });
    };
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

    //--------------------------------------------

    return (
        <div>
            <header>
                <div className="row">
                    <div className="square slide">
                        <img className="logo square rotate" src={Logo} alt="" />
                    </div>
                </div>
                <ul>
                    <li><a href="http://localhost:3000" >Inicio</a></li>
                    <li><a href="http://localhost:3000/products">Shop</a></li>


                    <li><a href="http://localhost:3000/nosotros">Nosotros</a></li>
                    <li><a href="http://localhost:3000/novedades">New Arrivals</a></li>
                    {currentUser.correo === "admin@gmail.com" && <li><a href="http://localhost:3000/asientos" className="active">Asientos</a></li>}

                    {currentUser.correo === "admin@gmail.com" && <li><a href="http://localhost:3000/createProduct">Crear producto</a></li>}

                    {currentUserJSON.correo && <li className="nav-item" id="navLogin">
                        <Button variant="primary" onClick={handleShow}>
                            Iniciar sesión
                        </Button>
                    </li>}
                    <li className="nav-item" id="navAdmin"></li>
                    <a href="http://localhost:3000/carrito" className='carrito'><BsCart4 /> </a>
                    <a href='http://localhost:3000/'><button onClick={cerrarSesion} className='salir'>Salir</button></a>
                </ul>
            </header>

            <div className={style.firstContainer}>
                <button className={style.button} onClick={AgregarAsiento}>Agregar asiento</button>
                <div className={style.containerModel}>
                    <div className={style.fecha}>
                        <h3>Fecha</h3>
                        <input type="date" value={model.fecha} onChange={handleDateChange} />
                    </div>
                    <div className={style.info}>
                        <input className={style.nombre} type="text" name='nombre' onChange={onChangeHandler} value={model.nombre} />
                        <div className={style.productoDebe}>
                            {
                                model.productoDebe.map((product, index) => {
                                    return <input
                                        key={index}
                                        type="text"
                                        name='producto'
                                        value={product}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                    />
                                })
                            }
                        </div>
                        <div className={style.productoHaber}>
                            {
                                model.productoHaber.map((product, index) => {
                                    return <input
                                        key={index}
                                        type="text"
                                        name='producto'
                                        value={product}
                                        onChange={(e) => handleInputChangeProductoHaber(index, e.target.value)}
                                    />
                                })
                            }
                        </div>
                        <div className={style.buttons}>
                            <button onClick={() => agregarElemento('')}>Debe</button>
                            <button onClick={() => agregarProductoHaber('')}>Haber</button>
                        </div>
                        <div className={style.referencia}>
                            <label>Referencia</label>
                            <input type="text" name='referencia' onChange={onChangeHandler} value={model.referencia} />
                        </div>
                    </div>
                    <div className={style.debe}>
                        <div className={style.numeroDeAsiento}>
                            <div className={style.numero}>
                                <p>Debe</p>
                            </div>
                        </div>
                        <div className={style.debeSecondDiv}>
                            {
                                model.debe.map((debe, index) => {
                                    return <input
                                        className={style.debeYhaber}
                                        key={index}
                                        type="text"
                                        name='debe'
                                        value={debe}
                                        onChange={(e) => handleInputChangeDebe(index, e.target.value)}
                                    />
                                })
                            }
                            <button onClick={() => agregarDebe('')} className={style.mas}>+</button>

                        </div>
                    </div>
                    <div className={style.haber}>
                        <div className={style.numeroDeAsiento}>
                            <div className={style.numero}>
                                <p>Haber</p>
                            </div>
                        </div>
                        <div>
                            {
                                model.haber.map((haber, index) => {
                                    return <input
                                        className={style.debeYhaber}
                                        key={index}
                                        type="text"
                                        name='debe'
                                        value={haber}
                                        onChange={(e) => handleInputChangeHaber(index, e.target.value)}
                                    />
                                })
                            }
                            <button onClick={() => agregarHaber('')} className={style.mas}>+</button>

                        </div>
                    </div>
                </div>
                <div className={style.all}>
                    {
                        asientos.map(asiento => asiento)
                    }
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
                        <p className="text-muted mb-0 py-2">© 2022 | Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Asientos