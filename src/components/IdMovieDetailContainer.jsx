import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { getMovieById } from "../api/movies";
import IdMovieDetai from "./IdMovieDetail"; 

function IdMovieDetailContainers () {
    const [detailId, setDetailId] = useState([]);
    const {movieId} = useParams();

    useEffect(()=>{
        const api = async() => {
            try{
                const detail = await getMovieById(movieId)
                setDetailId(detail.data)
            } catch(error){
                console.log(error)
            }
        }

        api()
    }, [movieId])

    return (
        <div className="card mb-3">
            <IdMovieDetai detailId={detailId}/>
        </div>
    )
}


export default IdMovieDetailContainers