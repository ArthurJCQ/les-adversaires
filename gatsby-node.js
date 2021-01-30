// // eslint-disable-next-line no-undef
// const path = require('path')
//
// // eslint-disable-next-line no-undef
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//
//   // Query all Pages with their IDs and template data.
//   const pages = await graphql(`
//     {
//       allPrismicPage {
//         nodes {
//           id
//           uid
//           data {
//             template
//           }
//         }
//       }
//     }
//   `)
//
//   const pageTemplates = {
//     // eslint-disable-next-line no-undef
//     Light: path.resolve(__dirname, 'src/templates/light.js'),
//     // eslint-disable-next-line no-undef
//     Dark: path.resolve(__dirname, 'src/templates/dark.js'),
//   }
//
//   // Create pages for each Page in Prismic using the selected template.
//   pages.data.allPrismicPage.nodes.forEach((node) => {
//     createPage({
//       path: `/${node.uid}`,
//       component: pageTemplates[node.template],
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }
