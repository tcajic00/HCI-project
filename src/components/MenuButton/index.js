import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from './style.module.css'
import { TextField } from '@material-ui/core'
import { navs as navTabs } from '../../constants'
import { Link } from 'gatsby'
import ButtonStripes from '../../images/MenuStripes.png'
import ButtonEscape from '../../images/MenuEscape.png'
import Logo from '../../components/Logo'

const setItem = (key, item) => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.setItem(key, item)
}

const getItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(item)
}

const removeItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.removeItem(item)
}

export const myLocalStorage = {
  getItem,
  setItem,
  removeItem
}

const loggedIn = () => !!myLocalStorage.getItem('loggedIn');

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
});

const MenuButton = ({ activeTab }) => {

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
      <div className={styles.card}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <TextField 
          className={styles.searchBar}
          margin="dense"
          variant="outlined"
          name="Search"
          label="Search"
        />

          <nav className={styles.navigationBar}>
              {navTabs.map(({tab, to}) => (
                <Link to={to} style={{textDecoration: 'none'}}>
                    <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
                </Link>)
              )}
              <Link to={loggedIn() ? '/' : '/login'} >
                <li onClick={loggedIn() ? () => myLocalStorage.removeItem('loggedIn') : () => {}} className={"Log in" === activeTab ? styles.active : ''}>
                  {loggedIn() ? 'Log out' : 'Log in'}
                </li>
              </Link>
          </nav>
      </div>
    </div>
  );

  return (
    <section className={styles.section}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className={styles.button} onClick={toggleDrawer(anchor, true)}>
            <img src={state.left ? ButtonEscape : ButtonStripes} width='45px' height='45px'></img>
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

export default MenuButton