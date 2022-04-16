
import { AppBar,ThemeProvider, Toolbar,Box,Typography,Link,Container, Switch, Badge } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import Head from 'next/head'
import React, { useContext } from 'react'
import NextLink from 'next/link'
import CssBaseline from '@mui/material/CssBaseline';
import classes from '../utils/classes'
import { Store } from '../utils/Store'
import jsCookie from 'js-cookie'


function Layout({title,description,children}) {
    const {state,dispatch} = useContext(Store)
    const {darkMode, cart} = state
    const theme = createTheme({
        components: {
          MuiLink: {
            defaultProps: {
              underline: 'hover',
            },
          },
        },
        typography: {
          h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
        },
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
           main: '#f0c000'
           // main: 	'#FFC0CB'
          },
          
          secondary: {
            main: '#208080',
          },
        },
      });
  const darkModeChangeHandler =() => {
      dispatch({type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON"})
      const newDarkMode = !darkMode;
      jsCookie.set('darkMode', newDarkMode ? 'ON' : 'OFF')
  }
  return(
      <>
      <Head>
      <title>{title ? `${title} - Sanity Amazona`: 'Sanity Amazona'}</title>
      {description && <meta name='description' content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={classes.appbar}>
      <Toolbar  sx={classes.toolbar}>
      <Box display="flex" alignItem="center">
        <NextLink href="/" passHref>
            <Link>
                <Typography sx={classes.brand}>amazona</Typography>
            </Link>
        </NextLink>
        </Box>
        <Box>
        <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
        <NextLink href="cart" passHref> 
        <Typography component="span" >
        {cart.cartItems.length> 0 ? <Badge color="secondary" badgeContent={cart.cartItems.length}>
       <span  style={{color: "white"}}>Cart</span>
        </Badge> : <span style={{color: "white"}}> Cart</span>}
        </Typography>
        </NextLink>
        </Box>
      </Toolbar>
      </AppBar>
   
     
      <Container component="main" sx={classes.main}>
      {children}
      </Container>
      <Box component="footer" sx={classes.footer}>
      <Typography>All rights reserved. Sanity Amazona</Typography>
      </Box>
      </ThemeProvider>
      </>
  )
}

export default Layout


