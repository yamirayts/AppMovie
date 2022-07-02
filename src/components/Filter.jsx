import { useState } from "react";
import '../App.css';
import { FaStar } from "react-icons/fa";
import classNames from "classnames";
import "../styles/filter.css"

function Filter({ratings}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)

  const handleClick = value => {

    if (currentValue === value) {
      setCurrentValue(0);
      ratings(0)
    } else {
      setCurrentValue(value)
      ratings(value)
    }
    
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div className="filterContainer">
      <h5 className="list-group-item text-muted"> Ratings:   </h5>
      <div className="filterStars">  
        {stars.map((_, index) => {
          const isFilled = (hoverValue || currentValue) > index

          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={classNames("filterStar", 
                { "filterStarSelected": isFilled, 
                "filterStarUnselected": !isFilled
                })}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Filter;