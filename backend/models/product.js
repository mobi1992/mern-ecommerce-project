const mongoose = require('mongoose')
const validator = require('validator')
const Category = require('./category')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Name should be unique'],
        required: [true, 'Please enter product name'],
        trim : true
    },

    ingredients: {
        type: String,
        required: [true, 'Please enter product ingredients'],
        trim : true
    },

    description: {
        type: String,
        required: [true, 'Please enter product description'],
        trim : true
    },

    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxlength: [6, 'Price cannot exceed 6 characters']
    },

    picture: {
        type: Buffer
    },

    picture_name: {
        type: String,
    },

    picture_url: {
        type: String
    },

    prod_categories: [
        {
            category: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Category,
            }
        }
    ],

    ratings : {
        type: Number,
        default: 0
    },

    stock : {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxlength: [4, 'Stock cannot exceed 4 characters'],
        default : 1
    },

    numOfReviews : {
        type: Number,
        deafult: 0
    },

    reviews : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'User',
                required : true
            },

            name : {
                type : String,
                required : true
            },
            rating : {
                type: Number,
                required: true
            },
            comment: {
                type: String
            }
        }
    ],

    images : [
        {
            public_id : {
                type : String,
                required : true 
            },
            url : {
                type : String,
                required : true 
            }
        }
    ],

    // save the user id in db as well, the user who has created that product
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
}, {
    timestamps: true
})

productSchema.methods.toJSON = function () {
    const product = this
    const productObject = product.toObject()
    delete productObject.picture
    return productObject
}

productSchema.methods.setCategories = async function (reqBodyCategories) {
    const product = this
    // split the categories in parts which seperated by ,
    const reqCatgs = reqBodyCategories.split(',')
    // console.log('req cat is : ', reqCatgs)
    // Assign these value to product categories array
    reqCatgs.forEach(reqCat => {
        // console.log(reqCat)
        // console.log(product.prod_categories)
        //console.log(product.prod_categories.some(category => category.category.toHexString() === reqCat))
        if (!product.prod_categories.some(category => category.category.toHexString() === reqCat)) {
            product.prod_categories.push({ category: reqCat })
        }
        //console.log(product.prod_categories)
    })
    await product.save()
    // console.log(product)
}


productSchema.methods.deleteCategories = async function () {
    const product = this
    product.prod_categories = []
    await product.save()
}
const Product = mongoose.model('Product', productSchema)
module.exports = Product