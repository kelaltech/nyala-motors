const dotenv = require('dotenv')
const findConfig = require('find-config')

module.exports = () => {
  const activeEnv = process.env.NODE_ENV || 'development'

  dotenv.config()
  dotenv.config({ path: findConfig('.env') })
  dotenv.config({ path: findConfig(`.env.${activeEnv}`) })
}
