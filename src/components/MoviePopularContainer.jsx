import { useEffect, useState } from "react";
import Lottie from 'lottie-react'
import { getPopularMovies } from "../api/movies";

import MovieList from "./MovieList";
import loader from '../assets/loader.json';

import "../styls/loader.css"

function MoviePopularContainer () {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const api = async() =>{
        try{
            const list = await getPopularMovies()
            setMovies(list.data.results)          
        } catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
        }

        api()

    },[])

    const lottieLoaderOptions = {
        animationData: loader,
        autoplay: true,
        loop: true,
        style:{
            width: "100%"
        }
    }
    
    return(
        <>
            {loading === true?

                <div className="itemListContainer">
                    <div className="itemListContainer__loaderContainer">
                        <Lottie {...lottieLoaderOptions}/>
                    </div>
                </div>

                :

                <div className="">
                    <MovieList movies={movies} />
                </div>
            }
        </>
    )
}

export default MoviePopularContainer
