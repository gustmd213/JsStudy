import React, {useEffect, useState} from 'react';
import propTypes, { array, number } from 'prop-types';

const App = () => {
  let movieList = [
    {
      movieName: "2001: A Space Odyssey",
      movieposter:"https://media.timeout.com/images/105455969/1024/768/image.jpg",
      releasesDates: "April 2, 1968"
    },
    {
      movieName: "The Godfather",
      movieposter:"https://media.timeout.com/images/105455970/1024/768/image.jpg",
      releasesDates: "May 25, 1977"
    },
    {
      movieName: "Citizen Kane",
      movieposter:"https://media.timeout.com/images/105455971/1024/768/image.jpg",
      releasesDates: "May 1 1941"
    },
    {
      movieName: "Seven Samurai",
      movieposter:"https://media.timeout.com/images/101714537/1024/768/image.jpg",
      releasesDates: "April 26, 1954"
    },
    {
      movieName: "Star Wars",
      movieposter:"https://media.timeout.com/images/105456000/1024/768/image.jpg",
      releasesDates: ""
    },
    {
      movieName: "PULP Fiction",
      movieposter:"https://media.timeout.com/images/105456005/1024/768/image.jpg",
      releasesDates: "September 10, 1994"
    },
    {
      movieName: "The Truman Show",
      movieposter:"https://media.timeout.com/images/101630177/1024/768/image.jpg",
      releasesDates: "October 24 1998"
    },
  ]
  let [index, setIndex] = useState(0);
  let [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  const add = () => {
    if (index === movieList.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(index+1)
    }
    console.log(index);
  }
  const minus = () =>{
    if (index === 0) {
      setIndex(movieList.length - 1)
    }
    else {
      setIndex(index-1)
    }
    console.log(index);
  }
    return(
      <div>
        <p>{isLoading ? "Loading...": "We are ready!"}</p>
        <MoviePost idx={index} listOfMoive={movieList}/>
        <button onClick={minus}>before</button>
        <button onClick={add}>next</button>
      </div>
    );
}

function MoviePost ({idx, listOfMoive}) {
  let index = idx;
  let list = listOfMoive

  return(
  <div>
    <h4>Movie Title: {list[index].movieName}</h4>
    <h5>released in: {list[index].releasesDates}</h5>
    <img src= {list[index].movieposter} height= "350px"></img>
  </div>
  );
}

MoviePost.propTypes = {
  idx: number,
  listOfMoive: array
}

export default App;