const Product = require('../../models/product')

// Create new review or update the rewiew
exports.createProductReview = async (req, res, next) => {
    try {
        const { rating, comment, productId } = req.body
        const review = {
            user: req.user._id,
            name: req.user.name,
            rating: Number(rating),    // rating must be a number
            comment
        }
        const product = await Product.findById(productId)

        const isReviewed = product.reviews.find(rev => rev.user.toString() === req.user._id.toString())
        if (isReviewed) {
            product.reviews.forEach(rev => {
                if (rev.user.toString() === req.user._id.toString()) {
                    rev.rating = rating
                    rev.comment = comment
                }
            })
        }
        else {
            // push the review on the review array 
            product.reviews.push(review)
            // update the num of reviews as well
            product.numOfReviews = product.reviews.length
        }

        // calculate the average of all the reviews
        let avg = 0
        product.reviews.forEach(rev => {
            avg+=rev.rating
        })
        product.ratings = avg / product.reviews.length;
        await product.save()
        res.status(201).send({
            success : true,
            message : 'Thanks for your review. Your review has been successfully added!'
        })
    }
    catch(err) {
        next(err)
    }
}