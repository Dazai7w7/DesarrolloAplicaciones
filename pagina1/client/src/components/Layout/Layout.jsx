import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { useStyles } from '../../style/style'
import Header from './Header'
import MainMenu from './MainMenu'
import Footer from './Footer'

const Layout = ({ children }) => {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	return (
		<>
			<Header setOpen={setOpen} />
			<MainMenu open={open} setOpen={setOpen} />
			<Container maxWidth='lg' className={classes.container}>
				{children}
			</Container>
			<Footer />
		</>
	)
}

export default Layout