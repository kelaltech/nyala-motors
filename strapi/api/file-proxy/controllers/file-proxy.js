'use strict'

const fetch = require('node-fetch')

/**
 * A set of functions called "actions" for `send-email`
 */

module.exports = {
  index: async (ctx) => {
    const { id } = ctx.params
    const file = await strapi.plugins.upload.services.upload.fetch({ id })

    const res = await fetch(file.url)

    ctx.set('Content-Disposition', 'attachment; filename=' + file.name)
    ctx.set('Content-Type', file.mime)

    ctx.body = res.body
  },
}
