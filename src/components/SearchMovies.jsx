import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import MovieList from "./MovieList"
import Filter from "./Filter"


const SearchMovies = () => {

    const [search, setSearch] = useState([]);
    const [ratingValue, setRatingValue] = useState(0);
    const {searchLink} = useParams();
    console.log(searchLink)

    const ratings = (value) =>{
        setRatingValue(value)
        console.log("en search", value)
    }

    useEffect(()=>{
        const api = async() =>{
        try{
            const BASEURL ="https://api.themoviedb.org/3/search/movie"
            const APIKEY ="?api_key=d751856bdd39495dd7ad2873ca3ae6fd"
            const resultSearch = await axios.get(`${BASEURL}${APIKEY}&query=${searchLink}`)
            setSearch(resultSearch.data.results)
            
        } catch(error){
            console.log(error)
        }
    }
     api()
    },[searchLink])

    return(
        <div className="">
        <Filter ratings={ratings}/>
        <MovieList movies={search}/>
    </div>
    )
}

export default SearchMovies;