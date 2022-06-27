// const nodemailer = require('nodemailer')

// const sendEmail = async ({email, subject, message}) => {   // destructuring from the object
//     const transporter = nodemailer.createTransport({
//         service : process.env.SMPT_SERVICE,
//         host : process.env.SMTP_HOST,
//         port : process.env.SMTP_PORT,
//         auth : {
//             user : process.env.SMPT_USER,
//             pass : process.env.SMPT_PASSWORD,
//         }
//     })

//     const mailOptions = {
//         from : process.env.SMPT_USER,
//         to : email,
//         subject,
//         text : message,
//     }

//     await transporter.sendMail(mailOptions)
// }

// module.exports = sendEmail

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to : 'farankidscampus2@gmail.com',
//     from : 'mobeenamushtaq2@gmail.com',
//     subject : 'This is first mail',
//     text : 'Hi Mobeena, how are you?'
// })

const sendPasswordRecoveryMail = (email, message) => {
    sgMail.send({
        to : email,
        from : 'yahyaabdullah1877@gmail.com',
        subject : 'Ecommerce Website password recovery',
        text : message
    })
}
// const sendWelcomeMail = (email, name) => {
//     sgMail.send({
//         to : email,
//         from : 'yahyaabdullah1877@gmail.com',
//         subject : 'Welcome To the App!',
//         text : `Hi ${name}, how are you? I hope you are doing great!`
//     })
// }

// const sendCancelationMail = (email, name) => {
//     sgMail.send({
//         to : email,
//         from : 'yahyaabdullah1877@gmail.com',
//         subject : 'Remove Account Email',
//         text : `Hi ${name}, your account has been successfully removed? Why did you remove your account? Is there anything we can do for you?!`
//     })
// }

module.exports = {
    // sendWelcomeMail,
    // sendCancelationMail
    sendPasswordRecoveryMail
}