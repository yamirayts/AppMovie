import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import MoviePopularContainer from "./components/MoviePopularContainer"
import MovieDetailContainers from "./components/MovieDetailContainer.jsx"
import SearchMovies from './components/SearchMovies';

import './App.css';

function App() {
  
  return (
    <div className="App">
        <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MoviePopularContainer/>}/>
                    <Route exact path="/catalog/movies/:movieId" element={<MovieDetailContainers/>}/>
                    <Route exact path="/search/movies/" element={<MoviePopularContainer/>}/>
                    <Route exact path="/search/movies/:searchLink" element={<SearchMovies/>}/> 
                </Routes>
        </Router>
    </div>
  );
}

export default App;
