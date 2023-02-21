import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovies, pagination} from "../../store/movie.slice";
import './Genre.css'

const Genre = ({genre: {id, name}}) => {
    const {pageId} = useSelector(state => state['movieReducer'])
    const dispatch = useDispatch()

    const genreFunction = (pageId) => {
        dispatch(getMovies({...pageId, page: 1, id: id}))
        dispatch(pagination({...pageId, page: 1, id: id, name: name}))
    }

    return (
        <div>
            <button className={'button'} onClick={() => genreFunction(pageId)}>{name}</button>
        </div>
    );
};

export default Genre;