const User = require('../../models/user')

// Get user details, after the user is logged in
exports.getUserDetails = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        res.status(200).send({
            success: true,
            user
        })
    }
    catch (err) {
        next(err)
    }
}