import React, {useState} from 'react'
import {navigate} from 'gatsby'

import styles from './login.module.css'
import { Button, createMuiTheme, TextField, ThemeProvider } from '@material-ui/core'
import Logo from '../components/Logo'
import {orange} from '@material-ui/core/colors'


const users = [
{
  username: "amusul00",
  password: "12345"
},
{
  username: "tcajic00",
  password: "12345"
},
]

const LogIn = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        localStorage.setItem("loggedIn", username)
        setError('Success')
        return navigate('/')
      }
        setError('Wrong username or password')
    }, 1500)
  }

  const theme = createMuiTheme({
      palette : {primary: orange}
    })
  
  return (
  <main className={styles.background} onKeyDown={key => {
    if (key.key === "Enter")
      return submit()
  }}>
    <section className={styles.container}>
        <Logo/>
      <TextField 
        className={styles.input}
        margin="normal"
        variant="outlined"
        name="username"
        label="Username"
        required
        onChange={e => setUserName(e.target.value)}
      />
      <TextField 
        className={styles.input}
        margin="normal"
        variant="outlined"
        name="password"
        label="Password"
        type="password"
        required
        onChange={e=> setPassword(e.target.value)}
      />
      <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
      <ThemeProvider theme={theme}>
      <Button 
      className={styles.loginButton} 
      onClick={() => submit()}
      variant="contained"
      color = "primary"
      >
        {loading ? 'Loading...' : 'Login'}
      </Button>
      </ThemeProvider>
      
      
      
    </section>
  </main>
)}

export default LogIn