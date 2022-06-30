
import { Link } from 'react-router-dom';


const MovieItem = ({movie}) => { 
    return(
        
            <div className="col">
                <Link to={`/catalog/movies/${movie.id}`}>
                <div className="card h-100">
                   
                <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                        <div class="card-body">
        <h5 class="card-title">{movie.original_title}</h5>
        <p class="card-text">{movie.overview}</p>
      </div>
                
                <div class="card-footer">
                <p>Popularity</p>
       <small class="text-muted"> &#x1F525; {movie.popularity}</small>
      </div>
            </div>
            </Link>
            </div>
            
    )
};

export default MovieItem;