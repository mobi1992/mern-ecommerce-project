const User = require('../../models/user')
const ErrorHandler = require('../../utils/errorHandler')

// get all users who had made profiles --- admin route
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find()
        if (!users) {
            return next(new ErrorHandler('No user has made account on your website!'))
        }
        res.status(200).send({
            success: true,
            users
        })
    }
    catch(err) {
        next(err)
    }
}
