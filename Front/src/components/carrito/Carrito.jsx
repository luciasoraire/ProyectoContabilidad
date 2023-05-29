import axios from 'axios'
import style from './Carrito.module.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

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

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                {
                    carrito.length > 0 && carrito.map(producto => {
                        return (
                            <div className={style.card}>
                                <img className={style.image} src={producto.image} alt={producto.name} />
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
                <NavLink to='/select'><button>Tipo de factura</button></NavLink>
        </div>
    )
}

export default Carrito