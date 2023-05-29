import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Video from '../../img/video.mp4'
import Armazon1 from '../../img/armazon1.png'
import Armazon3 from '../../img/armazon3.png'
import Armazon2 from '../../img/armazon2.png'
import Armazon4 from '../../img/armazon4.png'
import Armazon5 from '../../img/armazon5.png'
import Negocio from '../../img/negocio.png'
import Logo from '../../img/logonegrosinf.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react"


function App() {
    
    function Example() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    }

    function changeImageSrc(anything){
        document.querySelector('.anteojos').src = anything;
      }
    
          const pos = document.documentElement;
          pos.addEventListener("mousemove", (e) => {
            pos.style.setProperty("--x", e.clientX + "px");
            pos.style.setProperty("--y", e.clientY + "px");
          });
          

          
    
    return (

  
    <div>
      <header>
        <div className="row">
          <div className="square slide">
            <img className="logo square rotate" src={Logo} alt="" />
          </div>
        </div>
        <ul>
          <li><a href="index.html" className="active">Inicio</a></li>
          <li><a href="pages/shop.html">Shop</a></li>
          <li><a href="pages/questions.html">Preguntas</a></li>
          <li><a href="pages/contact.html">Contacto</a></li>
          <li className="nav-item" id="navLogin">
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>
          </li>
          <li className="nav-item" id="navAdmin"></li>
        </ul>
      </header>

      <main>
        <article className="desenfoque">
          <div className="box">
            <h2>Sin Optique</h2>
          </div>
          <div className="box">
            <h2>Con Optique</h2>
          </div>
          <div className="circle"></div>
        </article>
        <video src={Video} autoPlay loop className="videoFondo"></video>
        <section className="main">
          <div className="container" id="primercontainer">
            <div className="row">
              <div className="col-sm-12 col-md-6"></div>
            </div>
          </div>
        </section>

        <div className="section-container">
          <div className="columns image">
            <video src="img/pexels-pavel-danilyuk-5995137.mp4" width="90%" autoPlay loop></video>
          </div>

          <div className="columns content">
            <br />
            <br />
            <div className="content-container">
              <h5 className="proximamente">Próximamente</h5>
              <p className="texto">
                En el mes de Diciembre ingresará un nuevo autorefratómetro, este es un instrumento que calcula la capacidad
                de enfoque de sus ojos e indica un valor aproximado de su graduación. Se le pedirá que mire fijamente a través
                de dos lentes a una imagen, por ejemplo, un globo aerostático al final de una carretera larga y estrecha, y
                que se centre en la imagen.
              </p>
              <p className="texto">
                El autorefratómetro que entrará a Optique es el último modelo "Trazado de pupila 3D", será automático y
                avanzado de tipo Hartman. Una adquisición e identificación de imágenes de alta velocidad, con pantalla TFT de
                8 pulgadas, admite rotación de 360 grados y giro de 180 grados. La medición inteligente 3D logra un enfoque
                automático y su impresora térmica incorporada tiene función de corte automático de papel.
              </p>
              <p className="texto">
                El refractómetro automático y el refracto-queratómetro es un instrumento de alta precisión de medición objetiva
                de los ojos del paciente con un sistema óptico único en el interior y un análisis y procesamiento de imágenes
                precisos en la tecnología Hartman. Se utiliza principalmente para medir la dioptría del paciente, incluida la
                potencia de la esfera, la potencia del cilindro, el eje óptico, la distancia de la pupila y la curvatura
                corneal, para proporcionar datos de referencia para el tratamiento de los ojos y la elección de anteojos.
              </p>
            </div>
          </div>
        </div>
      </main>
      <hr />
      <br />
      <div className="section-container">
        <div className="columns content">
          <div className="content-container">
            <h5 className="proximamenteusual">Armazón USUAL</h5>
            <p className="texto">
              USUAL ofrece un nuevo modelo de lente flexible en 5 diferentes tonos; blanco, gris, negro, amarillo y rojo.
              Estos marcos son 100% resistentes y flexibles, realizados con material inalterable, termodormable y colores
              perdurables con el tiempo.
            </p>
            <p className="texto">
              Los anteojos vienen en talle S, M y M. Las medidas del talle S son de 49 a 52 mm, las del M se encuentran entre
              53 a 56 mm y los mas grandes de 57 a 59 mm, esto quiere decir que pueden usarlos tanto niños como adultos.
            </p>
            <p className="texto">
              El armazón no incluye el lente, por lo que al hacer tu compra de forma presencial debes traer la receta con la
              graduación para realizarte un presupuesto.
            </p>
            <p className="texto">
              Puedes agregarle cristales unifocales o monofocales, de relax, bifocales, progresivos o multifocales,
              ocupacionales. Y eso no es todo ¿Querés saber la mejor parte? Podes agregarle lentes polarizados en una amplia
              variedad de tonos, negro, gris, amarillo, celeste, rojo, degradado, todos estos contienen un filtro especial que
              bloquea la luz reflejada y sólo deja pasar la luz útil, permitiendo una visión sin reflejos y con un color y
              contraste naturales.
            </p>
          </div>
        </div>
        <div className="columns image">
          <div className="containerc">
            <ul className="thumb">
              <li onMouseOver={() => changeImageSrc(Armazon1)}><img src={Armazon1} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon2)}><img src={Armazon2} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon3)}><img src={Armazon3} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon4)}><img src={Armazon4} alt="" /></li>
              <li onMouseOver={() => changeImageSrc(Armazon5)}><img src={Armazon5} alt="" /></li>
            </ul>
            <div className="imgBox">
              <h2>OPD-008</h2>
              <img src={Armazon1} className="anteojos" alt="" />
              <ul className="size">
                <span>Size</span>
                <li>S</li>
                <li>M</li>
                <li>L</li>
              </ul>
              <a href="#" className="btn">Ver más</a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <div className="section-container">
        <div className="columns image">
          <br />
          <img src={Negocio} alt="local" width="80%" />
        </div>
        <div className="columns content">
          <div className="content-container">
            <h5 className="proximamente">¿Dónde nos encontramos?</h5>
            <br />
            <p className="texto">
              Inauguramos el nuevo local en Vera 859, Capital Federal, Buenos Aires.
            </p>
            <br />
            <p className="texto">También puedes encontrarnos en:</p>
            <p className="texto">25 de Mayo 464, San Miguel de Tucumán, Tucumán.</p>
            <p className="texto">
              Av. Alicia Moreau de Justo 390, Puerto Madero, Buenos Aires.
            </p>
            <p className="texto">Av. Colón 608, Ciudad de Córdoba, Córdoba.</p>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div></div>
      <footer className="bg-white">
      <div className="container py-5">
        <div className="row py-4">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <p className="font-italic text-muted">Optique es la óptica y boutique de lentes más reconocida del país. Contamos con una gran variedad de armazones recetados y lentes de contacto. Especialista en Multifocales y altas graduaciones.</p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item"><a href="#" target="_blank" title="github"><i className="bi bi-github"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="facebook"><i className="bi bi-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="instagram"><i className="bi bi-instagram"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="ubicación"><i className="bi bi-geo-alt-fill"></i></a></li>
              <li className="list-inline-item"><a href="#" target="_blank" title="telefono"><i className="bi bi-telephone-fill"></i></a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#" className="text-muted">Mujeres</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Hombres</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Unisex</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Niños</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2"><a href="#" className="text-muted">e-Mail</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Whatsapp</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-muted">Instagram</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0">
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">Bienvenido a nuestro histórico de Newsletters, aquí puedes acceder a todos los números de nuestra revista digital.
  
              Si te gusta estar a la última en moda, tendencias, novedades de las marcas más prestigiosas y eventos relacionados con nuestras ópticas este es tu sitio.</p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input type="email" placeholder="Ingrese su dirección de correo" aria-describedby="button-addon1" className="form-control border-0 shadow-0" />
                <div className="input-group-append">
                  <button id="button-addon1" type="submit" className="btn btn-link"><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="bg-light py-4">
        <div className="containerf text-center">
          <p className="text-muted mb-0 py-2">© 2022 | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}

export default App;