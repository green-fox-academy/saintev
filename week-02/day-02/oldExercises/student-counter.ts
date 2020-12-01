'use strict';

let students = {
  Theodor: {
    age: 3,
    candies: 2
  },
  Paul: {
    age: 9.5,
    candies: 2
  },
  Mark: {
    age: 12,
    candies: 5
  },
  Peter: {
    age: 7,
    candies: 3
},
  Olaf: {
    age: 12,
    candies: 7
},
  George: {
    age: 10,
    candies: 1
}
} 

for (let keys in students) {
  console.log(keys);
}
Object.keys(students).forEach(function (kulcsok) {
console.log(students[kulcsok]);
})

// create a function that takes a list of students and logs:
// - How many candies are owned by students altogether
console.log(students.Theodor.candies);

for (let keys in students) {
console.log(keys);

}






// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies