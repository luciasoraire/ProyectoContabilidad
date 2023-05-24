const { Router } = require('express')
const { getAllProducts, postProduct, updateProduct, getProductById, getProductsOnCart } = require('../handlers/productsHandler')

const router = Router()

//------------ PRODUCTOS -------
router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/carrito', getProductsOnCart)
router.post('/', postProduct)
router.put('/', updateProduct)
//-------------------------------

module.exports = router