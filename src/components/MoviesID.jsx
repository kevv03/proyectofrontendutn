import React from 'react'
import { useState, useEffect } from 'react';
import Error from './pages/Error';
import SyncLoader from "react-spinners/SyncLoader";

function MoviesID() {

    const url = "http://localhost:3000/movies";
    const [movies, setMovies] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(_err => setIsError(true))
        .finally(()=>setIsLoading(false))
    },[])

    return (
        <section>
            {isError? <Error />
                :
            isLoading? <SyncLoader color="#362f2f" loading margin={0} size={20} />
                :
            movies.map((movie) =>(
                <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                </tr>
            ))
            }
        </section>
    )
}

export default MoviesID
