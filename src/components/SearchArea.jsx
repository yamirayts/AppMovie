import { useState } from "react";
import { Link } from 'react-router-dom';

const SearchArea = (props) => {
const [search, setSearch] = useState("")
  const  handleChange = (e) =>{
    setSearch(e.target.value)
    console.log(search)
  }
    return(
        <div className="input-group mb-3">
  <input onChange={handleChange} type="text" className="form-control" placeholder="Search Movies" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <Link to={`/search/movies/${search}`}><button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button></Link>
</div>
    )
}

export default SearchArea;