import axios from 'axios'
import { useState } from 'react'
import style from './Select.module.css'


const Select = () => {

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

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <div className={style.containerButtons}>
                    <button name="RI" onClick={onClickHandler}>Responsable Inscripto</button>
                    <button name="MO" onClick={onClickHandler}>Monotributista</button>
                    <button name="CO" onClick={onClickHandler}>Consumir Final</button>
                </div>
                <div className={style.containerCliente}>
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
                <div className={style.containerButton}>
                    <button className={style.button} onClick={finCompra}>Finalizar compra</button>
                </div>
            </div>
        </div>
    )
}

export default Select