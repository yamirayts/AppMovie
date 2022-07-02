import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getMovieById } from "../api/movies";
import MovieDetai from "./MovieDetail"; 

function MovieDetailContainers () {
    const [movie, setMovie] = useState([]);
    const {movieId} = useParams();

    useEffect(()=>{
        const api = async() => {
            try{
                const detail = await getMovieById(movieId)
                setMovie(detail.data)
            } catch(error){
                console.log(error)
            }
        }

        api()
    }, [movieId])

    return (
        <div className="card mb-3">
            <MovieDetai movie={movie}/>
        </div>
    )
}


export default MovieDetailContainers