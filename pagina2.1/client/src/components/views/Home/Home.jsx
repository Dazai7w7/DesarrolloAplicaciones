import React from 'react'
import Layout from '../../Layout'
import { renderRoutes } from '../../../routes/RouteUtils'

const Home = props => {
    const { route } = props
    return (
        <Layout>
            {renderRoutes(route.routes)}
        </Layout>
    )
}

export default Home