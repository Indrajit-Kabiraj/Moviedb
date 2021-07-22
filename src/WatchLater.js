import React from 'react'
import TextField from '@material-ui/core/TextField';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SingleContent from './SingleContent'
import CustomPagination from './Components/Pagination/CustomPagination.js'
import axios from 'axios'
import { useState,useEffect } from 'react'

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: "#fff",
      },
    },
});

function WatchLater() {

    const [category,setCategory] = useState(0);
    const [page,setPage] = useState(1);
    const [numOfPages, setNumOfPages] = useState();
    const [datas,setDatas] = useState([]);
    const [text,setText] = useState("Batman");

    const fetchContent = async ()=>{
        console.log(category)
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${category?"tv":"movie"}?api_key=f2d277071b3575e2362951ad0c7a09bf&language=en-US&query=${text}&page=${page}&include_adult=false`)
        setDatas(data.results)
        console.log(data);
        setNumOfPages(data.total_pages)
        console.log(datas);
    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchContent();
        // eslint-disable-next-line
    }, [category, page]);

    return (
        <div>
            <div style={{marginTop:'100px'}}>
                <ThemeProvider theme={theme}>
                    <div style={{display: 'flex' , margin:'15px 0' , width:'100%' , justifyContent:'center' , alignItems: 'center'}}>
                        <TextField
                            style={{ flex: 1 }}
                            className="searchBox"
                            label="Search"
                            variant="filled"
                            onChange = {(e)=>setText(e.target.value)}
                        />
                
                        <Button onClick={fetchContent} variant="contained" style={{ marginLeft: 10 }}>
                            <SearchIcon fontSize="large" ></SearchIcon>
                        </Button>
                    </div>
                    <div style={{display: 'flex' , margin:'15px 0' , width:'100%' , justifyContent:'center' , alignItems: 'center'}}>
                        <Tabs 
                        onChange = {(event, newValue)=>{
                            setPage(1);
                            setCategory(newValue);
                            console.log(newValue);
                        }}
                        value = {category} indicatorColor="secondary" textColor="primary">
                            <Tab style={{width:"50%" , fontsize:'20px'}} label = "Search Movies"></Tab>
                            <Tab style={{width:"50%" , fontsize:'20px'}} label = "Search Series"></Tab>
                        </Tabs>
                    </div>
                </ThemeProvider>
            <div className="pagetitle">
            {text &&
            !datas?(category ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>):`Discover ${category?"Tv Seies":"Movies"}`}
            </div>
            
            <div className="Trending">
                {datas && datas.map(data=>(
                    <SingleContent
                    key = {data.id}
                    id = {data.id}
                    type = {category?"tv":"movie"}
                    vote_average = {data.vote_average}
                    title = {data.title || data.name}
                    release_date = {data.release_date || data.first_air_date}
                    poster_path = {data.poster_path}
                    ></SingleContent>
                ))}
                
                </div>
            <CustomPagination setPage = {setPage} numOfPages={numOfPages}></CustomPagination>
            </div>
        </div>
    )
}

export default WatchLater
