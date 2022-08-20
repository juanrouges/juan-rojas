module.exports = {
  siteMetadata: {
    title: `Juan Rojas`,
    description: `Juan Rojas Space`,
    siteUrl: `https://www.juanrojas.co`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpcontent',
        url: 'http://gatsbyblog.local/graphql',
      },
    },
  ],
};
