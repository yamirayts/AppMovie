import "../styles/MovieDetail.css"


const MovieDetail = ({movie}) => { 
    
  return(
      <div className="movieDetailContainer">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="col-xs-6 movieImage" alt={`${movie.original_title}`}/>
          <div className="card-body col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text">{movie.overview}</p>
            <div className="card-text popularityContainer">
              <small className="list-group-item text-muted">&#128077; {movie.vote_average}</small>
              <small className="text-muted"> &#x1F525; {movie.popularity}</small>
            </div>
          </div>
      </div>          
    )
};

export default MovieDetail;