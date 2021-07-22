import React from 'react'
import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

function Genres({type, genres ,  setGenres , selectedGenres , setSelectedGenres , setPage}) {

    const APIKEY = 'f2d277071b3575e2362951ad0c7a09bf';

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const handleDelete = (genre) => {
        setGenres([...genres, genre]);
        setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
        setPage(1);
    };

    const fetchGenres = async ()=>{
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/genre/${type}/list?api_key=${APIKEY}&language=en-US`
        );
        setGenres(data.genres);
        console.log(genres);
    }

    useEffect(()=>{
        fetchGenres();

        return () => {
            setGenres({}); // unmounting
        };
    },[])

    return (
        <div>
            {/* <h1>Select Genres: </h1> */}
            {selectedGenres.map((genre)=>(
                <Chip
                style = {{margin: 4}}
                key = {genre.id}
                label = {genre.name}
                clickable
                color="primary"
                size="small"
                onDelete = {()=>handleDelete(genre)}
                ></Chip>
            ))}
            {genres.map((genre)=>(
                <Chip
                style = {{margin: 4}}
                key = {genre.id}
                label = {genre.name}
                clickable
                size="small"
                onClick = {()=>handleAdd(genre)}
                
                ></Chip>
            ))}
            
        </div>
    )
}

export default Genres
