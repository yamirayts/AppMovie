
const IdMovieDetail = ({detailId}) => { 
    
  return(
      <>
          <img src={`https://image.tmdb.org/t/p/w500/${detailId.backdrop_path}`} className="rounded mx-auto d-block" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{detailId.original_title}</h5>
            <p className="card-text">{detailId.overview}</p>
            <p className="card-text">
              <small className="list-group-item text-muted">&#11088;{detailId.vote_average}</small>
              <small className="text-muted"> &#x1F525; {detailId.popularity}</small>
            </p>
          </div>
      </>
            
    )
};

export default IdMovieDetail;