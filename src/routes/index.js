import React from 'react'
import {
	Route,
	Redirect,
	IndexRoute
} from 'react-router'
import App from '../components/App'
import Me from '../components//pages/Me'
import Home from  '../components/pages/Home'

const Routes = (
    <Route path = '/' component ={App} >
        <IndexRoute component = {Home} />
        <Route path='home' component = {Home} />
        <Route path='me' component = { Me }/>
    </Route>
)

export default Routes