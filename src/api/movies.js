import axios from "axios";

const BASEURL = process.env.REACT_APP_BASE_URL
const APIKEY = process.env.REACT_APP_API_KEY

const getMovieById = (movieId) => axios.get(`${BASEURL}/movie/${movieId}${APIKEY}`)

const getPopularMovies = () => axios.get(`${BASEURL}/movie/popular${APIKEY}`)

const getMoviesByQuery = (query) => axios.get(`${BASEURL}/search/movie${APIKEY}&query=${query}`)

export {getMovieById, getPopularMovies, getMoviesByQuery}