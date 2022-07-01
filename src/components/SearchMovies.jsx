import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import { getMoviesByQuery } from "../api/movies";
import MovieList from "./MovieList"
import Filter from "./Filter"
import loader from '../assets/loader.json';

import "../styls/loader.css"


const SearchMovies = () => {

    const [search, setSearch] = useState([]);
    const [ratingValue, setRatingValue] = useState(0);
    const [loading, setLoading] = useState(true)
    const {searchLink} = useParams();
    

    const ratings = (value) =>{
        setRatingValue(value*2)
    }

    
    useEffect(()=>{

        const api = async() =>{

            try{
                const resultSearch = await getMoviesByQuery(searchLink)

                    if (ratingValue==0){
                        setSearch(resultSearch.data.results)
                    }else{
                        const resultSearchFilter = resultSearch.data.results.filter(movie=> movie.vote_average<=ratingValue && movie.vote_average>ratingValue-2 )
                        setSearch(resultSearchFilter)
                    }
            } catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        api()

    },[searchLink, ratingValue ])

    const lottieLoaderOptions = {
        animationData: loader,
        autoplay: true,
        loop: true,
        style:{
            width: "50%"
        }
    }

    return(<>
    
        <Filter ratings={ratings}/>
            {loading === true?
                <div className="itemListContainer">
                    <div className="itemListContainer__loaderContainer">
                        <Lottie {...lottieLoaderOptions}/>
                    </div>
                </div>
            :
                <div className="">
                    <MovieList movies={search} />
                </div>
            }
        </>
    )
}

export default SearchMovies;