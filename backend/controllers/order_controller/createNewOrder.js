const Order = require('../../models/order')
const ErrorHandler = require('../../utils/errorHandler')
const Cart = require('../../models/cart')
exports.newOrder = async(req,res,next) => {
    try {
        const {shippingInfo, paymentInfo, shippingPrice} = req.body
        const cart = await Cart.findOne({ user: req.user._id })
        // console.log(cart)
        if(!cart){
            return next(new ErrorHandler('Cart not found!', 404))
        }
        if (cart.cartItems.length === 0) {
            return next(new ErrorHandler('Cart is empty', 400))
        }
        const order = await Order.create({
            shippingInfo,
            cart : {
                orderItems : cart.cartItems,
                totalQty : cart.totalQuantity,
                totalCost : cart.totalPrice
            },
            paymentInfo,
            shippingPrice,
            totalPrice : cart.totalPrice + shippingPrice,
            paidAt : Date.now(),
            user : req.user._id
        })
        await order.generateOrderNo()
        res.status(201).send({
            success : true,
            order
        })
    }
    catch(err) {
        next(err)
    }
}