/* eslint-disable @typescript-eslint/no-var-requires */

// environment
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || `development`
console.log(`Using environment config: '${activeEnv}'`)

// config
const dotenv = require(`dotenv`)
const findConfig = require(`find-config`)
const config = {
  ...process.env,
  ...dotenv.config().parsed,
  ...dotenv.config({ path: findConfig(`.env`) }).parsed,
  ...dotenv.config({ path: findConfig(`.env.${activeEnv}`) }).parsed,
}

// imports
const path = require(`path`)
const { strapiApiBase } = require(`./constants`)

// config
module.exports = {
  siteMetadata: {
    title: `Nyala Motors S.C.`,
    description: `Official website of Nyala Motors S.C.`,
    author: `Kelal Tech PLC (https://www.kelaltech.com)`,
    twitter: `@NMSC2016`,
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [
              `300`,
              `300i`,
              `400`,
              `400i`,
              `500`,
              `500i`,
              `700`,
              `700i`,
            ],
          },
        ],
      },
    },

    //
    // COMPONENTS:
    //
    {
      resolve: `gatsby-plugin-nprogress`,
      options: { color: `#c71444`, showSpinner: false },
    },
    //Language Localization
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/shared/intl`,
        // supported language
        languages: [`en`, `am`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },

    //
    // DATA:
    //
    // TODO: use gatsby-source-graphql for data-filled SSG

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
        icon: `src/assets/images/shared/brand/icon.png`,
        start_url: `/`,
        background_color: `rgb(255, 255, 255)`,
        theme_color: `#bd0504`,
        // cache_busting_mode: 'none', // TODO: temp
      },
    },
    // { // TODO: temp
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/*`],
    //     workboxConfig: {
    //       globPatterns: ['**/*'],
    //     },
    //   },
    // },
  ],
}
