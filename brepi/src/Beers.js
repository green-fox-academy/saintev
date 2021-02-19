import { useState } from "react";

const Beers = (props) => {
  
  const [isDescriptionShowing, setIsDescriptionShowing] = useState(false);

  function showImage() {
    return <img src={ props.beer.image_url } height="100px" />
  }

  function showDescription() {
    return <h5>{ props.beer.description }</h5>
  }
  
  const handleClick = () => {
    if (isDescriptionShowing) {
      setIsDescriptionShowing(false);
    } else {
      setIsDescriptionShowing(true);
    }
  }
  return ( 
    <div className="beer-info" onClick={ handleClick }>
      <h2>{ props.beer.name }</h2>
      <div>
        {isDescriptionShowing ? showDescription() : showImage()}
      </div>
    </div>
  );
}
 
export default Beers;