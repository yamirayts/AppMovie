
import SearchArea from './SearchArea';

import "../styles/searcharea.css"

const Header = () => {

  return(
    <>
    
        <div className="headerContainer carousel-inner " >
          
          <div className="header carousel-item active" data-bs-interval="10000">
          
            <img src="/img/los-secretos.webp" className="d-block w-100" alt="dumbledore's secrets poster"/>
              <div className="carousel-caption d-block">
                <SearchArea/>
              </div>
          </div>
        </div>
      
        </>
      )
  }

export default Header;