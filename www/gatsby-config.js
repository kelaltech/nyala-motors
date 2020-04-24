// environment
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

// config
const dotenv = require('dotenv')
const findConfig = require('find-config')
const config = {
  ...process.env,
  ...dotenv.config().parsed,
  ...dotenv.config({ path: findConfig(`.env`) }).parsed,
  ...dotenv.config({ path: findConfig(`.env.${activeEnv}`) }).parsed,
}

// imports
const path = require('path')
const { strapiApiBase } = require('./constants')

// config
module.exports = {
  siteMetadata: {
    title: `Nyala Motors S.C.`,
    description: `Official website of Nyala Motors S.C.`,
    author: `kelal tech.`,
    twitter: `@nmsc2016`,
    copyright: `© ${new Date().getFullYear()} Nyala Motors S.C. All Rights reserved.`,

    siteUrl: config.GATSBY_SITE_URL || `http://localhost:8000`,
  },

  plugins: [
    //
    // HIGHER ORDER LANGUAGES:
    //
    {
      resolve: `gatsby-plugin-sass`,
      options: {},
    },
    // { TODO:
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true,
    //     develop: false /* CAUTION! ALWAYS TEST IN 'production' MODE. */,
    //     whitelistPatterns: [
    //       /^gerami-yoga-item-/,
    //       /sal-animate/,
    //       /sal-disabled/,
    //       /^autolink-headers$/
    //     ],
    //     content: [
    //       path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
    //       path.join(
    //         process.cwd(),
    //         'node_modules/gerami/**/!(*.d).{ts,js,jsx,tsx}'
    //       )
    //     ]
    //   }
    // },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-typescript-checker`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./graphql-types.ts`,
        documentPaths: [
          `./src/**/*.{ts,tsx}`,
          // `./.cache/fragments/*.js`,
          // `./node_modules/gatsby-*/!(node_modules)**/*.js`,
          `../node_modules/gatsby-*/!(node_modules)**/*.js`,
        ],
      },
    },

    //
    // ASSETS:
    //
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {},
    },
    {
      resolve: `gatsby-transformer-sharp`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: { include: /icons/ },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       { family: `Open Sans`, variants: [`400`, `600`, `700`] },
    //       { family: `Lato`, variants: [`300`, `400`, `700`] },
    //     ],
    //   },
    // },

    //
    // COMPONENTS:
    //
    {
      resolve: `gatsby-plugin-nprogress`,
      options: { color: /*TODO: */ `#00b478`, showSpinner: false },
    },

    //
    // DATA:
    //
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: strapiApiBase,
        queryLimit: 10000,
        contentTypes: [],
      },
    },

    //
    // ANALYSIS:
    //
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: { trackingId: `TODO:` },
    // },
    // {
    //   resolve: `gatsby-plugin-google-tagmanager`,
    //   options: { id: `TODO:` },
    // },
    // {
    //   resolve: `gatsby-plugin-fullstory`,
    //   options: { fs_org: `TODO:` },
    // },

    //
    // META, PWA & SEO
    //
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: { path: `${__dirname}/src/app/routes` },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: { exclude: [] },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nyala Motors S.C.`,
        short_name: `Nyala Motors`,
        description: `Official website of Nyala Motors S.C.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/assets/images/brand/icon.png`,
        start_url: `/`,
        background_color: `rgb(255, 255, 255)`,
        theme_color: /*TODO: */ `#00b478`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: { precachePages: [`/*`] },
    },
  ],
}