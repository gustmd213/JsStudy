import React from "react";

const MoviePost = (data) => {
    const movies = data.data
    return(
    <div class ="movie">
        <img src= {movies.medium_cover_image} title={movies.title} alt={movies.title} />
        <h3 class = "movie__title">{movies.title}</h3>
        <h5 class = "movie__year">{movies.year}</h5>
        <p class="movie__summary">{movies.summary}</p>
    </div>
    );
}

export default MoviePost