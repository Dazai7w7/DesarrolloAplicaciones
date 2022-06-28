import React, { useState } from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fondo from './fondo.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import axios from 'axios'
import "./Login.css"
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        height: '500px',
        marginTop: theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
            marginTop: 0,
            width: '100%',
            height: '100%'
        }
    },
    div: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(3, 0, 2)
    }
}))

const Login = () => {
    const [body, setBody] = useState({ username: '', password: '' })
    const { push } = useHistory()
    const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }


    const onSubmit = () => {
        axios.post('http://localhost:4000/api/login', body)
            .then(({ data }) => {
                localStorage.setItem('auth', '"yes"')
                push('/app')
            })
            .catch(({ response }) => {
                console.log(response.data)
            })
    }

    const onSubmitRegister = () => {
        push('/register')
    }

    return (
        <Grid container component='main' className={classes.root}>
            <CssBaseline />
            <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>Bienvenidos</Typography>
                    <form className={classes.form}>
                        <TextField
                            fullWidth
                            autoFocus
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Username'
                            value={body.username}
                            onChange={inputChange}
                            name='username'
                        />
                        <TextField
                            fullWidth
                            type='password'
                            color='primary'
                            margin='normal'
                            variant='outlined'
                            label='Password'
                            value={body.password}
                            onChange={inputChange}
                            name='password'
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={onSubmit}
                        >
                            Ingresar
                        </Button>
                        <h1>¿No tienes cuenta?</h1>
                        <Button
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            onClick={onSubmitRegister}
                        >
                            Registrar
                        </Button>
                    </form>
                </div>
            </Container>
        </Grid>
    )
}

export default Login
