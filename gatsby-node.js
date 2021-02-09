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
            fixed(height: 281, width: 550) {
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
            fixed(height: 281, width: 550) {
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
          mainImage {
            fixed(height: 337, width: 500) {
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
          fourthImage {
            fixed(height: 281, width: 550) {
              aspectRatio
              base64
              height
              src
              srcSetWebp
              srcWebp
              width
              srcSet
            }
          }
          firstImage {
            fixed(width: 550, height: 281) {
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