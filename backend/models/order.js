const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required: [true, 'Please enter your address.']
        },
        city: {
            type: String,
            required: [true, 'Please enter yout city.']
        },
        province: {
            type: String,
            required: [true, 'Please select yout province.']
        },
        country: {
            type: String,
            required: [true, 'Please select your country.']
        },
        pinCode: {
            type: Number,
            required: [true, 'Please enter the pin code / postal code.']
        },
        phoneNo: {
            type: String,
            required: [true, 'Please enter your phone number.']
        }
    },

    cart: {
        orderItems: [
            {
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },
                image: {
                    type: String,
                    required: true
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                }
            }
        ],
        totalQty: {
            type: Number,
            default: 0,
            required: true,
        },
        totalCost: {
            type: Number,
            default: 0,
            required: true,
        }
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },

    paidAt: {
        type: Date,
        required: true
    },

    shippingPrice: {
        type: Number,
        required: true,
        default: 0
    },

    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },

    orderStatus: {
        type: String,
        required: true,
        default: 'Processing'
    },

    deliveredAt: {
        type: Date,
    }
},
    {
        timestamps: true
    })

const Order = mongoose.model('Order', orderSchema)
module.exports = Order