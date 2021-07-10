import React from 'react'

const IMG_API = 'https://image.tmdb.org/t/p/w1280';

function Movie({title, overview , poster_path, vote_average}) {

    const setColor = (vote) => {
        if(vote>=8)
            return "green";
        else if(vote>=6)
            return "orange";
        else
            return "red";
    }

    return (
        <div className="movie">
            <img src = {(poster_path?IMG_API +poster_path:'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=378&q=80')}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${setColor(vote_average)}`}>{vote_average}</span>
            </div>

            <div className="movie-over hide">
                <h2>Overview of {title} :</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Movie;
