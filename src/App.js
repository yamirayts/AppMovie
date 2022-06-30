import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header"
import MoviePopularContainer from "./components/MoviePopularContainer"
import IdMovieDetailContainers from "./components/IdMovieDetailContainer.jsx"

function App() {
  return (
    <div className="App">
       <Router>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<MoviePopularContainer/>}/>
                    <Route exact path="/catalog/movies/:movieId" element={<IdMovieDetailContainers/>}/>
                  
                </Routes>
        </Router>
    </div>
  );
}

export default App;
