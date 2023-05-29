import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './Products.module.css'

const Products = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/contabilidad')
            setProducts(response.data)
        }
        fetchData()
    }, [])

    const addToCart = (id, stock) => {
        const cart = JSON.parse(localStorage.getItem('carrito'));

        if (!cart.compras) return
        // Verificar si el producto ya está en el carrito
        const existingItem = cart.compras.find(item => item.id === id);

        if (existingItem) {
            // Si el producto ya está en el carrito, aumentar la cantidad
            if (existingItem.cantidad + 1 <= stock) {
                existingItem.cantidad += 1;
            }
        } else {
            // Si el producto no está en el carrito, agregarlo
            const newItem = {
                id: Number(id),
                cantidad: 1
            };
            cart.compras.push(newItem);
        }

        localStorage.setItem('carrito', JSON.stringify(cart));
    }

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                {
                   products.length !== 0 && products.map(product => {
                        return (
                            <div className={style.card} key={product.id}>
                                <h3>{product.name}</h3>
                                <img src={product.image} alt={product.name} />
                                <h4>${product.precio}</h4>
                                <h4>stock: {product.stock}</h4>
                                <button onClick={() => addToCart(product.id, product.stock)}>Agregar al carrito</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products