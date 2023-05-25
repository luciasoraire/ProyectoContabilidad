const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');

const responsableInscripto = async (req, res, productosParaPDF) => {

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
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
      
          .container {
            width: 100%;
            height: 200px;
            display: table;
          }
      
          .left {
            padding: 15px;
            display: table-cell;
            width: 50%;
            border: 1px solid blue;
          }
      
          .right {
            display: table-cell;
            width: 50%;
            padding: 15px;
            vertical-align: top;
            text-align: right;
            
            border: 1px solid red;
          }

          .cliente {
            width: 100%;
            height: fit-content;
            border: 1px solid yellow;
            padding-left: 15px;
          }
          .items {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 20px;
          }
          .items th,
          .items td {
            border: 1px solid #000;
            padding: 8px;
          }
          .total {
            text-align: right;
            margin-top: 20px;
          }
          .factura {
            margin-left: 40%;
          }

          .fin {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h2 class="factura">Factura A</h2>
        <div class="container">
          <div class="left">
            <h3>MARCA</h3>
            <p>San Martin 145 - San Miguel de Tucuman</p>
            <p>marca@gmail.com</p>
            <p><span class="label">Tel:</span>3813545337</p>
            <p><span class="label">CUIT:</span>20450393312</p>
          </div>
          <div class="right">
            <img width="100px" src="https://i.pinimg.com/originals/30/8d/79/308d795c3cac0f8f16610f53df4e1005.jpg" />
            <p><span class="label">Nro de factura:</span>0001-0000002</p>
            <p><span class="label">Fecha:</span>${fechaFormateada}</p>
          </div>
        </div>
        <div class="cliente">
          <h3>Cliente</h3>
          <p><span class="label">Nombre:</span> Nombre del Cliente</p>
          <p><span class="label">CUIT:</span>20450393312</p>
          <p><span class="label">Direccion:</span> 23 de mayo de 2023</p>
          <p><span class="label">Condicion de pago:</span> C/C</p>
          <p><span class="label">Condicion ante IVA:</span> R.I</p>
        </div>
        <table class="items">
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Unidades</th>
              <th>Precio Unitario</th>
              <th>Precio</th>
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
        </table>
        <div class="total">
          <p class="fin"><span class="label">Total parcial:</span> - </p>
          <p class="fin"><span class="label">Descuento:</span> - </p>
          <p class="fin"><span class="label">Subtotal menos descuento:</span> - </p>
          <p class="fin"><span class="label">IVA:</span> - </p>
          <p class="fin"><span class="label">Total inpuestos:</span> - </p>
          <p class="fin"><span class="label">Envio:</span> - </p>
          <p class="fin"><span class="label">TOTAL FACTURA:</span> ${total}</p>
        </div>
      </body>
    </html>
  `;


  // Generar el PDF
  pdf.create(htmlContent).toBuffer((err, buffer) => {
    if (err) {
      console.error('Error al generar el PDF:', err);
      // Manejar el error
      return;
    }

    const directoryPath = path.join(__dirname);
    process.chdir(directoryPath);
    fs.writeFileSync('factura.pdf', buffer); // Guardar el PDF en el sistema de archivos
    process.chdir(__dirname);
    // Enviar la respuesta con el archivo PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.sendFile('factura.pdf', { root: directoryPath });
  });
}

module.exports = { responsableInscripto }