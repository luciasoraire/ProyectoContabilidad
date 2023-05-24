import { useEffect } from "react"
import { NavLink } from "react-router-dom"

const Login = () => {

    useEffect(() => {
        const crearLocalStorage = () => {
            const object = {
                factura: '',
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

    return(
        <div>
            <NavLink to='/products'><button>LOGIN</button></NavLink>
        </div>
    )
}

export default Login