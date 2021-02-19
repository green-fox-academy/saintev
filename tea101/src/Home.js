const Home = () => {

  const title = 'Delicious Delights'
  
  const handleClick = () => {

  }

  return ( 
    <div classname="homepage">
      <video autoPlay muted loop id="video" >
        <source src= "https://static.videezy.com/system/resources/previews/000/051/174/original/C0026-balli-ihlamur.mp4" type="video/mp4">
        </source>
      </video>
      <h1>{ title }</h1>
      <button classname="check" onclick = { handleClick }>Check them out!</button>
    </div>
  );
}
 
export default Home;