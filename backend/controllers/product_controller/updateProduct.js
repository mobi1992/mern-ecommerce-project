const Product = require('../../models/product')
const ErrorHandler = require('../../utils/errorHandler')
// Update product --- Admin 
exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            return next(new ErrorHandler('Product not found', 404))
        }

        product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })
        res.status(200).send({
            success: true,
            product
        })
    }
    catch (err) {
        next(err)
    }
}