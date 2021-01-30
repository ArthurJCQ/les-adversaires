// eslint-disable-next-line no-undef
const linkResolver = require('./src/utils/link-resolver')

// eslint-disable-next-line no-undef
module.exports = {
  siteMetadata: {
    title: 'les-adversaires',
    siteUrl: 'https://www.les-adversaires.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-css-modules-typings',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'lesadversaires',
        linkResolver: () => (doc) => linkResolver(doc),
        accessToken: 'MC5ZQTJnUHhFQUFDZ0FWc3Br.77-977-977-977-977-9RRZycu-_vR3vv73vv70SFQ_vv71877-977-9Y--_ve-_vSlZ77-977-977-9Hu-_vS7vv70',
        schemas: {
          // eslint-disable-next-line no-undef
          accueil: require('./src/schemas/accueil.json')
        }
      }
    }
  ],
}
