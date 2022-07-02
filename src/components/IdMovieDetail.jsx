import "../styles/idMovieDetail.css"


const IdMovieDetail = ({detailId}) => { 
    
  return(
      <div className="movieDetailContainer">
          <img src={`https://image.tmdb.org/t/p/w500/${detailId.backdrop_path}`} className="col-xs-6 movieImage" alt={`${detailId.original_title}`}/>
          <div className="card-body col-sm-8 offset-sm-2 col-xs-10 offset-xs-1">
            <h5 className="card-title">{detailId.original_title}</h5>
            <p className="card-text">{detailId.overview}</p>
            <div className="card-text popularityContainer">
              <small className="list-group-item text-muted">&#11088;{detailId.vote_average}</small>
              <small className="text-muted"> &#x1F525; {detailId.popularity}</small>
            </div>
          </div>
      </div>          
    )
};

export default IdMovieDetail;