import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainPage from './container/mainPage'
import Btn from './container/button'

export default () =>(
    <BrowserRouter>
        <Route path="/" component={MainPage} />
        <Route path="/btn/" component={Btn} />
    </BrowserRouter>
)