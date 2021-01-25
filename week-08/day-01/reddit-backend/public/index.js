window.onload = () => {
  let linkRequest = new XMLHttpRequest(); //hasznalja ezt az adatbazist
  linkRequest.onreadystatechange = handleReadyStateChange;
  
  linkRequest.open( 'GET', 'http://localhost:3000/posts' ); //a server.js kap egy lekerest erre az endpointra akkor 
  //megnyitja ezt a csatornat
  linkRequest.send(); // ezzel megy el az adat valojaban, ezzel kuldjuk el a lekerest

  function handleReadyStateChange () {
    //if ( linkRequest.readyState === 4 ) { // 4 helyett: XMLHttpRequest.DONE
    //  console.log(linkRequest.response);
    //}
    linkRequest.onload = () => { // ez ugyanaz mint a fenti ketto
      //console.log(linkRequest.response);
      
      let linkObject = JSON.parse( linkRequest.response );//stringbol alakitsa at, legyen egy array
        linkObject.forEach( link => {
        addLinkToList( link );
      } );
    }
  }
}
const linkList = document.querySelector( 'ul' );
const addLinkToList = ( link ) => {
  const row = document.createElement ('li' );
  row.innerHTML = `id: ${link.id} : <strong>${ link.title }:</strong> ${ link.url }`;
  linkList.appendChild( row );
  console.log(row);
}
