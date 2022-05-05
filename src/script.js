import {keyValue, keyValueCaps,keyValueShift,/* keyValueRus,*/keyValueCapsShift } from './data.js'

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
container.appendChild(textField);

let keyBoard = document.createElement('div');
keyBoard.classList.add('keyboard');
container.append(keyBoard)

for(let i= 0; i < keyValue.length; i++){
  let key = document.createElement('button')
	key.classList.add('key');
	key.classList.add(`${keyValue[i].code.toLowerCase()}`)
	key.id = `${keyValue[i].code}`;
	key.insertAdjacentHTML('afterbegin', `<div class = 'eng_key ${keyValue[i].code} main'>${keyValue[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div class = 'eng_key caps ${keyValueCaps[i].code} hidden'>${keyValueCaps[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div class = 'eng_key shift ${keyValueShift[i].code} hidden'>${keyValueShift[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div class = 'eng_key capsShift ${keyValueCapsShift[i].code} hidden'>${keyValueCapsShift[i].key}</div>`)
	
	// key.insertAdjacentHTML('beforeend',`<div class = 'rus_key ${keyValue[i].key} hidden'>${keyValueRus[i].key}</div>`);
  // key.insertAdjacentHTML('beforeend',`<div class = 'rus_key ${keyValue[i].key} hidden'>${keyValueRus[i].key}</div>`);
	keyBoard.append(key)
}

let windButton = document.querySelector('.metaleft .eng_key');
windButton.textContent = 'Win';


	
//--------------------------work from keyboard
function keyBoardWork(e){
	console.log(e.code, e.key)
	e.code === "CapsLock"
	
	if(e.type === 'keydown'){
		if(e.code !== 'CapsLock'){
				document.querySelector(`#${e.code}`).classList.add('press');

			}else /*if(e.code === 'CapsLock')*/{
			document.querySelector('#CapsLock').classList.toggle('press');
			toUpper()
			}
			if(e.Shift){
				shiftVal()
			}
		}


	if(e.type === 'keyup'){		
		if(e.code === 'CapsLock') {
			return
		}else{
			document.querySelector(`#${e.code}`).classList.remove('press');
		}
	}
	document.querySelectorAll('.shift').forEach(el=>el.classList.toggle('hidden'))
}
document.addEventListener('keydown', keyBoardWork)
document.addEventListener('keyup', keyBoardWork)
 
function toUpper(){
	document.querySelectorAll('.main').forEach(el=> el.classList.toggle('hidden'))
	document.querySelectorAll('.caps').forEach(el=> el.classList.toggle('hidden'))
}
function shiftVal(){
  console.log('fhdj')
	document.querySelectorAll('.shift').forEach(el=>el.classList.add('hidde'))
	// !document.querySelectorAll('.hidden').forEach(el=>el.classList.toggle('hidde'))
}


