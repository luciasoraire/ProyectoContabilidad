const { Product } = require('../db')

const postNewProduct = async (name, image, stock) => {
    const newProduct = await Product.create({
        name,
        image,
        stock,
    })

    return newProduct
}

const getProducts = async() => {
    const products = await Product.findAll()
    return products
}

const getProduct = async(id) => {
    const product = await Product.findByPk(id)
    return product
}

const putProduct = async(id, cantidad) => {
    const product = await Product.findByPk(id)
    product.stock = product.stock - cantidad < 0 ? 0 : product.stock -= cantidad 
    
    const updatedProduct = await Product.update({stock: product.stock}, {
        where: {id}
    })
    return updatedProduct
}

module.exports = {
    postNewProduct,
    getProducts,
    getProduct,
    putProduct
}