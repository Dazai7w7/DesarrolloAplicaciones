import React from 'react'
import Layout from '../../Layout'
import { renderRoutes } from '../../../routes/RouteUtils'

const Home = props => {
    const { route } = props
    return (
        <Layout>
            <div>
                <h1>SE HA LOGEADO EXISTOSAMENTE!!</h1>
            </div>
            {renderRoutes(route.routes)}
        </Layout>
    )
}

export default Home