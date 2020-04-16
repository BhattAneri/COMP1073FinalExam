// JavaScript Document

let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body'); 
let main = document.querySelector('main');

submitButton.addEventListener('click', function() { 
  let personName = document.querySelector('input[type="text"]');
  let para = document.createElement('p'); 
  para.innerHTML = 'Hey there ' + personName + '! Thanks for stopping by!'; 
  body.setAttribute('class','meow'); 
  console.log('=^..^='); 
  main.appendChild(para);
});