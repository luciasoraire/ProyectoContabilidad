import { useState } from "react"
import style from "./CreateProduct.module.css"
import axios from 'axios'

const CreateProduct = () => {

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


    const createProductHandler = async(e) => {
        e.preventDefault()
        const newProduct = await axios.post('http://localhost:3001/contabilidad', product)
        console.log(newProduct);
    }

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <form onSubmit={createProductHandler}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="name" onChange={onChangeHandler} value={product.name} required/>
                    <label htmlFor="">Imagen</label>
                    <input type="text" name="image" onChange={onChangeHandler} value={product.image} required/>
                    <label htmlFor="">Precio</label>
                    <input type="number" name="precio" onChange={onChangeHandler} value={product.precio} required/>
                    <label htmlFor="">Stock</label>
                    <input type="number" name="stock" onChange={onChangeHandler} value={product.stock} required/>
                    <button type="submit">Crear</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct