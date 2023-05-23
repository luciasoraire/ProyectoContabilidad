const { Product } = require('../db')

const postNewProduct = async (name, image, stock) => {
    const newProduct = await Product.create({
        name,
        image,
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

const putProduct = async (compras) => {
    console.log(compras);
    for (const compra of compras) {
        console.log(compra);
        const product = await Product.findByPk(compra.id)
        console.log(product.stock);
        product.stock = product.stock - compra.cantidad < 0 ? 0 : product.stock -= compra.cantidad
        console.log(product.stock);

        const updatedProduct = await Product.update({ stock: product.stock }, {
            where: { id: compra.id }
        })

        console.log(updatedProduct);
    }
}

module.exports = {
    postNewProduct,
    getProducts,
    getProduct,
    putProduct
}