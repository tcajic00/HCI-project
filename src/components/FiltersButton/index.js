import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from './style.module.css'
import { TextField } from '@material-ui/core'
import FiltersIcon from '../../images/FilterIcon.png'
import ButtonEscape from '../../images/MenuEscape.png'

const categoryFilters = ['Indie', 'Action', 'Adventure', 'Strategy', 'Simulator', 
                        'RPG', 'Arcade', 'Sports', 'Racing', 'Puzzle', 'Fighting']

const consoleFilters = ['PC', 'PS2', 'PS3', 'PS4', 'PS5', 'XBox']

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

const FiltersButton = () => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
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
    </div>
  );

  return (
    <section className={styles.section}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={styles.button} onClick={toggleDrawer(anchor, true)}>
            <img src={state.left ? ButtonEscape : FiltersIcon} width='45px' height='45px'></img>
          </div>
          
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </section>
  )
}

export default FiltersButton