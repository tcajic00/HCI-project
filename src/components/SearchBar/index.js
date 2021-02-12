import React from 'react'

import { TextField } from '@material-ui/core'

import styles from './style.module.css'

const SearchBar = () => <form className={styles.searchBar} noValidate autoComplete="off">
<TextField id="outlined-basic" label="Search" variant="outlined" size="small"/>
</form>

export default SearchBar