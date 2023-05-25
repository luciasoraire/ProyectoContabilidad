import { useState } from 'react'
import style from './Asientos.module.css'
const Asientos = () => {

    const [asientos, setAsientos] = useState([])

    const AgregarAsiento = () => {
        const nuevoAsiento = <div className={style.container}>
            <h3 className={style.fecha}>fecha</h3>
            <div className={style.info}>
                <input type="nombre" />
            </div>
            <div className={style.debe}>DEBE</div>
            <div className={style.haber}>HABER</div>
        </div>
        setAsientos([...asientos, nuevoAsiento])
    }

    return (
        <div className={style.firstContainer}>
            <button className={style.button} onClick={AgregarAsiento}>Agregar asiento</button>
            <div className={style.all}>
                {
                    asientos.map(asiento => asiento)
                }
            </div>
            <div className={style.container}>
                <h3 className={style.fecha}>fecha</h3>
                <div className={style.info}>
                    <input type="nombre" />
                </div>
                <div className={style.debe}>DEBE</div>
                <div className={style.haber}>HABER</div>
            </div>
        </div>
    )
}

export default Asientos