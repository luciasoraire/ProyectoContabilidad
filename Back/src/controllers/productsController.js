const { Product } = require('../db')
const { responsableInscripto } = require('../../util/pdfResponsableInscripto')
const { consumidorFinal } = require('../../util/pdfConsumidorFinal')

const postNewProduct = async (name, image, precio, stock) => {
    const newProduct = await Product.create({
        name,
        image,
        precio,
        stock
    })

    return newProduct
}

const getProducts = async () => {
    const products = await Product.findAll()
    return products
}

const getProduct = async (id) => {
    const product = await Product.findByPk(id)
    return product
}

const productsOnCart = async(compras) => {
    const productsIds = compras.map(compra => compra.id)
    const products = await Product.findAll({where: {id: productsIds}})
    return products
}

const putProduct = async (req, res) => {
    const { factura, compras } = req.body
    const productsIds = compras.map(compra => compra.id)

    const allProducts = await Product.findAll({where: {id: productsIds}})
    
    const productosParaPDF = []
    for (const compra of compras) {
        const product = await Product.findByPk(compra.id)
        product.stock = product.stock - compra.cantidad < 0 ? 0 : product.stock -= compra.cantidad

        await Product.update({ stock: product.stock }, {
            where: { id: compra.id }
        })
        allProducts.map(product => product.id === compra.id && productosParaPDF.push({
            name: product.name,
            cantidad: compra.cantidad,
            precio: product.precio
        }))
    }
    console.log(productosParaPDF);
    try {
       factura === 'RI' && await responsableInscripto(req, res, productosParaPDF) // Responsable inscripto
       factura === 'MO' && await responsableInscripto(req, res, productosParaPDF) // Monotributista
       factura === 'CO' && await consumidorFinal(req, res, productosParaPDF)       // Consumidor final
    } catch (error) {
        res.status(500).send('Error al generar el PDF');
    }
}

module.exports = {
    postNewProduct,
    getProducts,
    productsOnCart,
    getProduct,
    putProduct
}