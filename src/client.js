import React from 'react'
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router'
import Routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

render(
    <Router history={browserHistory}
            onUpdate={() => window.scrollTo(0, 0)}>
        {Routes}
    </Router>
    ,document.getElementById('root')
)