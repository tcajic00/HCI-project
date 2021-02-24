import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const GamesContainer = (props) => {
    const data = useStaticQuery(graphql`
    query GamesQuery {
        allContentfulGames(filter: {node_locale: {eq: "en-US"}}) {
          nodes {
            title
            slug
            price
            console
            image {
              fluid(maxWidth: 251) {
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
      }`)

      console.log(props.searched);

      return (
        <section className={styles.section}>
          <div className={styles.cardContainer}>
            {data.allContentfulGames.nodes.filter(node => node.console.includes(props.selected.category)).filter(node => node.title.toLowerCase().includes(props.searched)).map(node => {
              return (
                  <div className={styles.card}>
                    <Link to={`/games/${node.slug}`}>
                      <Img fluid={node.image.fluid} className={styles.image}/>
                      <div className={styles.text}>
                        <p className={styles.title}>{node.title}</p>
                        <p className={styles.console}>{node.console}</p>
                        <p className={styles.price}>{node.price}</p>
                      </div>
                    </Link>
                  </div>
              )
            })}
          </div>
        </section>
  )
}
 
export default GamesContainer