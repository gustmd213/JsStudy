import React, { useEffect, useState } from "react";
import axios from "axios";
import Proptypes from "prop-types";
import MoviePost from "./Compnent/Movie";
const API_URL = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json";

const App = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [movies, setMovies] = useState([]);

  const getMovies = async () => {
    setMovies((await axios.get(API_URL)).data.data.movies);
    setIsLoading(false);
  }

  useEffect( () => {
    getMovies();
  },[]);

  console.log(movies, isLoading);

  return(
    <section class = "container">
      {isLoading ? 
      <div>
      <span class= "loader">now Loading...</span>
      </div>
      :
      movies.map(props => (
        <MoviePost key = {movies.indexOf(props)} data ={props}/>
      ))
      }
    </section>
  );
}


 export default App;