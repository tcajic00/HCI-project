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
              fixed(width: 350, height: 350) {
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
            <div className={styles.cardContainer}>
                {data.allContentfulNewsPictures.nodes.map(node => {
                return (
                    <div className={styles.card}>
                        <Link to={`/news/${node.slug}`}>
                            <Img fixed={node.image.fixed} className={styles.image}/>
                            <div className={styles.block}>
                                <p className={styles.text}>{node.title}</p>
                            </div>
                        </Link>
                    </div>
              )
            })}
            </div>
          </section>
    )
  }
 
export default NewsMenu