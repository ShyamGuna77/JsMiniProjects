

'use strict';

// const btn =document.querySelector('button');
// btn.addEventListener('mouseover',function(){
// const width = Math.floor(Math.random()*innerWidth);
// const height = Math.floor(Math.random()*innerHeight);




// btn.style.left = `${width}px`;
// btn.style.top = `${height}px`;

// }
// );


// btn.addEventListener('click',function(){
//     btn.innerText = 'you clicked Me';
//     document.body.style.background = 'linear-gradient(rgba(255,0,0,0), rgba(255,0,0,1))';

// })


const colors = [
    'red',
    'purple',
    'blue',
    'orange',
    'yellow',
    'black',
    'indigo'
]

const oye = function(){
 const h1 = document.querySelector('h1');
h1.style.color  = this.style.backgroundColor;
}
const boxes = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    boxes.appendChild(box);
     box.addEventListener('click',oye);
     
     }

