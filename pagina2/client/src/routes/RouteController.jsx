import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const RouteController = props => {
    const { component: Component, isAuthenticated, ...rest } = props

    const [isAuth, setIsAuth] = useState(true)

    const init = () => {
        if (!localStorage.getItem("auth")) {
            setIsAuth(false)
        } else {
            const auth = JSON.parse(localStorage.getItem('auth'))
            if (auth === 'yes') {
                setIsAuth(true)
            } else {
                setIsAuth(false)
            }
        }
    }
    useEffect(init, [])

    return isAuth ? <Component {...rest} /> : <Redirect to='/login' />
}

export default RouteController