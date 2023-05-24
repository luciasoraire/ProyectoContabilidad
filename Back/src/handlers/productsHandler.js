const { postNewProduct, getProducts, getProduct, putProduct, productsOnCart } = require('../controllers/productsController')

// Traer todos los productos
const getAllProducts = async (req, res) => {
    try {
        const allProducts = await getProducts()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(400).jsin({ error: error.message })
    }
}

// Traer un producto por id
const getProductById = async (req, res) => {
    try {
        const { id } = req.params
        const productById = await getProduct(id)
        res.status(200).json(productById)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getProductsOnCart = async(req, res) => {
    try {
        const { compras } = req.body
        const carrito = await productsOnCart(compras)
        res.status(200).json(carrito)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Crear un producto
const postProduct = async (req, res) => {
    try {
        const { name, image, precio, stock } = req.body
        const newProduct = await postNewProduct(name, image, precio, stock)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Actualizar un producto (stock)
const updateProduct = async (req, res) => {
    try {
        await putProduct(req, res)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllProducts,
    postProduct,
    getProductsOnCart,
    updateProduct,
    getProductById
}