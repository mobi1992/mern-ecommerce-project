const Product = require('../../models/product')
// Create a product ---  Admin
exports.createProduct = async (req, res, next) => {
    try {
        // console.log(req.body)
        req.body.user = req.user.id     //save the user id in req.body.user
        const product = await Product.create(req.body)
        await product.setCategories(req.body.categories)
        res.status(201).send({
            success: true,
            product
        })
    }
    catch (err) {
        console.log(err.message)
        next(err)
    }
}