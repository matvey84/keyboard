import {keyValue, keyValueRus } from './data.js'



console.log(keyValue.length, keyValueRus.length)
let body = document.querySelector('body');

let container = document.createElement('div');
container.classList.add('container');
body.append(container);

let header = document.createElement('h1');
header.classList.add('title');
header.innerText = 'Virtual Keyboard V1.0';
container.appendChild(header);

let textField = document.createElement('textarea');
textField.classList.add('text-field');
//  textField.setAttribute(spellcheck,true)
container.appendChild(textField);
let keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
container.append(keyBoard)
for(let i= 0; i < keyValue.length; i++){
  let key = document.createElement('button')
	key.classList.add('key');
	key.classList.add(`${keyValue[i].code.toLowerCase()}`)
	key.id = `${keyValue[i].code}`;
	key.insertAdjacentHTML('afterbegin', `<div class = 'eng_key main'>${keyValue[i].key}</div>`)
  key.insertAdjacentHTML('beforeend',`<div class = 'rus_key hidden'>${keyValueRus[i].key}</div>`)
	keyBoard.append(key)


}
let windButton = document.querySelector('.metaleft .eng_key');
console.log(windButton.textContent = 'Win')

// if(){}

