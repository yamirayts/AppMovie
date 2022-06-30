import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import IdMovieDetai from "./IdMovieDetail"; 

function IdMovieDetailContainers (){
    const [detailId, setDetailId] = useState([]);
    const {movieId} = useParams();
    console.log(movieId)
    useEffect(()=>{
        const api = async() =>{
        try{
            const BASEURL ="https://api.themoviedb.org/3/movie/"
            const APIKEY ="?api_key=d751856bdd39495dd7ad2873ca3ae6fd"
            const detail = await axios.get(`${BASEURL}${movieId}${APIKEY}`)
            setDetailId(detail.data)
            console.log(detail)
        } catch(error){
            console.log(error)
        }
    }
     api()
    },[movieId])

    console.log("hola",detailId)
return(
    <div className="card mb-3">
        <IdMovieDetai detailId={detailId}/>
    </div>
)


}


export default IdMovieDetailContainers