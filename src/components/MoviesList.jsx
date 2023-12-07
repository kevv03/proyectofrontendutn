import React from 'react'
import { useState } from 'react';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import "../styles/MoviesList.css"

function MoviesList({movie}) {
    const[isFullDescription, setIsFullDescription] = useState(false);
    const handleShow = () => {
        setIsFullDescription(!isFullDescription);
    }

    const onDelete = () => {
        fetch(`http://localhost:3000/movies/${movie.id}`, {
            method: "DELETE",
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ImhvbGFzZcOxb3Igc2XDsW9yIiwiZW1haWwiOiJrZXZpbkBnbWFpbC5jb20iLCJpYXQiOjE3MDEzODYwMDYsImV4cCI6MzMyMzczODYwMDZ9.x0lEtaSX9A6aaJ7xJaIpEZYpFt3ozArB8UKXo9yID6c'
            }
        })

        window.location.reload();
    }

    return (
        <div className="card">
            <div>
                <img src={movie.poster} alt={movie.title}/>
            </div>
            <h3>{movie.title}</h3>
            <div className="desc">
                {isFullDescription ?
                    <span>{movie.overview}<BsFillCaretUpFill onClick={handleShow} className="btn" /></span>
                :
                    <span>{movie.overview.slice(0,100)}...<BsFillCaretDownFill onClick={handleShow} className="btn" /></span>
                }
            </div>
            <div>
                <p>👨‍💼Director: {movie.director}</p>
                <p>📣Idioma: {movie.language}</p>
                <p>⏳Duración: {movie.length}</p>
                <p>⭐Calificación: {movie.rate}</p>
                <p>🎬Estreno: {movie.release_date}</p>
                <p>🤓Generos: {movie.genres}</p>
            </div>
            <div>
                <button onClick={onDelete}>Borrar</button>
            </div>
        </div>
    )
}

export default MoviesList
