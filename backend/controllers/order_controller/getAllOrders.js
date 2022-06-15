// get All orders --- admin
const Order = require('../../models/order')
const ErrorHandler = require('../../utils/errorHandler')

exports.getAllOrders = async(req,res,next) => {
    try {
        const orders = await Order.find().populate('user', "name email")
        if(!orders) {
            return next(new ErrorHandler('No order found with this id', 404))
        }
        let totalAmount = 0
        orders.forEach(order => totalAmount = totalAmount + order.totalPrice)
        res.status(200).send({
            success : true,
            totalAmount,
            orders
        })
    }
    catch(err) {
        next(err)
    }
}