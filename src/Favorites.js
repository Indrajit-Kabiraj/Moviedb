import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SingleContent from './SingleContent'
import './trending.css'
import CustomPagination from './Components/Pagination/CustomPagination.js'
import Genres from './Components/Genres/Genres.js'
import useGenre from './useGenre.js'

function Favorites() {
    const [movies,setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [selectedGenres,setSelectedGenres] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const genreTot = useGenre(selectedGenres);
    console.log(genreTot);

    const APIKEY = `https://api.themoviedb.org/3/discover/movie?api_key=f2d277071b3575e2362951ad0c7a09bf&sort_by=popularity.desc&page=${page}&with_genres=${genreTot}`;
    console.log(page)
    

    const getMovies = async (API)=> {
        const {data} = await axios.get(API);
        setMovies(data.results);
        setNumOfPages(data.total_pages);
      }
      console.log('totalPages: '+ numOfPages);
    useEffect(()=>{
        getMovies(APIKEY);
    },[genreTot,page])
    return (
        <div>
            <div className="pagetitle">
                Discover Movies
            </div>
            <Genres
            type = 'movie'
            genres = {genres}
            setGenres = {setGenres}
            selectedGenres = {selectedGenres}
            setSelectedGenres = {setSelectedGenres}
            setPage = {setPage}
            ></Genres>
            
            <div className="Trending">
                {movies && movies.map(movie=>(
                    <SingleContent
                    key={movie.id}
                    id={movie.id}
                    type = "movie"
                    vote_average = {movie.vote_average}
                    title = {movie.title}
                    release_date = {movie.release_date || movie.first_air_date}
                    poster_path = {movie.poster_path}
                    ></SingleContent>
                ))}
                </div>
            <CustomPagination setPage = {setPage} numOfPages={numOfPages}></CustomPagination>
        </div>
    )
}

export default Favorites
