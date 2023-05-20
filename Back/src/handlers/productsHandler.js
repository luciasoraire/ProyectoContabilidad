const { postNewProduct, getProducts, getProduct, putProduct } = require('../controllers/productsController')

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

// Crear un producto
const postProduct = async (req, res) => {
    try {
        const { name, image, stock } = req.body
        const newProduct = await postNewProduct(name, image, stock)
        res.status(200).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Actualizar un producto (stock)
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { cantidad } = req.body
        const updatedProduct = await putProduct(id, cantidad)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getAllProducts,
    postProduct,
    updateProduct,
    getProductById
}