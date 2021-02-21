import { useState, useEffect } from 'react';

const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    //abort controller
    const abortCont = new AbortController(); 

    fetch(url, { signal: abortCont.signal }) //this associates this fetch with the AbortController
      //we can use it now to stop the fetch, we can do this in the cleanup fuction
      .then(response => {
        if (!response.ok) {
          throw Error('could not fetch requested data')
        }
        return response.json();
      })
      .then(response => {
        setData(response);
        setIsPending(false);
        setError(null)
        
      })
      .catch(err => {
        if (err.name === 'AbortError') {//we have a name property on the error object
          console.log('fetch aborted'); //only then we don't want to update the state
        } else {
        setIsPending(false);
        setError(err.message); 
        }
      })
    return () => abortCont.abort(); //cleanup function: stops the fetch when we leave 
  //but! we catch this error with 'setIsPending(false) and updating the status
  }
    
    , [url]);

  return { data, error, isPending  };
}
 
export default useFetch;

//custom hook - we are creating a new hook to fetch data, the function is the hook itself
//custom hooks need to start with use..