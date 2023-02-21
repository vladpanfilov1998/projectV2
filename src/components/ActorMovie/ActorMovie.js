import React from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getOneMovie, last5} from "../../store/movie.slice";

const ActorMovie = ({movie}) => {
    const {poster_path, title, release_date, id} = movie
    const dispatch = useDispatch()

    const dispatchActoractions = () => {
        dispatch(getOneMovie({id}))
        dispatch(last5({movie}))
    }

    return (
        <div>
            <Link to={'/movie'}>
                <div className={'card'} onClick={() => dispatchActoractions(id, movie)}>
                    <div>{title}</div>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                         alt=""/>
                    <div>{release_date}</div>
                </div>
            </Link>
        </div>
    );
};

export default ActorMovie;