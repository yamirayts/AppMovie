
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => { 

    return(
        
        <div className="col">
            <div className="card h-100">
                <Link to={`/catalog/movies/${movie.id}`}>
                    <img className='card-img-top' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title}`}/>
                </Link>
                <div className="card-body">
                    <Link to={`/catalog/movies/${movie.id}`}>
                        <h5 className="card-title">{movie.original_title}</h5>
                    </Link>
                </div>
                <div className="card-footer">
                    <div className="list-group list-group-flush">
                        <small className="text-muted">{movie.vote_average}&#11088;</small>
                        <small className="text-muted">Popularity {movie.popularity}&#x1F525;</small>
                    </div>
                </div>
            </div>
        </div>
            
    )
};

export default MovieItem;