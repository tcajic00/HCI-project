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
            <p className={styles.news}>Popular News</p>
            {data.allContentfulNews.nodes.map(node => {
              return (
                <div className={styles.selected}>
                  <Link to={`/news/${node.slug}`}>
                    <div className={styles.containers}>
                      <Img fixed={node.image.fixed} className={styles.image}/>
                      <div className={styles.text}>
                        <p className={styles.title}>{node.title}</p>
                        <p className={styles.info}>{node.info}</p>
                        <div className={styles.pharagraph}>{node.newsContent.internal.content}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </section>
    )
  }
 
export default PopularNewsContainers