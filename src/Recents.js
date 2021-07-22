import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import SingleContent from './SingleContent'
import './trending.css'
import CustomPagination from './Components/Pagination/CustomPagination.js'
import Genres from './Components/Genres/Genres.js'
import useGenre from './useGenre.js'

function Recents() {
    const [series,setSeries] = useState([]);
    const [page,setPage] = useState(1);
    const [genres,setGenres] = useState([]);
    const [selectedGenres,setSelectedGenres] = useState([]);
    const [numOfPages, setNumOfPages] = useState();

    const genreTot = useGenre(selectedGenres);
    console.log(genreTot);

    const APIKEY = `https://api.themoviedb.org/3/discover/tv?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreTot}&with_watch_monetization_types=flatrate&page=${page}`;
    console.log(page)
    

    const getMovies = async (API)=> {
        console.log(API)
        const {data} = await axios.get(API);
        setSeries(data.results);
        setNumOfPages(data.total_pages);
        console.log(data)
      }
      console.log('totalPages: '+ numOfPages);
    useEffect(()=>{
        getMovies(APIKEY);
    },[genreTot,page])
    return (
        <div>
            <div className="pagetitle">
                Discover Series
            </div>
            <Genres
            type = 'tv'
            genres = {genres}
            setGenres = {setGenres}
            selectedGenres = {selectedGenres}
            setSelectedGenres = {setSelectedGenres}
            setPage = {setPage}
            ></Genres>
            
            <div className="Trending">
                {series && series.map(show=>(
                    <SingleContent
                    key={show.id}
                    id={show.id}
                    type = "tv"
                    vote_average = {show.vote_average}
                    title = {show.name}
                    release_date = {show.release_date || show.first_air_date}
                    poster_path = {show.poster_path}
                    ></SingleContent>
                ))}
                </div>
            <CustomPagination setPage = {setPage} numOfPages={numOfPages}></CustomPagination>
        </div>
    )
}

export default Recents
