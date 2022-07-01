import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import axios from "axios";

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
                const BASEURL = process.env.REACT_APP_BASE_URL
                const APIKEY = process.env.REACT_APP_API_KEY
                const resultSearch = await axios.get(`${BASEURL}/search/movie${APIKEY}&query=${searchLink}`)

                    if (ratingValue==0){
                        setSearch(resultSearch.data.results)
                    }else{
                        let resultSearchFilter = resultSearch.data.results.filter(movie=> movie.vote_average<=ratingValue && movie.vote_average>ratingValue-2 )
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