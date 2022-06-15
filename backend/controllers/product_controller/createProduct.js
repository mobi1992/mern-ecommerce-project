const Product = require('../../models/product')
const cloudinary = require('cloudinary')
// Create a product ---  Admin
exports.createProduct = async (req, res, next) => {
    try {
        // let images = []
        // if(typeof req.body.images === "string"){
        //     images.push(req.body.images)
        // }
        // else {
        //     images = req.body.images
        // }
        // console.log(req.body)
        // const imagesLinks = []
        // // upload the images 
        // for(let i=0; i<images.length; i++){
        //     const result = await cloudinary.v2.uploader.upload(images[i], {
        //         folder : products
        //     })
        //     imagesLinks.push({
        //         public_id : result.public_id,
        //         url : result.secure_url
        //     })
        // }

        // req.body.images = imagesLinks
        console.log(req.file)
        const myCloud = await cloudinary.v2.uploader.upload(req.file.buffer, {
            folder : 'products',
            width : 300,
            crop : 'scale '
        })
        // console.log(req.body)
        req.body.user = req.user.id     //save the user id in req.body.user
        const {name, price, description, ingredients} = req.body
        const product = await Product.create({
            name,
            price,
            description,
            ingredients,
            images : {
                public_id : myCloud.public_id,
                url : myCloud.secure_url
            }
        })
        if (req.body.categories){
        await product.setCategories(req.body.categories)
        }
        if(req.body.relatedProducts){
        await product.setRelatedProducts(req.body.relatedProducts)
        }
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