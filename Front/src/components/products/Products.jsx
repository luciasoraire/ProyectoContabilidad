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