import React from 'react'
import { useEffect, useState } from 'react';
import Searcher from '../Searcher';
import MoviesList from '../MoviesList';
import Error from "./Error"
import SyncLoader from "react-spinners/SyncLoader";
import "../../styles/Movies.css"

function Movies() {
    const url = "http://localhost:3000/movies";
    const [movies, setMovies] = useState([]);
    const [searcher, setSearcher] = useState("");
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
        <>
            <main>
                <h1>Nuestras películas</h1>
                <Searcher setSearcher={setSearcher}/>
                <section className="moviesCards">
                    {isError? <Error />
                    :
                    isLoading? <SyncLoader color="#362f2f" loading margin={0} size={20} />
                    :
                    movies.filter((mov)=> mov.director.toLocaleLowerCase().includes(searcher.toLocaleLowerCase())).map((movie) =>(
                        <MoviesList movie={movie} key={movie.id}/>
                    ))
                    }
                </section>
            </main>
        </>
    )
}

export default Movies
