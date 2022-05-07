const Product = require('../../models/product')
const ErrorHandler = require('../../utils/errorHandler')

exports.deleteProductReview = async(req,res,next) => {
    try {
        const product = await Product.findById(req.query.productId)
        if (!product) {
            return next(new ErrorHandler('Product not found!', 404))
        }
        // filter the reviews you want to keep
        const reviews = product.reviews.filter(rev => rev._id.toString() !== req.query.id)
        // rating will be changed when any review gets deleted
        let avg = 0
        reviews.forEach(rev => avg += rev.rating)
        const ratings = avg / reviews.length
        const numOfReviews = reviews.length
        await Product.findByIdAndUpdate(req.query.productId, {
            reviews,
            ratings,
            numOfReviews
        }, {
            new : true,
            runValidators : true,
            useFindAndModify : false
        })
        res.status(200).send({
            success : true,
            message : 'Review has be successfully deleted!'
        })
    }
    catch(err) {
        next(err)
    }
}