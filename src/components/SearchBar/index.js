import React from 'react'

import { TextField } from '@material-ui/core'

import styles from './style.module.css'

const SearchBar = (props) => {
    
    
return (
<form className={styles.searchBar} noValidate autoComplete="off">
    <TextField value={props.props.props.input} onChange={props.props.props.handler} id="outlined-basic" label="Search" variant="outlined" size="small"/>
</form>
)
}


export default SearchBar