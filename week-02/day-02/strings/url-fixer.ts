'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace ('bots','odds');

// Also, the URL is missing a crucial component, find out what it is and insert it too!

//ketfele vagjuk
let sliced1: string = url.slice(0, 5);
let sliced2: string = url.slice(5); // a masodik helyre lehet irni azt is, hogy hatulrol a hanyadik, pl -1

let result: string = sliced1 + ':' + sliced2;
console.log(result);
  
//vagy
let url2: string = 'https//www.reddit.com/r/nevertellmethebots';

url2 = url2.replace('bots', 'odds');

url2 = [url2.slice(0, 5), ':', url2.slice(5)].join('');

console.log(url2);
