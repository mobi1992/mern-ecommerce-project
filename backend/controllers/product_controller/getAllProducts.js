const Product = require('../../models/product')
const ApiFeatures = require('../../utils/apiFeatures')
const ErrorHandler = require('../../utils/errorHandler')

// Get All Products
exports.getAllProducts = async (req, res, next) => {
    try {
        // return next(new ErrorHandler('This is my temp error', 500))
        const resultPerPage = 20 
        const productsCount = await Product.countDocuments()
        // query for search
        let apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter()   // calling the class search method
        // const products = await Product.find()
        let products = await apiFeatures.query
        let searchedProductsCount = products.length
        apiFeatures.sort().pagination(resultPerPage)
        products = await apiFeatures.query.clone()
        // products = await apiFeatures.query
        res.status(200).send({
            success: true,
            products,
            productsCount,
            resultPerPage,
            searchedProductsCount
        })
    }
    catch (err) {
        next(err)
    }
}

