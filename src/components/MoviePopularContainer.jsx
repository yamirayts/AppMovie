import { useEffect, useState } from "react";
import Lottie from 'lottie-react'
import axios from "axios";

import MovieList from "./MovieList";
import loader from '../assets/loader.json';

import "../styls/loader.css"

function MoviePopularContainer (){

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const api = async() =>{
        try{
            const BASEURL = process.env.REACT_APP_BASE_URL
            const APIKEY = process.env.REACT_APP_API_KEY
            const list = await axios.get(`${BASEURL}/movie/popular${APIKEY}`)
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


