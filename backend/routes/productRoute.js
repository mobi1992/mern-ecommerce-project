const express = require('express')
const { auth, authorizedRole } = require('../middleware/authorize')
const {getAllProducts} = require('../controllers/product_controller/getAllProducts')
const {createProduct} = require('../controllers/product_controller/createProduct')
const {updateProduct} = require('../controllers/product_controller/updateProduct')
const {deleteProduct} = require('../controllers/product_controller/deleteProduct')
const {deleteProductCategory} = require('../controllers/product_controller/deleteProductCategory')
const {productDetail} = require('../controllers/product_controller/productDetail')
const {createProductReview} = require('../controllers/product_controller/createProductReview')
const { getProductReviews } = require('../controllers/product_controller/getProductReviews')
const { deleteProductReview } = require('../controllers/product_controller/deleteProductReview')
const router = new express.Router()

router.get('/products', getAllProducts)
router.post('/admin/products/new', auth, authorizedRole('admin'), createProduct)
router.patch('/admin/products/:id', auth, authorizedRole('admin'), updateProduct)
router.delete('/admin/products/:id', auth, authorizedRole('admin'), deleteProduct)
router.delete('/admin/productCategory/:id', auth, authorizedRole('admin'), deleteProductCategory)
router.get('/products/:id', productDetail) 
router.put('/product/review', auth, createProductReview)
router.get('/product/review', getProductReviews)
router.delete('/product/review', auth, deleteProductReview )

module.exports = router