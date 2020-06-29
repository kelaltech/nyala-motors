'use strict'

/**
 * Module dependencies
 */

// Public node modules.
const cloudinary = require('cloudinary').v2
const intoStream = require('into-stream')

module.exports = {
  init(config) {
    cloudinary.config(config)

    return {
      upload(file, customConfig = {}) {
        return new Promise((resolve, reject) => {
          const upload_stream = cloudinary.uploader.upload_stream(
            {
              use_filename:true,
              resource_type: file.mime.match(/^(image|video)/i)
                ? 'auto'
                : 'raw',
              public_id: file.hash,
              ...customConfig,
            },
            (err, image) => {
              if (err) {
                strapi.log.error(
                  `Error uploading to cloudinary: ${err.message}`
                )
                return reject(new Error('Upload to cloudinary failed'))
              }

              if (image.resource_type === 'video') {
                file.previewUrl = cloudinary.url(`${image.public_id}.gif`, {
                  video_sampling: 6,
                  delay: 200,
                  width: 250,
                  crop: 'scale',
                  resource_type: 'video',
                })
              }

              file.url = image.secure_url
              file.provider_metadata = {
                public_id: image.public_id,
                resource_type: image.resource_type,
              }
              resolve()
            }
          )

          intoStream(file.buffer).pipe(upload_stream)
        })
      },
      async delete(file, customConfig = {}) {
        try {
          const { resource_type, public_id } = file.provider_metadata
          const response = await cloudinary.uploader.destroy(public_id, {
            invalidate: true,
            resource_type: resource_type || 'image',
            ...customConfig,
          })

          if (response.result !== 'ok') {
            throw {
              error: new Error(response.result),
            }
          }
        } catch (error) {
          throw new Error(error.error)
        }
      },
    }
  },
}
