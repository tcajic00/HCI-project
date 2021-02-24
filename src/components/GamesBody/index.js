import React from 'react'
import styles from './style.module.css'
import GamesContainer from '../GamesContainer'
import { TextField } from '@material-ui/core'
import FiltersButton from '../FiltersButton'

const categoryFilters = ['Indie', 'Action', 'Adventure', 'Strategy', 'Simulation', 
                         'Arcade', 'Sports', 'Racing', 'Puzzle']

const consoleFilters = ['PC', 'PS2', 'PS3', 'PS4', 'PS5', 'XBox']

const GamesBody = () => (
  <section className={styles.section}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>Search and buy</p>
    </div>

    <div className={styles.bodyContainer}>
      <div className={styles.gamesTitle}>
        <p className={styles.gamesTitleText}>Games</p>
        <FiltersButton />
      </div>

      <div className={styles.gamesBody}>
        <div className={styles.filterBox}>
          <div className={styles.categoriesTextBox}>
            <p className={styles.categoriesText}>Categories</p>
          </div>

          <div className={styles.categoriesBox}>
              {categoryFilters.map(category => (
                <div className={styles.category}>
                  <p className={styles.categoryText}>{category}</p>
                  <p className={styles.categoryNumber}>10</p>
                </div>
              )
              )}
          </div>

          <div className={styles.searchFilterContainer}>
            <div className={styles.priceTextBox}>
              <p className={styles.priceText}>Price</p>
              <p className={styles.euroText}>(EUR)</p>
            </div>

            <div className={styles.searchFilterBox}>
              <TextField 
                className={styles.textfield}
                margin="dense"
                variant="outlined"
                name="From"
                label="From"
              />
              <p className={styles.priceSeparator}>-</p>
              <TextField
                className={styles.textfield}
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
              {consoleFilters.map(console => (
                <div className={styles.category}>
                  <p className={styles.categoryText}>{console}</p>
                  <p className={styles.categoryNumber}>10</p>
                </div>
              )
              )}
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