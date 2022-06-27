import React from 'react'


import { Container, Typography } from '@material-ui/core'
import { useStyles } from '../../../style/style'

const Footer = () => {
    const classes = useStyles()

    return (
        
            <div className={classes.footer}>
                <Container maxWidth='sm'>
                    <Typography align='center'>TheCapibaras © {new Date().getFullYear()}</Typography>
                </Container>
            </div>
    )
}

export default Footer
