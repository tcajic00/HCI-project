import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const PopularNewsContainers = () => {
    const data = useStaticQuery(graphql`
    query PopularNewsQuery {
      allContentfulNews(filter: {node_locale: {eq: "en-US"}}, limit: 2) {
        nodes {
          image {
            id
            fixed(width: 363, height: 221) {
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
          info
          slug
          title
          newsContent {
            internal {
              content
            }
          }
        }
      }
    }`)
   
      return (
          <section className={styles.section}>
            <h1>Popular News</h1>
            {data.allContentfulNews.nodes.map(node => {
              return (
                <Link to={`/news/${node.slug}`}>
                  <div className={styles.containers}>
                    <Img fixed={node.image.fixed}/>
                    <div className={styles.text}>
                        <h3>{node.title}</h3>
                        <p>{node.info}</p>
                        <div>{node.newsContent.internal.content}</div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </section>
    )
  }
 
export default PopularNewsContainers