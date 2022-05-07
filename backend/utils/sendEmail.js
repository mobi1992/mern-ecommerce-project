const nodemailer = require('nodemailer')

const sendEmail = async ({email, subject, message}) => {   // destructuring from the object
    const transporter = nodemailer.createTransport({
        service : process.env.SMPT_SERVICE,
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        auth : {
            user : process.env.SMPT_USER,
            pass : process.env.SMPT_PASSWORD,
        }
    })

    const mailOptions = {
        from : process.env.SMPT_USER,
        to : email,
        subject,
        text : message,
    }

    await transporter.sendMail(mailOptions)
}

module.exports = sendEmail