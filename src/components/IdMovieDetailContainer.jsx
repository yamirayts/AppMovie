import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

import IdMovieDetai from "./IdMovieDetail"; 

function IdMovieDetailContainers (){

    const [detailId, setDetailId] = useState([]);
    const {movieId} = useParams();

    
    useEffect(()=>{

        const api = async() =>{

            try{
                const BASEURL = process.env.REACT_APP_BASE_URL
                const APIKEY = process.env.REACT_APP_API_KEY
                const detail = await axios.get(`${BASEURL}/movie/${movieId}${APIKEY}`)
                setDetailId(detail.data)
                
            } catch(error){
                console.log(error)
            }
        }

        api()

    },[movieId])

    return(
        <div className="card mb-3">
            <IdMovieDetai detailId={detailId}/>
        </div>
    )
}


export default IdMovieDetailContainers