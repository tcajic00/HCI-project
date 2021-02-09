import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const NewsContainers = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulNews(filter: {node_locale: {eq: "en-US"}}) {
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
            <div className={styles.newsText}>
              <p className={styles.news}>News</p>
            </div>
            <div className={styles.cardContainer}>
            {data.allContentfulNews.nodes.map(node => {
              return (
                <div className={styles.card}>
                  <Link to={`/news/${node.slug}`}>
                  <div className={styles.content}>
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
            </div>
          </section>
    )
  }
 
export default NewsContainers