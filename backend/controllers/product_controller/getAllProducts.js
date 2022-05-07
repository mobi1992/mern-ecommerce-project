const Product = require('../../models/product')
const ApiFeatures = require('../../utils/apiFeatures')
// Get All Products
exports.getAllProducts = async (req, res, next) => {
    try {
        const resultPerPage = 10
        const productCount = await Product.countDocuments()
        // query for search
        let apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter()   // calling the class search method
        // const products = await Product.find()
        apiFeatures.sort().pagination(resultPerPage)
        let products = await apiFeatures.query

        // products = await apiFeatures.query
        res.status(200).send({
            success: true,
            products,
            productCount
        })
    }
    catch (err) {
        next(err)
    }
}

