const express = require('express')
const { auth, authorizedRole } = require('../middleware/authorize')
const router = new express.Router()
const {addToCart} = require('../controllers/cart_controller2/addToCart')
const { incrementQty } = require('../controllers/cart_controller2/incrementQty')
const { decrementQty } = require('../controllers/cart_controller2/decrementQty')
const { removeFromCart } = require('../controllers/cart_controller2/removeFromCart')
const { getCartItems } = require('../controllers/cart_controller2/getCartItems')
const { changeQty } = require('../controllers/cart_controller2/changeQty')
const {emptyCart} = require('../controllers/cart_controller2/emptyCart')

router.post('/cart/unknown-user', addToCart)
router.post('/cart/increment/unknown-user', incrementQty)
router.post('/cart/decrement/unknown-user', decrementQty)
router.post('/cart/remove/unknown-user', removeFromCart)
router.post('/cart/change/quantity/unknown-user', changeQty)
router.get('/cart/unknown-user', getCartItems)
router.get('/empty/cart/unknown-user', emptyCart)
module.exports = router
