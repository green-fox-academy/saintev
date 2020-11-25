'use strict';

let rows: number = 4;

    
for (let i: number = 0; i < rows; i++) { 
      let starsAndSpaces: any = '';
      
      for (let j: number = 0; j < rows - i; j++) {  //hany space legyen
        starsAndSpaces += ' ';
        
      
      } starsAndSpaces += '*';
      for (let k: number= 0; k < i; k++) { // hany csillag legyen
        
        starsAndSpaces += '**';
      }
  
        console.log(starsAndSpaces);  
} 

