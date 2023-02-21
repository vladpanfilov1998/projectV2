import React from 'react';
import {useSelector} from "react-redux";

import Movie from "../../components/Movie/Movie";
import './FavoritesPage.css'

const FavoritesPage = () => {
    const {favorites} = useSelector(state => state['movieReducer'])

    return (
        <div className={'favmain'}>
            <div className={'favtitle'}>FAVORITES</div>
            <div className={'favcards'}>
                {favorites.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default FavoritesPage;