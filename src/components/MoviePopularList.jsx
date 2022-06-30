
import MovieItem  from "./MovieItem"


const MoviePopularList = ({movies}) => {
   
    

    return(
        
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {movies.map((movie) =>
                <MovieItem movie={movie}/>
            )}
        </div>
        
    )
}

export default MoviePopularList;