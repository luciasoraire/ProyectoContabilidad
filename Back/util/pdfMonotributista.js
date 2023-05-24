const fs = require('fs');
const pdf = require('html-pdf');

const monotributista = async (req, res, productosParaPDF) => {

  const arrayPrecios = productosParaPDF.map(producto => producto.cantidad * producto.precio)
  const total = arrayPrecios.reduce((acum, current) => {
    return acum + current
  }, 0)

  const fecha = new Date()

  const opcionesFecha = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const fechaFormateada = fecha.toLocaleDateString(undefined, opcionesFecha);

  const htmlContent = `
    <html>
      <head>
        <style>
        .primerContenedor {
          width: 95%;
          overflow: auto;
          margin: 0 auto;
        }
      
        .container {
          width: 100%;
          overflow: auto;
          padding: 0;
        }
        .box1 {
          float: left;
          width: 32%;
          height: 240px;
          border: 1px solid black;
        }
        .box2 {
          float: left;
          width: 6%;
          height: 60px;
          border: 1px solid black;
        }
         
        .box3 {
          float: left;
          width: 59%;
          height: 60px;
          border: 1px solid black;
          margin: auto 0;
        }
        .box4 {
          float: left;
          width: 32.5%;
          height: 60px;
          border: 1px solid black;
        }
        .box5 {
          float: left;
          width: 32.5%;
          height: 60px;
          border: 1px solid black;
        }
        .box6 {
          float: left;
          width: 65.3%;
          height: 115px;
          border: 1px solid black;
        }
      
        .box7 {
          margin-top: 24%;
          width: 100%;
          height: 27px;
          border: 1px solid black;
        }
      
        .cliente {
          border: 1px solid black;
          width: 97.5%;
          height: fit-content;
        }
      
        .IVA {
          width: 100%;
          overflow: auto;  
        }
      
        .IVA1 {
          float: left;
          width: 6%;
          height: 60px;
          border: 1px solid black;
        }
        .IVA2 {
          float: left;
          width: 60%;
          height: 60px;
          border: 1px solid black;
        }
        .IVA3 {
          float: left;
          width: 31%;
          height: 60px;
          border: 1px solid black;
        }
      
        .condiciones1 {
          float: left;
          width: 18%;
          height: 60px;
          border: 1px solid black;
        }
      
        .p {
          padding-left: 5px;
        }

        .condiciones2 {
          float: left;
          width: 38%;
          height: 60px;
          border: 1px solid black;
        }
      
        .condiciones3 {
          float: left;
          width: 41%;
          height: 60px;
          border: 1px solid black;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }
      
        th, td {
          border: 1px solid black;
          padding: 8px;
        }
      
        thead {
          background-color: #f2f2f2;
        }
      
        tfoot {
          font-weight: bold;
        }

        .cantidad1 {
          width: 5px;
        }

        table {
          width: 97.7%;
        }
        </style>
      </head>
      <body>
      <div class="primerContenedor">
      <div class="container">
        <div class="box1">
          <h2 class="p">MARCA</h2>
          <p class="p">San Martin 145 - SMT</p>
          <p class="p">marca@gmail.com</p>
          <p class="p">Tel: 3813545337</p>
          <div class="box7">CONTRIBUYENTE</div>
        </div>
        <div class="box2"><h1>B</h1></div>
        <div class="box3">Nro 00000011100000</div>
        <div class="box4">Factura</div>
        <div class="box5">Fecha: ${fechaFormateada}</div>
        <div class="box6">
          <p>CUIT: 20450593312</p>
          <p>Ing Brutos: asdadasjdas</p>
          <p>Inic. De Actividades: fecha</p>
        </div>
      </div>
      <div class="cliente">
      <p>Señor(es): nombre</p>
      <p>Localidad: San Miguen De Tucuman</p>
      <p>Domicilio: General Paz 120</p>
    </div>
    <div class="IVA">
      <div class="IVA1">IVA</div>
      <div class="IVA2">
        <label for="myCheckbox">Resp. Inscripto</label>
        <input type="checkbox" id="myCheckbox"/>
        <label for="myCheckbox">No Resp</label>
        <input type="checkbox" id="myCheckbox"/>
        <label for="myCheckbox">Mono. Socia</label>
        <input type="checkbox" id="myCheckbox"/>
        <label for="myCheckbox">Exento</label>
        <input type="checkbox" id="myCheckbox"/>
        <label for="myCheckbox">Resp. Mono</label>
        <input type="checkbox" id="myCheckbox"/>
        <label for="myCheckbox">Cons. Final</label>
        <input type="checkbox" id="myCheckbox" checked/>
      </div>
      <div class="IVA3">CUIT</div>
    </div>
    <div class="IVA">
    <div class="condiciones1">
      Condiciones de venta
    </div>
    <div class="condiciones2">
      <label for="myCheckbox">Contado</label>
      <input type="checkbox" id="myCheckbox" checked />
      <label for="myCheckbox">C/C</label>
      <input type="checkbox" id="myCheckbox" />
      <label for="myCheckbox">Tarjeta</label>
      <input type="checkbox" id="myCheckbox" />
    </div>
    <div class="condiciones3">
      Remiro nro
    </div>
  </div>
  <table>
  <thead>
    <tr>
      <th class="cantidad1">Cantidad</th>
      <th>Descripción</th>
      <th class="cantidad1">Precio Unitario</th>
      <th>Importe</th>
    </tr>
  </thead>
  <tbody>
  ${productosParaPDF.map(producto => `
  <tr>
    <td>${producto.name}</td>
    <td>${producto.cantidad}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad * producto.precio}</td>
  </tr>
`)}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total:</td>
      <td>${total}</td>
    </tr>
  </tfoot>
</table>
</div>
      </body>
    </html>
  `;

  // Opciones de configuración para html-pdf
  const options = {
    format: 'A4',
    border: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  };

  // Generar el PDF
  pdf.create(htmlContent, options).toStream((error, stream) => {
    if (error) {
      console.error('Error al generar el PDF:', error);
      res.status(500).send('Error al generar el PDF');
      return;
    }

    // Establecer el encabezado de respuesta para abrir el PDF en el navegador
    res.setHeader('Content-Disposition', 'inline; filename=factura.pdf');
    res.setHeader('Content-Type', 'application/pdf');

    // Pipe el flujo del PDF a la respuesta
    stream.pipe(res);
  });
}

module.exports = { monotributista }