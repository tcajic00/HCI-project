exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      news: allContentfulNewsFull(filter: {node_locale: {eq: "en-US"}}) {
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
            fluid(maxWidth: 550) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          secondImage {
            fluid(maxWidth: 500) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      
      games: allContentfulGamesFull(filter: {node_locale: {eq: "en-US"}}) {
        nodes {
          title
          price
          slug
          firstPharagraph {
            raw
          }
          info {
            raw
          }
          introduction {
            raw
          }
          secondPharagraph {
            raw
          }
          systemRequirements {
            raw
          }
          keyFeatures {
            raw
          }
          thirdPharagraph {
            raw
          }
          thirdImage {
            fluid(maxWidth: 550) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          secondImage {
            fluid(maxWidth: 550) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          mainImage {
            fluid(maxWidth: 500) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
          fourthImage {
            fluid(maxWidth: 550) {
              aspectRatio
              base64
              src
              srcSetWebp
              srcWebp
              srcSet
            }
          }
          firstImage {
            fluid(maxWidth: 550) {
              aspectRatio
              base64
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  `)

  const blogPage = require.resolve(`./src/layouts/blog.js`)
  const gamePage = require.resolve('./src/layouts/game.js')

  if (result.errors) {
    return
  }

  result.data.news.nodes.forEach(newBlog => {
    createPage({
      path: `/news/${newBlog.slug}`,
        component: blogPage,
        context: {
          ...newBlog,
          slug: newBlog.slug
        },
    })
  })

  result.data.games.nodes.forEach(newGame => {
    createPage ({
      component: gamePage,
      path: `/games/${newGame.slug}`,
      context: {
        ...newGame,
        slug: newGame.slug
      }
    })
  })
}