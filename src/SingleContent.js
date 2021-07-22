import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import {img_300 , unavailable} from './config.js'
import './SingleContent.css';
import ContentModal from './ContentModal'

const useStyles = makeStyles((theme) => ({
    badge: {
      fontSize: 15,
      padding: '10px 10px',
    }
}));

function SingleContent({id,title,poster_path, vote_average,release_date,type}) {
    const classes = useStyles();
    console.log(id)
    return (
        <ContentModal type={type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average>6?"primary":"secondary"} classes={{ badge: classes.badge }}></Badge>
            <img className="poster" src ={poster_path?`${img_300}${poster_path}`:unavailable} alt = {title}></img>
            <b className="title">{title}</b>
            <span className="subtitle">{release_date}
                <span className="subtitle">{type==="tv"?"TV Series":"Movie"}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
