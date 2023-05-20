const { Router } = require('express')
const { getAllProducts, postProduct, updateProduct, getProductById } = require('../handlers/productsHandler')
const router = Router()

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.post('/', postProduct)
router.put('/:id', updateProduct)

module.exports = router