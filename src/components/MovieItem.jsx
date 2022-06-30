
import { Link } from 'react-router-dom';


const MovieItem = ({movie}) => { 
    return(
        
            <div className="col">
                
                <div className="card h-100">
                <Link to={`/catalog/movies/${movie.id}`}>
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/></Link>
            <div className="card-body">
            <Link to={`/catalog/movies/${movie.id}`}>
        <h5 className="card-title">{movie.original_title}</h5>
        </Link>
        <p className="card-text">{movie.overview}</p>
      </div>
                
                <div className="card-footer">
                <p>Popularity</p>
       <small className="text-muted"> &#x1F525; {movie.popularity}</small>
      </div>
            </div>
           
            </div>
            
    )
};

export default MovieItem;