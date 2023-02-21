import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getGenres, getMovies, pagination} from "../../store/movie.slice";
import Genre from "../Genre/Genre";
import './Genres.css'
import {Link} from "react-router-dom";

const Genres = () => {
    const {genres, pageId} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGenres())
    }, [])

    const allFunc = (pageId) => {
        dispatch(getMovies({...pageId, page: 1, id: ''}))
        dispatch(pagination({...pageId, page: 1, id: '', name: 'All Movies'}))
    }

    return (
        <div className={'top'}>
            <div className={'top-left'}>
                <button className={'allbutton'} onClick={() => allFunc(pageId)}>All</button>
            </div>
            <div className={'genres'}>
                {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
            <div className={'top-left'}>
                <Link to={'/favorites'}>
                    <button className={'allbutton'}>Favorites</button>
                </Link>
            </div>
        </div>
    );
};

export default Genres;