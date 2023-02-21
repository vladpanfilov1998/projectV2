import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getOneMovie} from "../../store/movie.slice";
import './Last5.css'

const Last5 = ({movie}) => {
    const {id, poster_path} = movie
    const dispatch = useDispatch()

    return (
        <Link to={'/movie'}>
            <div className={'lastcard'} onClick={() => dispatch(getOneMovie({id}))}>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
            </div>
        </Link>
    );
};


export default Last5;