import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Account from './pages/Account'
import Error from './pages/Error'
import Footer from './Footer'

function Rutas() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<Error />}/>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}

export default Rutas
