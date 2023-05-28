import { useState } from 'react'
import style from './Asientos.module.css'
const Asientos = () => {

    const [asientos, setAsientos] = useState([])
    const [model, setModel] = useState({
        fecha: "",
        nombre: "",
        productoDebe: [],
        productoHaber: [],
        referencia: "",
        debe: [],
        haber: []
    })


    const AgregarAsiento = () => {
        const nuevoAsiento = <div className={style.container}>
            <p className={style.fecha}>{model.fecha}</p>
            <div className={style.info}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>{asientos.length + 1}</p>
                    </div>
                </div>
                <p className={style.p}>{model.nombre}</p>
                <div className={style.containerDebeYHaber} >
                    {
                        model.productoDebe.map(product => {
                            return <p className={style.p}>{product}</p>
                        })
                    }
                    <div className={style.productoHaber2}>
                        {
                            model.productoHaber.map(product => {
                                return <p className={style.pHaber}>{product}</p>
                            })
                        }
                    </div>
                </div>
                <div>
                    <p className={style.p}>{model.referencia}</p>
                </div>
            </div>
            <div className={style.debe}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>Debe</p>
                    </div>
                </div>
                <div className={style.containerHaberP}>
                    {
                        model.debe.map(debe => {
                            return <p>${debe}</p>
                        })
                    }
                </div>
            </div>
            <div className={style.haber}>
                <div className={style.numeroDeAsiento}>
                    <div className={style.numero}>
                        <p>Haber</p>
                    </div>
                </div>
                <div className={style.containerHaberP}>
                    {
                        model.haber.map(haber => {
                            return <p>${haber}</p>
                        })
                    }
                </div>
            </div>
        </div>
        setAsientos([...asientos, nuevoAsiento])
    }

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setModel((prevState) => ({
            ...prevState,
            fecha: selectedDate
        }));
    };

    const onChangeHandler = (event) => {
        setModel({
            ...model,
            [event.target.name]: event.target.value
        })
    }
    // -------- PRODUCTOS DEBE -----------------
    const agregarElemento = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            productoDebe: [...prevState.productoDebe, valor]
        }));

    };

    const handleInputChange = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.productoDebe];
            newArray[index] = valor;
            return { ...prevState, productoDebe: newArray };
        });
    };
    // --------------------------------------------

    // -------- PRODUCTOS HABER -----------------
    const agregarProductoHaber = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            productoHaber: [...prevState.productoHaber, valor]
        }));
    };

    const handleInputChangeProductoHaber = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.productoHaber];
            newArray[index] = valor;
            return { ...prevState, productoHaber: newArray };
        });
    };
    // --------------------------------------------


    // ------------- DEBE ------------------------

    const agregarDebe = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            debe: [...prevState.debe, valor]
        }));
    };

    const handleInputChangeDebe = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.debe];
            newArray[index] = valor;
            return { ...prevState, debe: newArray };
        });
    };
    //--------------------------------------------

    // ------------- Haber ------------------------

    const agregarHaber = (valor) => {
        setModel((prevState) => ({
            ...prevState,
            haber: [...prevState.haber, valor]
        }));
    };

    const handleInputChangeHaber = (index, valor) => {
        setModel((prevState) => {
            const newArray = [...prevState.haber];
            newArray[index] = valor;
            return { ...prevState, haber: newArray };
        });
    };
    //--------------------------------------------

    return (
        <div className={style.firstContainer}>
            <button className={style.button} onClick={AgregarAsiento}>Agregar asiento</button>
            <div className={style.containerModel}>
                <div className={style.fecha}>
                    <h3>Fecha</h3>
                    <input type="date" value={model.fecha} onChange={handleDateChange} />
                </div>
                <div className={style.info}>
                    <input className={style.nombre} type="text" name='nombre' onChange={onChangeHandler} value={model.nombre} />
                    <div className={style.productoDebe}>
                        {
                            model.productoDebe.map((product, index) => {
                                return <input
                                    key={index}
                                    type="text"
                                    name='producto'
                                    value={product}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            })
                        }
                    </div>
                    <div className={style.productoHaber}>
                        {
                            model.productoHaber.map((product, index) => {
                                return <input
                                    key={index}
                                    type="text"
                                    name='producto'
                                    value={product}
                                    onChange={(e) => handleInputChangeProductoHaber(index, e.target.value)}
                                />
                            })
                        }
                    </div>
                    <div className={style.buttons}>
                        <button onClick={() => agregarElemento('')}>Debe</button>
                        <button onClick={() => agregarProductoHaber('')}>Haber</button>
                    </div>
                    <div className={style.referencia}>
                        <label>Referencia</label>
                        <input type="text" name='referencia' onChange={onChangeHandler} value={model.referencia} />
                    </div>
                </div>
                <div className={style.debe}>
                    <div className={style.numeroDeAsiento}>
                        <div className={style.numero}>
                            <p>Debe</p>
                        </div>
                    </div>
                    <div>
                        {
                            model.debe.map((debe, index) => {
                                return <input
                                    className={style.debeYhaber}
                                    key={index}
                                    type="text"
                                    name='debe'
                                    value={debe}
                                    onChange={(e) => handleInputChangeDebe(index, e.target.value)}
                                />
                            })
                        }
                        <button onClick={() => agregarDebe('')}>+</button>

                    </div>
                </div>
                <div className={style.haber}>
                    <div className={style.numeroDeAsiento}>
                        <div className={style.numero}>
                            <p>Haber</p>
                        </div>
                    </div>
                    <div>
                        {
                            model.haber.map((haber, index) => {
                                return <input
                                    className={style.debeYhaber}
                                    key={index}
                                    type="text"
                                    name='debe'
                                    value={haber}
                                    onChange={(e) => handleInputChangeHaber(index, e.target.value)}
                                />
                            })
                        }
                        <button onClick={() => agregarHaber('')}>+</button>

                    </div>
                </div>
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