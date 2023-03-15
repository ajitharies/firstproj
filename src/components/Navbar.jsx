import { AppBar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar position='static'>
        <toolbar>
            <Typography><h2>Home page</h2>
                <Button color='inherit' variant='inherit'><Link to='/' style={{color:'white',textDecoration:'none',backgroundColor:'none'}} >Login</Link></Button>
                <Button color='inherit' variant='inherit'><Link to='/signup'style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>signup</Link></Button>
                <Button color='inherit' variant='inherit'><Link to='/contacts'style={{color:'white',textDecoration:'none',backgroundColor:'none'}}>contacts</Link></Button>
            </Typography>
        </toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
