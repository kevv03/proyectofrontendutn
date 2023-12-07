import React from 'react'
import {NavLink} from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    return (
        <>
            <nav>
                <h2 className="logotipo">TheBestMovies</h2>
                <NavLink to="/" className={({isActive}) =>(isActive? "active" : "noActive")}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({isActive}) =>(isActive? "active" : "noActive")}>
                    Peliculas
                </NavLink>
                <NavLink to="/account" className={({isActive}) =>(isActive? "active" : "noActive")}>
                    Usuario
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar
