import React, { lazy } from 'react'
import { HomeRedirect } from './RouteUtils'
import RouteController from './RouteController'
import Imc from '../components/views/Calculator'
const Dashboard = lazy(() => import('../components/views/Dashboard'))
const Login = lazy(() => import('../components/views/Login'))
const About = lazy(() => import('../components/views/About'))
const Register = lazy(() => import('../components/views/Register'))
const Home = lazy(() => import('../components/views/Home'))
const Calculator = lazy(() => import('../components/views/Calculator'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/register",
        exact: true,
        render: props => <Register {...props} />
    },
    
    {
        path:"/calculator",
        exact: true,
        render: props => <RouteController component={Home} {...props} />,
        routes: [{
            path: "/calculator",
            exact: true,
            render: props => <RouteController component= {Calculator} {...props}/>

        }
    ]
    },

    {
        path:"/about",
        exact: true,
        render: props => <RouteController component= {Home} {...props} />,
        routes: [{
            path: "/about",
            exact: true,
            render: props => <RouteController component= {About} {...props}/>
        }
    ]
        
    },
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
            
        ]
    },
]

   

export default routes