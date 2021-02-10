import React, {useState} from 'react'
import {navigate} from 'gatsby'

import styles from './login.module.css'
import { Button, createMuiTheme, Snackbar, TextField, ThemeProvider } from '@material-ui/core'
import Logo from '../components/Logo'
import {orange} from '@material-ui/core/colors'
import Footer from '../components/Footer'
import NavigationHeader from '../components/NavigationHeader'
import MuiAlert from '@material-ui/lab/Alert'

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LogIn = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const [open, setOpen] = useState(false);

  const handleClose = (reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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
        setOpen(true);
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
  <NavigationHeader activeTab={"Log in"}/>
  <div className={styles.logInComponent}>
    <section className={styles.container}>
      <div className={styles.line}>
        <Logo/>
      </div>
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
      <text className={styles.reqText}>* required fields</text>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
            {error}
        </Alert>
      </Snackbar>
      <ThemeProvider theme={theme}>
        <Button 
        onClick={() => submit()}
        variant="contained"
        color = "primary"
        size='large'
        m={-2}
        >
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </ThemeProvider>
      
      
      
    </section>
    </div>
    <Footer />
  </main>
)}

export default LogIn