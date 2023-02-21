import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import './Actor.css'
import {getOneActor} from "../../store/movie.slice";

const Actor = ({actor: {name, character, profile_path, id}}) => {
    const dispatch = useDispatch()

    return (
        <Link to={'/actor'}>
            <div className={'actorcard'} onClick={() => dispatch(getOneActor({id}))}>
                <div>{name}</div>
                <img src={`https://image.tmdb.org/t/p/w200${profile_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
                <div>{character}</div>
            </div>
        </Link>
    );
};

export default Actor;