import {axiosService} from "./axios.service";

import {urls} from "../urls/urls";

export const moviesService = {
    getAllMovies: (page, id) => axiosService.get(`${urls.movies}&page=${page}&with_genres=${id}`).then(value => value.data),
    getAllGenres: () => axiosService.get(urls.genres).then(value => value.data),
    getOneMovie: (id) => axiosService.get(`${urls.movie}/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=casts,images`).then(value => value.data),
    getOneActor: (id) => axiosService.get(`${urls.person}/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=movie_credits`).then(value => value.data)
}