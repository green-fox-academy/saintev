'use strict';

let rows: number = 4;

    for (let i = 0; i < rows; i++) { 
      let starsAndSpaces: any = '';
      
      for (let j = 0; j < rows - i; j++) {
        starsAndSpaces += ' ';
        

        
      } starsAndSpaces += '*';
      for (let k = 0; k < i; k++) {
        
        starsAndSpaces += '**';
        }
      
      
        console.log(starsAndSpaces);  
    } 
