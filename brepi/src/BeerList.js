import  Beers  from './Beers';

const BeerList = ({ beers }) => {
  
  return (
    <div className="beer-list">
      {beers.map(beer => (
        <div className="beer-preview" key = { beer.id } > 
           <Beers beer = { beer } /> 
        </div>
      ))}
    </div>
  );
}
 
export default BeerList;