import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
            </Routes>
        </Router>
    )
}

export default routes
