#  Optique | Óptica & Boutique


<br>

> 
> *Este proyecto, desarrollado con React y PostgreSQL, fue asignado como trabajo final para el curso de Contabilidad en el segundo año de la carrera de Programación.*
> 
>*Optique es una empresa argentina especializada en la comercialización de lentes para visión y de sol, además de brindar servicios ópticos. Su denominación surge de la combinación de "óptica" y "boutique".*
<br>

> *Accedé a la demo del proyecto [aquí.](https://optiquecontabilidad.netlify.app)*
> 

<br>

### Requerimientos del proyecto

#### Estructura general del sitio

1. [Tienda:](https://optiquecontabilidad.netlify.app/products) esta página mostrará los productos que han sido previamente cargados por el administrador mediante la funcionalidad proporcionada en [crear producto](https://optiquecontabilidad.netlify.app/createProduct).

1. [Página de Asientos:](https://optiquecontabilidad.netlify.app/asientos) acá se te brinda la capacidad de registrar todos los asientos contables. Tendrás la posibilidad de ingresar la información correspondiente a los importes de debe y haber, junto con detalles adicionales como la referencia y la fecha asociada a cada asiento. La interfaz está diseñada de tal manera que facilita la organización y alineación precisa de estos registros, presentándolos de manera clara y ordenada, uno debajo del otro.

1. [Carrito:](https://optiquecontabilidad.netlify.app/carrito) en esta página, encontrarás un listado completo de los productos que hayas seleccionado para comprar. Además, tendrás la flexibilidad de elegir el tipo de factura que mejor se adapte a tu situación, ya sea como:

    - Responsable Inscripto
    - Monotributista
    - Consumidor final

   La plataforma te proporcionará campos de entrada para ingresar tu nombre, CUIT, localidad y dirección. También podrás seleccionar el método de pago, ya sea de contado, cuenta corriente o tarjeta.
Una vez completados estos detalles, al hacer clic, se generará una nueva pestaña con la factura que incluirá tus datos. Esta factura estará lista para descargar e imprimir, brindándote una experiencia conveniente y eficiente en la gestión de tus compras.

<br>

### Librerías utilizadas
- Bootstrap v5.0
- React Router

<br>

### Recursos utilizados
- Google Font (Playfair Display, Serif)
- Videos tomados de [Pexels](https://www.pexels.com/)

<br>

### Pasos para probar este proyecto
*Utiliza los siguientes comandos para descargar una copia del proyecto:*
1. Crea una carpeta
1. Dentro de la misma carpeta, haz clic derecho y selecciona "Abrir con" y elige "Git Bash".
1. Coloca:  `git clone https://github.com/luciasoraire/ProyectoContabilidad`
1. En PostgreSQL crea una base de datos con el nombre "contablidad".
1. Abre SQLShell y presiona Enter hasta que solicite la contraseña de PostgreSQL. 
1. Una vez que hayas abierto el código en Visual Studio Code, realiza clic derecho en la carpeta denominada "Front". En la terminal, introduce el comando `npm install` para instalar las dependencias necesarias. Posteriormente, ejecuta el comando `npm start` para iniciar la aplicación.
1. Asegúrate de seguir el mismo procedimiento para la carpeta "Back". 

*Recuerda editar la contraseña del archivo .env con la tuya.*

<br>

### ¿Cómo loguearse como admin?
1. Email: admin@gmail.com
1. Contraseña: 123

<br>

### Pruebe nuestra pagina
*Les dejamos una serie de productos para que usted mismo agregue. (Recuerde loguearse como administrador).*
1. Nombre: Renoir
1. Imagen: https://es.twigstore.com/cdn/shop/products/BNB02_1.png?v=1679323697&width=400
1. Precio: 58500
1. Stock: 41

<br>

### Autores
- [Mariano Torres](https://github.com/MarianoiTorres)
- [Lucía Soraire](https://github.com/luciasoraire)
