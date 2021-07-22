const useGenre = (selectedGenres)=>{
    if(selectedGenres.length<1)return ""
    const genres = selectedGenres.map((g)=>g.id);
    return genres.reduce((acc,curr) => acc + "," +curr);
}

export default useGenre;