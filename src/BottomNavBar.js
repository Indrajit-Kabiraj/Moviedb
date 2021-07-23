import React from 'react';
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { grey } from '@material-ui/core/colors';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles({
  root: {
    width: '100%',
    background: "rgb(53, 51, 51)",
    color: 'white',
    position: "fixed",
    bottom: "0",
    zIndex:"100",
  },
});

export default function BottomNavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  useEffect(()=>{
    if(value==0){
      history.push('MovieDb/');
    }
    else if(value==1){
      history.push('MovieDb/movies');
    }
    else if(value==2){
      history.push('MovieDb/series');
    }
    else{
      history.push('MovieDb/search');
    }
  },[value]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color: grey[100] }} label="Trending"  icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{ color: grey[100] }} label="Movies"  icon={<MovieIcon />} />
      <BottomNavigationAction style={{ color: grey[100] }} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{ color: grey[100] }} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}