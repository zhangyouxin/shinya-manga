import React from 'react'
import { Router, Route, Link } from 'react-router'
import MainPage from 'container/mainPage'

export default () =>(
    <Router>
        <Route path="/" component={MainPage} />
    </Router>
)