const Cart = require('../../models/cart')
const ErrorHandler = require('../../utils/errorHandler')

exports.removeFromCart = async(req, res, next) => {
    try {
        const { product } = req.body
        let cart = await Cart.findOne({ user: req.user._id })
        if (!cart) {
            return next(new ErrorHandler('Cart not found!', 404))
        }
        await cart.removeFromTheCart(product)
        res.status(200).send({
            success : true,
            message : 'Item has been successfully removed from the cart!',
            cart
        })
    }
    catch(err) {
        next(err)
    }
}