import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import "../styles/PostForm.css"

function PostForm() {
    const url = "http://localhost:3000/movies";
    const [movie, setMovie] = useState({
        title: "",
        release_date: "",
        director: "",
        length: "",
        overview: "",
        rate: "",
        language: "",
        genre: ""
    });
    const [posterName, setPosterName] = useState();

    const handleTextChange = (e) =>{
        setMovie((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleFileChange = (e) => {
        setPosterName(e.target.files[0]);
    };

    const handleSubmit = async (e) => {

        const formData = new FormData();
        formData.append('title', movie.title);
        formData.append('release_date', movie.release_date);
        formData.append('director', movie.director);
        formData.append('length', movie.length);
        formData.append('overview', movie.overview);
        formData.append('rate', movie.rate);
        formData.append('language', movie.language);
        formData.append('genre', movie.genre);
        formData.append('posterName', posterName);
        
        try{
            await axios.post(url, formData, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6ImhvbGFzZcOxb3Igc2XDsW9yIiwiZW1haWwiOiJrZXZpbkBnbWFpbC5jb20iLCJpYXQiOjE3MDEzODYwMDYsImV4cCI6MzMyMzczODYwMDZ9.x0lEtaSX9A6aaJ7xJaIpEZYpFt3ozArB8UKXo9yID6c',
                    'Content-Type': 'multipart/form-data'
                },
            });

            const message = "La película se ha cargado exitosamente"
            return message;
        }catch (error){
            const problem = "Ha ocurrido un error! Intentelo nuevamente!";
            return problem;
        }
    };

    return (
        <>
            <h3>Cargar una nueva película</h3>
            <section className="formulario">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Titulo:</label>
                        <input type="text" name="title" id="title" onChange={handleTextChange}/>
                    </div>
                    <div>
                        <label htmlFor="release_date">Fecha de estreno:</label>
                        <input type="text" name="release_date" id="release_date" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="director">Director:</label>
                        <input type="text" name="director" id="director" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="length">Duración:</label>
                        <input type="text" name="length" id="length" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="overview">Descripción:</label>
                        <textarea className="descripcion" name="overview" id="overview" cols="10" rows="10" onChange={handleTextChange} />
                    </div>
                    <div>
                    <label htmlFor="rate">Puntuación:</label>
                    <input type="text" name="rate" id="rate" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="language">Idioma original:</label>
                        <input type="text" name="language" id="language" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="genre">Géneros:</label>
                        <input type="text" name="genre" id="genre" onChange={handleTextChange} />
                    </div>
                    <div>
                        <label htmlFor="posterName">Imágen:</label>
                        <input type="file" name="posterName" id="posterName" onChange={handleFileChange} />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    )
}

export default PostForm