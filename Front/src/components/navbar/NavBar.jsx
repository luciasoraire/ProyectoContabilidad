import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import { useEffect } from "react"

const NavBar = () => {

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
        <div className={style.container}>
            <div className={style.logo}>
                <h1>logo</h1>
            </div>
            <div className={style.buttons}>
                <NavLink to='/carrito'><button>Carrito</button></NavLink>
                <NavLink to='/products'><button>Productos</button></NavLink>
                {currentUser.correo === "admin@gmail.com" && <NavLink to='/asientos'><button>Asientos</button></NavLink>}
                <NavLink to='/'><button onClick={cerrarSesion}>Salir</button></NavLink>
            </div>
        </div>
    )
}

export default NavBar