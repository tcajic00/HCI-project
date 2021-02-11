import React from 'react'
import styles from './style.module.css'
import GamesContainer from '../GamesContainer'
import { TextField } from '@material-ui/core'

const GamesBody = () => (
  <section className={styles.section}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>Search and buy</p>
    </div>

    <div className={styles.bodyContainer}>
      <div className={styles.gamesTitle}>
        <p className={styles.gamesTitleText}>Games</p>
      </div>

      <div className={styles.gamesBody}>
        <div className={styles.filterBox}>
          <div className={styles.categoriesTextBox}>
            <p className={styles.categoriesText}>Categories</p>
          </div>

          <div className={styles.categoriesBox}>
            <div className={styles.category}>
              <p className={styles.categoryText}>Indie</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Action</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Adventure</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Strategy</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Simulator</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Indie</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>RPG</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Arcade</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Sports</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Racing</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Puzzle</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>Fighting</p>
              <p className={styles.categoryNumber}>10</p>
            </div>
          </div>

          <div className={styles.searchFilterContainer}>
            <div className={styles.priceTextBox}>
              <p className={styles.priceText}>Price</p>
              <p className={styles.euroText}>(EUR)</p>
            </div>

            <div className={styles.searchFilterBox}>
              <TextField 
                margin="dense"
                variant="outlined"
                name="From"
                label="From"
              />
              <p className={styles.priceSeparator}>-</p>
              <TextField
                margin="dense"
                variant="outlined"
                name="To"
                label="To"
              />
            </div>
          </div>

          <div className={styles.categoriesTextBox}>
            <p className={styles.categoriesText}>Console</p>
          </div>

          <div className={styles.categoriesBox}>
            <div className={styles.category}>
              <p className={styles.categoryText}>PC</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>PS2</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>PS3</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>PS4</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>PS5</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

            <div className={styles.category}>
              <p className={styles.categoryText}>XBox</p>
              <p className={styles.categoryNumber}>10</p>
            </div>

          </div>

        </div>
        <div className={styles.gamesContainer}>
          <GamesContainer />
        </div>
      </div>
    </div>
  </section>
)

export default GamesBody