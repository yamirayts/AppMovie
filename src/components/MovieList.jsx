
import MovieItem  from "./MovieItem"

import "../styles/movieList.css"


const MovieList = ({movies}) => {

    return(
        <>
        {movies.length==0?
                <h1 className="col">Upppss! There are no movies with these stars</h1>
            :
                <div className="containerMovieList">
                    <div className="row row-cols-2 row-cols-md-4 g-4">
                        {movies.map((movie) =>
                        <MovieItem movie={movie}/>
                        )}
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default MovieList;