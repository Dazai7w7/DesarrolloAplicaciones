import React from 'react'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router'


const Header = ({ setOpen }) => {
    const history = useHistory()
    
    return (
        <AppBar color='secondary'>
            <Toolbar>
                <Button variant='text' color='inherit' onClick={() => {
                    localStorage.clear()
                    history.push('/login')
                }}>Log out</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header
