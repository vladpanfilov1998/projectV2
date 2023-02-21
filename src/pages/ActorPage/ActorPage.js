import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import ActorMovie from "../../components/ActorMovie/ActorMovie";
import './ActorPage.css'
import {getMovies, pagination} from "../../store/movie.slice";

const ActorPage = () => {
    const {
        uniqactor: {name, birthday, biography, movie_credits, profile_path, popularity}, pageId
    } = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    const back = (pageId) => {
        dispatch(getMovies({...pageId, page: 1, id: ''}))
        dispatch(pagination({...pageId, page: 1, id: '', name: 'All Movies'}))
    }

    return (<div className={'actormain'}>
        <div className={'actorgeneral'}>
            <div className={'left'}>
                <img src={`https://image.tmdb.org/t/p/w400${profile_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                     alt=""/>
            </div>
            <div className={'right'}>
                <h1>{name}</h1>
                <div>{birthday}</div>
                <div className={'bio'}>{biography}</div>
                <div>Rating:{popularity}</div>
            </div>
        </div>
        <div className={'h2'}><h2>Movies</h2></div>
        <div className={'actors'}>
            {movie_credits && movie_credits.cast.filter(movie => movie.poster_path !== null).map(movie =>
                <ActorMovie key={movie.id} movie={movie}/>)}
        </div>
        <Link to={'/movies'}>
            <button className={'backhome'} onClick={() => back(pageId)}>Back to All Movies</button>
        </Link>
    </div>);
};

export default ActorPage;