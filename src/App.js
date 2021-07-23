import React, {useState,useEffect} from 'react'
import './index.css';
import Movie from './Movie'
import { Container } from "@material-ui/core";
import BottomNavBar from './BottomNavBar';
import {BrowserRouter, Route, Switch , HashRouter} from 'react-router-dom';
import Header from './Header';
import Trending from './Trending';
import Favorites from './Favorites';
import Recents from './Recents';
import WatchLater from './WatchLater';


const TRENDING_API = 'https://api.themoviedb.org/3/discover/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&query=';



function App() {
  // const [movies,setMovies] = useState([]);
  // const [movieName,setMovieName] = useState('');

  // const getMovies = (API)=> {
  //   fetch(API)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }

  // useEffect(() => {
  //   getMovies(TRENDING_API);
  // },[])

  // const handleOnSubmit = (e)=>{
  //   e.preventDefault();
  //   console.log(movieName);
  //   if(movieName){
  //     getMovies(SEARCH_API+movieName);
  //     setMovieName('');
  //   }
  // }
  
  // const handleHome = ()=>{
  //   getMovies(TRENDING_API);
  // }

  // const handleOnChange = (e)=>{
  //   console.log(e.target.value);
  //   setMovieName(e.target.value);
  // }

  return (
    <HashRouter>
      <Header></Header>
      <div className="movie-container">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact></Route>
            <Route path='/movies' component={Favorites}></Route>
            <Route path='/series' component={Recents}></Route>
            <Route path='/search' component={WatchLater}></Route>
          
          </Switch>
        </Container>
        <BottomNavBar>
        </BottomNavBar>
      </div>
      
    
    </HashRouter>
  );
}

export default App;
