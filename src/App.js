import React, {useState,useEffect} from 'react'
import './index.css';
import Movie from './Movie'

const TRENDING_API = 'https://api.themoviedb.org/3/discover/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&query=';



function App() {
  const [movies,setMovies] = useState([]);
  const [movieName,setMovieName] = useState('');

  const getMovies = (API)=> {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }

  useEffect(() => {
    getMovies(TRENDING_API);
  },[])

  const handleOnSubmit = (e)=>{
    e.preventDefault();
    console.log(movieName);
    if(movieName){
      getMovies(SEARCH_API+movieName);
      setMovieName('');
    }
  }


  const handleOnChange = (e)=>{
    console.log(e.target.value);
    setMovieName(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <header>
          <div className="logo">
            <img src = "https://image.flaticon.com/icons/png/512/2184/2184561.png" className="logo-img"></img>
            <h3>Movie-DB</h3>
          </div>
          <input 
          className="search" 
          type="search" 
          placeholder="search...." 
          value = {movieName} 
          onChange={handleOnChange}/>
        </header> 
      </form>
      <div className="movie-container">
        {
          movies.map(movie=>(
            <Movie {...movie} key = {movie.id}></Movie>
          ))
        }
      </div>
    </>
  );
}

export default App;
