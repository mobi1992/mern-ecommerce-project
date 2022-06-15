const Order = require('../../models/order')
const ErrorHandler = require('../../utils/errorHandler')

exports.mySingleOrder = async(req,res,next) => {
    try {
        const order = await Order.findOne({user : req.user._id, _id : req.params.id}).populate(
            "user",
            "name email"
          );
        
          if (!order) {
            return next(new ErrorHandler("Order not found with this Id", 404));
          }
        
          res.status(200).json({
            success: true,
            order,
          });
    }
    catch(err) {
        next(err)
    }
}