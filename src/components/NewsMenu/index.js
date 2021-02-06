import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const NewsMenu = () => {
    const data = useStaticQuery(graphql`
    query NewsMenu {
        allContentfulNewsPictures (filter: {node_locale: {eq: "en-US"}}){
          nodes {
            title
            slug
            image {
              fixed(width: 320, height: 320) {
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
   
      return (
          <section className={styles.section}>
            {data.allContentfulNewsPictures.nodes.map(node => {
              return (
                <div className={styles.selected}>
                  <Link to={`/news/${node.slug}`}>
                    <div className={styles.containers}>
                      <Img fixed={node.image.fixed} className={styles.image}/>
                        <p className={styles.title}>{node.title}</p>
                    </div>
                  </Link>
                </div>
              )
            })}
          </section>
    )
  }
 
export default NewsMenu