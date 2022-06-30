import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"
import MoviePopularContainer from "./components/MoviePopularContainer"
import IdMovieDetailContainers from "./components/IdMovieDetailContainer.jsx"
import SearchArea from "./components/SearchArea"
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className="App">
       <Router>
                <Header/>
                <SearchArea/>
                <Routes>
                    <Route exact path="/" element={<MoviePopularContainer/>}/>
                    <Route exact path="/catalog/movies/:movieId" element={<IdMovieDetailContainers/>}/>
                    <Route exact path="/search/movies/:searchLink" element={<SearchMovies/>}/>
                </Routes>
        </Router>
    </div>
  );
}

export default App;
