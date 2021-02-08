import React from 'react'
import { Button, TextField } from '@material-ui/core'

import styles from './style.module.css'



const LogInHeader = () => (
    <main className={styles.body}>
        <TextField 
            id="" 
            margin="normal"
            required
            label="username" 
            variant="outlined" 
        />
        <TextField 
            id="password" 
            label="password" 
            variant="outlined" 
            type="password"
            name="password"
            required
            margin="normal"
        />
        <Button
        type="submit"
        variant="contained"
        color="primary"
        >
            Log In
        </Button>
    </main>
)

export default LogInHeader;