import { useState } from 'react'
import style from './Asientos.module.css'
const Asientos = () => {

    const [asientos, setAsientos] = useState([])
    const [model, setModel] = useState({
        nombre: '',
        producto: ''
    })
    const [input, setInput] = useState([])

    const AgregarAsiento = () => {
        const nuevoAsiento = <div className={style.container}>
            <h3 className={style.fecha}>fecha</h3>
            <div className={style.info}>
                <h2>{model.nombre}</h2>
                <div>
                    <p>{model.producto}</p>
                </div>
            </div>
            <div className={style.debe}>DEBE</div>
            <div className={style.haber}>HABER</div>
        </div>
        setAsientos([...asientos, nuevoAsiento])
    }

    const onChangeHandler = (event) => {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        })
    }

    const addInput = () => {
        const producto = ''
        setInput([...input, producto])
    }

    return (
        <div className={style.firstContainer}>
            <button className={style.button} onClick={AgregarAsiento}>Agregar asiento</button>
            <div className={style.container}>
                <h3 className={style.fecha}>fecha</h3>
                <div className={style.info}>
                    <input type="text" name='nombre' onChange={onChangeHandler} value={model.nombre} />
                    <div>
                        {input.map((i, index) => {
                            return <input key={index} type="text" name='producto' onChange={onChangeHandler} value={model.producto} />
                        })}
                        <button onClick={addInput}>+</button>
                    </div>
                </div>
                <div className={style.debe}>DEBE</div>
                <div className={style.haber}>HABER</div>
            </div>
            <div className={style.all}>
                {
                    asientos.map(asiento => asiento)
                }
            </div>
        </div>
    )
}

export default Asientos