const User = require('../../models/user')

exports.signUpUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const user = await User.create({
            name, email, password,
            profile_pic: {
                public_id: 'sample public id',
                url: 'sample url'
            }
        })
        const token = await user.generateAuthToken()
        res.status(201).send({
            success: true,
            user,
            token
        })
    }
    catch (err) {
        next(err)
    }
}