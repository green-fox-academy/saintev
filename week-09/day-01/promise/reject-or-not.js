'use strict';

let promise = new Promise( ( resolve, reject ) => {
  resolve( 'I FIRED' );
  reject( 'I DID NOT FIRE' );
} );

function onRejected ( error ) {
  console.log( error.message );
}

Promise.then( ( result ) => { return result } )
  .catch( ( error ) => onRejected( error() ) );
  
//Let’s build a simple script to prove to ourselves that promises may only
//resolve one time and all future attempts to resolve them will simply be ignored.
//
//First, create a promise using the Promise constructor as we have been doing.
//
//In the promise’s executor, immediately attempt to fulfill the promise with a
//value of 'I FIRED'.
//
//Then, after the fulfill call, immediately try to reject the promise with an
//Error created with parameter 'I DID NOT FIRE'.
//
//After the promise creation, create a function onRejected with one parameter
//error that prints the Error’s message with console.log.
//
//Lastly, pass console.log and the function you just created as the success
//and rejection handlers respectively.
//
//If successful, your script should only log “I FIRED” and should not log
//“I DID NOT FIRE”.
//