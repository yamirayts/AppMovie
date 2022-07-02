import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchArea = () => {
  let navigate = useNavigate()
  const [search, setSearch] = useState("")
  
  const  handleChange = (e) => {
        setSearch(e.target.value)
      }

  const handleSubmit =(e)=> {
      e.preventDefault()
      navigate(`/search/movies/${search}`, { replace: true })
  }

  return(
      <form onSubmit={handleSubmit} className="input-group mb-3 ">
        <input onChange={handleChange} type="text" className="form-control" placeholder="Search Movies" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <input className="btn btn-secondary" type="submit" id="button-addon2" value="Search" />
      </form>
    )
}

export default SearchArea;