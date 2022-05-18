import React, { lazy } from 'react'
import RouteController from './RouteController'
const Login = lazy(() => import('../components/views/Login'))
const Home = lazy(() => import('../components/views/Home'))

const routes = [
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/home",
        render: props => <RouteController component={Home} {...props} />
    }
]

export default routes