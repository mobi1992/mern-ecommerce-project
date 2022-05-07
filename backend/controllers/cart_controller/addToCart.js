const Cart = require('../../models/cart')
const Product = require('../../models/product')
const ErrorHandler = require('../../utils/errorHandler')
const ApiFeatures = require('../../utils/apiFeatures')

exports.addToCart = async (req, res, next) => {
    try {
        const { name, price, quantity, image, product } = req.body
        let cart = await Cart.findOne({ user: req.user._id })
        if (cart) {
            // if the product already exists in the cart, update its quantity
            const itemIndex = cart.cartItems.findIndex(prod => prod.product.toString() === product)
            if (itemIndex > -1) {
                let item = cart.cartItems[itemIndex]
                item.quantity = item.quantity + quantity
                cart.cartItems[itemIndex] = item
                
            }
            else {
                cart.cartItems.push({ name, price, quantity, image, product })
            }
            await cart.calcTotalQtyAndPrice()
            await cart.save()
            return res.status(200).send({
                success: true,
                message: 'Item has been successfully added to cart!',
                cart
            })
        }
        // if cart does not exist the create new cart
        else {
            const newCart = await Cart.create({
                user: req.user._id,
                cartItems: [{ name, price, quantity, image, product }],
                totalIndQuantity: quantity,
                totalIndPrice: price
            })
            await newCart.calcTotalQtyAndPrice()
            await newCart.save()
            res.status(201).send({
                success: true,
                message: 'Item has been successfully added to cart!',
                newCart
            })
        }
    }
    catch (err) {
        next(err)
    }
}

