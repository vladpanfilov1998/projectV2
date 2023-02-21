import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import './MoviePage.css'
import Actor from "../../components/Actor/Actor";
import {getMovies, pagination} from "../../store/movie.slice";

const MoviePage = () => {
    const {uniqmovie, pageId} = useSelector(state => state['movieReducer'])
    const {genres, poster_path, title, overview, popularity, images, release_date, casts} = uniqmovie
    const dispatch = useDispatch()

    let backimage = ''
    if (images?.backdrops.length < 1) {
        backimage = 'https://image.tmdb.org/t/p/original/jRSAkKG9QSu6Nc1zvI3ejmgLshe.jpg?api_key=e77bd741cd0b705c1841df139925cbcd&language=en-US'
    } else {
        backimage = `https://image.tmdb.org/t/p/original${images?.backdrops[0].file_path}?api_key=e77bd741cd0b705c1841df139925cbcd`
    }

    const back = (pageId) => {
        dispatch(getMovies({...pageId, page: 1, id: ''}))
        dispatch(pagination({...pageId, page: 1, id: '', name: 'All Movies'}))
    }

    return (
        <div className={'backimage'} style={{
            backgroundImage: `url(${backimage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat',
            height: "100vh",
            overflow: "scroll"
        }}>
            <div className={'general'}>
                <div className={'left'}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                         alt=""/>
                </div>
                <div className={'right'}>
                    <h1>{title}</h1>
                    <div>Genres</div>
                    <div>{genres && genres.map(genre => <div key={genre.id}>{genre.name}</div>)}</div>
                    <div>{overview}</div>
                    <div>Rating:{popularity}</div>
                    <div>Release date:{release_date}</div>
                </div>
            </div>
            <div className={'h2'}><h2>ACTORS</h2></div>
            <div className={'actors'}>
                {casts && casts.cast.filter(actor => actor.profile_path !== null).map(actor => <Actor
                    key={actor.cast_id} actor={actor}/>)}
            </div>
            <div className={'h2'}><h2>IMAGES</h2></div>
            <div className={'images'}>{images && images.backdrops.map(image => <img key={image.file_path}
                                                                                    src={`https://image.tmdb.org/t/p/w300${image.file_path}?api_key=e77bd741cd0b705c1841df139925cbcd`}
                                                                                    alt=""/>)}</div>
            <Link to={'/movies'}>
                <button className={'backhome'} onClick={() => back(pageId)}>Back to All Movies</button>
            </Link>
        </div>
    );
};

export default MoviePage;