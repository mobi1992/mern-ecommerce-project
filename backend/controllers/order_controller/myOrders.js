// get logged in user order
const Order = require('../../models/order')
const ErrorHandler = require('../../utils/errorHandler')

exports.myOrders = async(req,res,next) => {
    try {
        const orders = await Order.find({user : req.user._id}).populate('user', "name email")
        if(!orders) {
            return next(new ErrorHandler('No order found with this id', 404))
        }
        res.status(200).send({
            success : true,
            orders
        })
    }
    catch(err) {
        next(err)
    }
}