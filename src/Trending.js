import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SingleContent from './SingleContent'
import './trending.css'
import CustomPagination from './Components/Pagination/CustomPagination.js'

function Trending() {
    const [movies,setMovies] = useState([]);
    const [page,setPage] = useState(1);
    const [numOfPages,setNumOfPages] = useState();

    const APIKEY = `https://api.themoviedb.org/3/trending/all/week?api_key=f2d277071b3575e2362951ad0c7a09bf&page=${page}`;
    console.log(page)
    

    const getMovies = (API)=> {
        fetch(API)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setMovies(data.results);
        })
      }

    useEffect(()=>{
        getMovies(APIKEY);
    },[page])
    return (
        <div>
            <div className="pagetitle">
                Trending Today
            </div>
            <div className="Trending">
                {movies && movies.map(movie=>(
                    <SingleContent
                    key={movie.id}
                    id={movie.id}
                    type = {movie.media_type}
                    vote_average = {movie.vote_average}
                    title = {movie.title || movie.name}
                    release_date = {movie.release_date || movie.first_air_date}
                    poster_path = {movie.poster_path}
                    ></SingleContent>
                ))}
                </div>
            <CustomPagination setPage = {setPage}></CustomPagination>
        </div>
    )
}

export default Trending
