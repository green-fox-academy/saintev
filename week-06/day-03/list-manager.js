'use strict'

let body = document.querySelector('body');

let container = document.createElement('class');
container.setAttribute('class', 'container');

let list = document.createElement('class');
list.setAttribute('class', 'list');

let item1 = document.createElement('p');
item1.innerHTML = 'bread';
item1.classList.add('selection');
list.appendChild(item1);
let item2 = document.createElement('p');
item2.innerHTML = 'milk';
list.appendChild(item2);
let item3 = document.createElement('p');
item3.innerHTML = 'orange';
list.appendChild(item3);
let item4 = document.createElement('p');
item4.innerHTML = 'tomato';
list.appendChild(item4);

container.appendChild(list);

let buttons = document.createElement('class');
buttons.setAttribute('class', 'buttons');

let up = document.createElement('button');
up.classList.add('up');
up.innerText = 'Up'
buttons.appendChild(up);

let left = document.createElement('button');
left.classList.add('left');
left.innerText = '>';
buttons.appendChild(left);

let x = document.createElement('button');
x.classList.add('x');
x.innerText = 'x';
buttons.appendChild(x);

let down = document.createElement('button');
down.classList.add('down');
down.innerText = 'Down';
buttons.appendChild(down);

container.appendChild(buttons);

let box = document.createElement('class');
box.classList.add('box');

container.appendChild(box);

body.appendChild(container);

buttons.addEventListener('click', (event) => {
  const action = event.target.getAttribute('class');
  let selectedItem = document.querySelector('.selection')
  if (action === 'down') {
    let nextItem = selectedItem.nextSibling;
    
    if (selectedItem.innerHTML === 'tomato') {
      item1.classList.add('selection');
    } else {
    nextItem.classList.add('selection');
    }
    selectedItem.classList.remove('selection');
  }

  if (action === 'up') {
    let previousItem = selectedItem.previousSibling;

    if (selectedItem.innerHTML === 'bread') {
      item4.classList.add('selection');  
    } else {
    previousItem.classList.add('selection');
    }
    selectedItem.classList.remove('selection');
  }


  if (action === 'left') {
    
    const rightItem = document.createElement('p');
    rightItem.innerHTML = selectedItem.innerHTML;
    box.appendChild(rightItem);

    selectedItem.remove();
    
    if (list.firstChild == null) {
      left.setAttribute('disabled', true);
      down.setAttribute('disabled', true);
      up.setAttribute('disabled', true);
      x.setAttribute('disabled', true);
      return;
    }

    list.firstChild.classList.add('selection')
    selectedItem.classList.remove('selection')
    selectedItem.innerHTML = '';
  }

  if (action === 'x') {
    selectedItem.remove();
    if (!list.firstChild) {
      x.setAttribute('disabled', true)
      left.setAttribute('disabled', true);
      down.setAttribute('disabled', true);
      up.setAttribute('disabled', true);
      return;
      
    } else {
    list.firstChild.classList.add('selection')
    }
  }
  

})







