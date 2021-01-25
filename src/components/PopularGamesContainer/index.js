import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const PopularGamesContainers = () => {
    const data = useStaticQuery(graphql`
    query PopularGamesQuery {
        allContentfulGames(filter: {node_locale: {eq: "en-US"}}, limit: 4) {
          nodes {
            title
            slug
            price
            console
            image {
              fixed(height: 215, width: 251) {
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
            <h1>Popular Games</h1>
            {data.allContentfulGames.nodes.map(node => {
              return (
                <Link to={`/games/${node.slug}`}>
                  <div className={styles.containers}>
                    <Img fixed={node.image.fixed}/>
                    <div className={styles.text}>
                        <h3>{node.title}</h3>
                        <h5>{node.console}</h5>
                        <h4>{node.price}</h4>
                    </div>
                  </div>
                </Link>
              )
            })}
          </section>
    )
  }
 
export default PopularGamesContainers