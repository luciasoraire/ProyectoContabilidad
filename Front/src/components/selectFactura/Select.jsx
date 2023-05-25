import axios from 'axios'

const Select = () => {
    const cart = JSON.parse(localStorage.getItem('carrito'))

    const onClickHandler = (event) => {

        cart.factura = event.target.name

        localStorage.setItem('carrito', JSON.stringify(cart))
    }

    const finCompra = async () => {
        console.log(cart);

            const response = await axios.put('http://localhost:3001/contabilidad', cart, {responseType: 'blob'});
            const fileURL = URL.createObjectURL(response.data);
            window.open(fileURL);
            localStorage.setItem('carrito', JSON.stringify({factura: '', compras: []}))
    }

    return (
        <div>
            <button name="RI" onClick={onClickHandler}>Responsable Inscripto</button>
            <button name="MO" onClick={onClickHandler}>Monotributista</button>
            <button name="CO" onClick={onClickHandler}>Consumir Final</button>
            <button onClick={finCompra}>Finalizar compra</button>
        </div>
    )
}

export default Select