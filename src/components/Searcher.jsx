import React from 'react'
import "../styles/Searcher.css"

function Searcher({setSearcher}) {
    const handleSearcher = (e) =>{
        setSearcher(e.target.value);
    }
    
    return (
        <form className="searcher">
            <input type="search" name="buscador" placeholder="Buscá tu película favorita..." onChange={handleSearcher} />
        </form>
    )
}

export default Searcher
