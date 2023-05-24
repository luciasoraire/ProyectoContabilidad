const { Product } = require('../db')
const { responsableInscripto } = require('../../util/pdfResponsableInscripto')
const { monotributista } = require('../../util/pdfMonotributista')

const postNewProduct = async (name, image, precio, stock) => {
    const newProduct = await Product.create({
        name,
        image,
        precio,
        stock,
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
       factura === 'RI' && await responsableInscripto(req, res, productosParaPDF);
       factura === 'MO' && await monotributista(req, res, productosParaPDF)
    } catch (error) {
        res.status(500).send('Error al generar el PDF');
    }
}

module.exports = {
    postNewProduct,
    getProducts,
    getProduct,
    putProduct
}