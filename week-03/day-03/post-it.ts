'use strict';

//Create a PostIt a class that has
//a backgroundColor
//a text on it
//a textColor
//Create a few example post-it objects:
//an orange with blue text: "Idea 1"
//a pink with black text: "Awesome"
//a yellow with green text: "Superb!"

export class PostIt{
  _backgroundColor: string;
  _text: string;
  _textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
  this._backgroundColor = backgroundColor;
  this._text = text;
  this._textColor = textColor
  }
}

let message1 = new PostIt(`orange`, `Idea 1`, `blue`);
console.log(message1);
let message2 = new PostIt(`pink`, `Awesome!`, `black`);
console.log(message2);
let message3 = new PostIt(`yellow`, `Superb!`, `green`);
console.log(message3);







