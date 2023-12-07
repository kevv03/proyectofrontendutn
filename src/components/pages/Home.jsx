import React from 'react'
import { useState, useEffect } from 'react';
import SyncLoader from "react-spinners/SyncLoader";
import "../../styles/Home.css"

function Home() {
    const URL = "http://localhost:3000/movies";
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch(URL)
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(_err => setIsError(true))
        .finally(() => setIsLoading(false))
    },[])

    const number = Math.floor(Math.random() * 50) + 1;
    const numbertwo = number + 4;

    return (
        <>
            <main>
                <h1>Nuestras recomendaciones</h1>
                <section className="moviesCards">
                    {isLoading? <SyncLoader color="#362f2f" loading margin={0} size={20} />
                            :
                        isError? <h5>ERROR...</h5>
                            :
                        movies.slice(number, numbertwo).map((movie) =>(
                            <div className="card" key={movie.id}>
                                <img src={movie.poster} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p>👨‍💼Director: {movie.director}</p>
                                <p>⭐Calificación: {movie.rate}</p>
                            </div>
                        ))
                    }
                </section>
            </main>
        </>
    )
}

export default Home
