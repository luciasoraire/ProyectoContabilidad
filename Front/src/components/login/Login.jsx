import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import style from "./Login.module.css"
const Login = () => {

    const navigate = useNavigate()
    const [access, setAccess] = useState(false)
    const [usuario, setUsuario] = useState({
        correo: "",
        contraseña: ""
    })

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



    return (
        <div className={style.container}>
            <div className={style.containerLogin}>
                <input type="text" name="correo" placeholder="Correo" onChange={onChangeHandler} value={usuario.correo} />
                <input type="password" name="contraseña" placeholder="Contraseña" onChange={onChangeHandler} value={usuario.contraseña} />
                <button onClick={saveUser}>LOGIN</button>
            </div>
        </div>
    )
}

export default Login