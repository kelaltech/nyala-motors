'use strict'
const nodemailer = require('nodemailer')

const Transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

/**
 * A set of functions called "actions" for `send-email`
 */

module.exports = {
  index: async (ctx) => {
    const { to, subject, html } = ctx.request.body

    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to, // list of receivers
      subject, // Subject line
      html, // plain text body
    }

    Transporter.sendMail(mailOptions, function (err) {
      if (err) ctx.body = err
      else ctx.body = 'ok'
    })

    ctx.body = 'ok'
  },
}
