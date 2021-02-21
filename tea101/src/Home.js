import { Link } from 'react-router-dom';

const Home = () => {

  const title = 'Delicious Delights'
  
  const handleClick = () => {

  }

  return ( 
    <div className="homepage">
      <video autoPlay muted loop id="video" >
        <source src= "https://static.videezy.com/system/resources/previews/000/051/174/original/C0026-balli-ihlamur.mp4" type="video/mp4">
        </source>
      </video>
      <h1>{ title }</h1>
      <Link to="/teas" className="check">Check them out!</Link>
      
    </div>
  );
}
 
export default Home;