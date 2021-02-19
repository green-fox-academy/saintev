import { useState, useEffect  } from "react";
import BeerList from "./BeerList";
import { Pagination } from 'antd';
import 'antd/dist/antd.css';

const Home = () => {
  const [beers, setBeers] = useState(null) // egyelore nincs megadva egy sor sem: null.
  //once we successfully fetch the data, we are going to update this state using setBeers

  //useState hook: we can create reactive value plus provides us with a way to change that value whenever we want
  //first value: beer is the initial value, second is the function that allows us to change
  //when we use this function we trigger react to rerender the component and show the new value
  
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const onChange =(page) =>{
    setPage(page);
  }
  const [currentPageSize, setCurrentPageSize] = useState(6);
  const onShowSizeChange = (current, size) => {
    setCurrentPageSize(size);
  }

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${currentPageSize}`)
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch data for that resource');
        }
        return res.json();
      })
      //.then(response => response.json())
      .then(data => {
        setBeers(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message); //it will only catch the error if we do not get a response, not if the response doesn't contain the data
      })
  }, [page, currentPageSize]) // dependency array - this hook only runs the function after the first initial render>
  //ebben meg lehet adni azt is hogy minek a valtozasara figyeljen
  
   
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Page is loading...</div>}
      { beers && <BeerList beers={ beers } /> }
      { <Pagination total={ 70 } pageSizeOptions={ [6,12,24,48] } onShowSizeChange={ onShowSizeChange } onChange={ onChange } /> };
      
    </div>
  );
}
 
export default Home;
//home is the parent and BeerList is the child component here- props is a way to pass data from the parent to the child