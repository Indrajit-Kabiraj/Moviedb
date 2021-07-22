import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import './paging.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const theme = createMuiTheme({
    palette: {
      type: 'dark',
      // primary: {
      //   main: "#fff",
      // },
    },
  });

export default function CustomPagination({setPage,numOfPages = 10}) {
  const classes = useStyles();
    const handlePagechange = (page) => {
        setPage(page);
        window.scroll(0,0);
    }

  return (
    <ThemeProvider theme={theme}>
        <div className='paging'>
            <div className={classes.root}>
            <Pagination color="primary" count={numOfPages} onChange={(e)=>handlePagechange(e.target.textContent)} />
            </div>
        </div>
    </ThemeProvider>
  );
}