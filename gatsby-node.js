/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
 
exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query MyQuery {
    allContentfulNewsFull(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        title
        slug
        info
        firstPharagraph {
          raw
        }
        secondPharagraph {
          raw
        }
        thirdPharagraph {
          raw
        }
        firstImage {
          fixed(width: 550, height: 380) {
            aspectRatio
            base64
            height
            src
            srcSet
            srcSetWebp
            srcWebp
            width
          }
        }
        secondImage {
          fixed(width: 500, height: 300) {
            aspectRatio
            base64
            height
            src
            srcSet
            srcSetWebp
            srcWebp
            width
          }
        }
      }
    }
  }`)
 
  const res = raw.data.allContentfulNewsFull.nodes
 
  res.forEach((e, index, array) => actions.createPage({
    component: path.resolve(`./src/layouts/blog.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `news/${e.slug}`,
    slug: `news/${e.slug}`
  }))
}