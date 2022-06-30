import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./MovieList";

function MoviePopularContainer (){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const api = async() =>{
        try{
        
            const list = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d751856bdd39495dd7ad2873ca3ae6fd")
            setMovies(list.data.results)
            
        } catch(error){
            console.log(error)
        }
    }
     api()
    },[])

    
return(
    <div className="">
        <MovieList movies={movies}/>
    </div>
)


}


export default MoviePopularContainer


