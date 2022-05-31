import React from 'react'
import './Footer.css'
import  {AppBar, Toolbar} from '@material-ui/core'
import { Container, Typography } from '@material-ui/core'
import { useStyles } from '../../../style/style'

const Footer = () => {
    const classes = useStyles()

    return (
        <AppBar color="black">
        <Toolbar>
            <footer className={classes.footer}>
                <Container maxWidth='sm'>
                    <Typography align='center'>TheCapibaras © {new Date().getFullYear()}</Typography>
                </Container>
            </footer>
        </Toolbar>
        </AppBar>
    )
}

export default Footer
