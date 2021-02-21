import { useState, useEffect } from 'react';
import useFetch from './UseFetch';

const Teas = () => {
  
  const { data: beers, error, isPending } = useFetch('https://api.punkapi.com/v2/beers'); //megadjuk hogy ebben az esetben mi legyen a data
  return (

    <div className="teas">
      <h2>Sorry I could not find a tea database</h2>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div>}
    
      {beers && beers.map(beer => (
        <div className="beer-preview" key={ beer.id } >
          <h4>{ beer.name } </h4>
          <h5>{ beer.description }</h5>
        </div>
      )) }
    </div>
  )
}
export default Teas;