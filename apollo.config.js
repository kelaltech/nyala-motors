module.exports = {
  client: {
    service: {
      localSchemaFile: './strapi/exports/graphql/schema.graphql',
    },
    includes: ['./www/src/**/*.graphql'],
  },
}
