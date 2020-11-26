// Boilerplate
const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let Matrix1 =  [[10, 10], [290,  10], [290, 290], [10, 290]];
let Matrix2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectTheDots(myMatrix) {
  ctx.strokeStyle = 'green';
  ctx.beginPath();
  ctx.moveTo(myMatrix[0][0],myMatrix[0][1]);
    for (let i = 1; i < myMatrix.length; i++){
    ctx.lineTo(myMatrix[i][0],myMatrix[i][1]);
    }
    ctx.stroke();
}
connectTheDots(Matrix1);
connectTheDots(Matrix2);

//ez is megrajzolta de csak az egyiket kulon-kulon:
//function connectTheDots(myMatrix) {
//  ctx.strokeStyle = 'green';
//  ctx.beginPath();
//  ctx.moveTo(myMatrix[0][0],myMatrix[0][1]);
//    for (let i = 0; i < myMatrix.length; i++){
//    ctx.lineTo(myMatrix[i+1][0],myMatrix[i+1][1]);
//    ctx.stroke();
//    }
//}
//connectTheDots(Matrix1);
//connectTheDots(Matrix2);