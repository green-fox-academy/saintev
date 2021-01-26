 'use strict';

function promise() {
  return new Promise( function ( fulfill, reject ) {
    setTimeout( () => fulfill( 'FULFILLED!' ), 300 );
    
    });
}

promise()
  .then( ( result ) => {
    console.log( result )
  } )
  

//  var promise = new Promise(function (fulfill, reject) {
//    setTimeout( () => reject( 'REJECTED!' ), 300 );
//    })
//
//    .catch( ( reject ) => {
//      onReject(reject)
//    } )
//  
//    function onReject (error) {
//      console.log(error);
//    }


    