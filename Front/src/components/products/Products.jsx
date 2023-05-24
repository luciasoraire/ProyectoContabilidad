import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/contabilidad')
            console.log(response.data);
            setProducts(response.data)
        }
        fetchData()
    }, [])

    const addToCart = (event) => {
        // Recuperar el carrito almacenado en el localStorage
        const cart = JSON.parse(localStorage.getItem('carrito')) || {};

        // Verificar si el producto ya está en el carrito
        const existingItem = cart.compras.find(item => item.id === event.target.name);

        if (existingItem) {
            // Si el producto ya está en el carrito, aumentar la cantidad
            existingItem.cantidad += 1;
        } else {
            // Si el producto no está en el carrito, agregarlo como un nuevo objeto
            const newItem = { 
                id: Number(event.target.name),
                cantidad: 1
             };
            cart.compras.push(newItem);
        }

        // Actualizar el carrito en el localStorage
        localStorage.setItem('carrito', JSON.stringify(cart));
    }

    return (
        <div className={style.container}>
            {
                products.map(product => {
                    return (
                        <div className={style.card} key={product.id}>
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} />
                            <h4>${product.precio}</h4>
                            <button>Comprar</button>
                            <button name={product.id} onClick={addToCart}>Agregar al carrito</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products