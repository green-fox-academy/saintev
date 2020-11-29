'use strict';

//Create a map where the keys are strings and the values are strings with the following initial values
//Key	Value
//978-1-60309-459-7	Lupus
//978-1-60309-444-3	Red Panda and Moon Bear
//978-1-60309-461-0	The Lab

let map2 = {
  "978-1-60309-452-8": `A Letter to Jo`,
  "978-1_60309_444_3": `Lupus`,
  "978-1-60309-444-3": `Red Panda and Moon Bear`,
  "978-1-60309-461-0": `The Lab`

};
console.log(map2);


//print all the keys
for (let keys in map2) {
console.log(keys);
}

//Print all the values
Object.keys(map2).forEach(function (keys) {
  console.log(map2[keys]);
});

//Print all the key-value pairs in the following format
//A Letter to Jo (ISBN: 978-1-60309-452-8)
//Lupus (ISBN: 978-1-60309-459-7)
//Red Panda and Moon Bear (ISBN: 978-1-60309-444-3)
//The Lab (ISBN: 978-1-60309-461-0)
Object.keys(map2).forEach(function (keys) {
console.log(map2[keys]+ ` (ISBN: ` + keys + `)`);

})

//Remove the key-value pair with key 978-1-60309-444-3
delete map2["978-1-60309-444-3"];
Object.keys(map2).forEach(function (keys) {
  console.log(map2[keys] + ` (ISBN: ` + keys + `)`);
})


//Remove the key-value pair with value The Lab



//Add the following key-value pairs to the map
//Key	Value
//978-1-60309-450-4	They Called Us Enemy
//978-1-60309-453-5	Why Did We Trust Him?
map2["978-1-60309-450-4"] = 'They Called Us Enemy';
map2["978-1-60309-453-5"] = `Why Did We Trust Him?`
console.log(map2);

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log("478-0-61159-424-8" in map2);

//Print the value associated with key 978-1-60309-453-5
console.log(map2["978-1-60309-453-5"]);
