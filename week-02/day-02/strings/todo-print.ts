'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
let todoText2: string = ' - Download games\n  - Diablo'
todoText2 = todoText.concat(todoText2);
console.log(todoText2);

//vagy
let todoText3: string = ` - Download games
    Diablo`;
todoText3 = todoText.concat(todoText3);
console.log(todoText3);
