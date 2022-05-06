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
	key.classList.add('key-button');
	key.classList.add(`${keyValue[i].code.toLowerCase()}`)
	key.id = `${keyValue[i].code}`;
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key main ${keyValue[i].code}'>${keyValue[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key caps ${keyValueCaps[i].code} hidden'>${keyValueCaps[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key shift ${keyValueShift[i].code} hidden'>${keyValueShift[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key capsShift ${keyValueCapsShift[i].code} hidden'>${keyValueCapsShift[i].key}</div>`)
	
	// key.insertAdjacentHTML('beforeend',`<div class = 'rus_key ${keyValue[i].key} hidden'>${keyValueRus[i].key}</div>`);
  // key.insertAdjacentHTML('beforeend',`<div class = 'rus_key ${keyValue[i].key} hidden'>${keyValueRus[i].key}</div>`);
	keyBoard.append(key)
}

let windButton = document.querySelector('.metaleft .eng_key');
windButton.textContent = 'Win';
	
//--------------------------work from keyboard
let keysSimbol = document.querySelectorAll('.eng_key')


function keyBoardWork(e){
	console.log(e.code, e.key)
	
	if(e.type === 'keydown'){
		if(e.code !== 'CapsLock'){
				document.querySelector(`#${e.code}`).classList.add('press');

			}else /*if(e.code === 'CapsLock')*/{
			document.querySelector('#CapsLock').classList.toggle('press');
			toUpper()
			}
			if(e.code === 'ShiftLeft'|| e.key === 'Shift'){
				shiftWork(e)
			}
	}

	if(e.type === 'keyup'){		
		if(e.code === 'CapsLock') {
			return
		}else{
			document.querySelector(`#${e.code}`).classList.remove('press');
		}
		document.querySelectorAll('.shift').forEach(el=>el.classList.add('hidden'));
		document.querySelectorAll('.main').forEach(el=>el.classList.remove('hidden'));
		// document.querySelectorAll('.caps').forEach(el=>el.classList.remove('hidden'))
	if((e.code === "ShiftLeft" && e.code ==='AltLeft') || (e.code === "ShiftRight" && e.code ==='AltRight') ){
		// document.querySelectorAll('.eng_key').forEach(el)
		console.log('afasfas')
	}
	
	}

}
document.addEventListener('keydown', keyBoardWork)
document.addEventListener('keyup', keyBoardWork)
 
function toUpper(){
	console.log(keysSimbol.length)
	document.querySelectorAll('.main').forEach(el=> el.classList.toggle('hidden'))//выкл кнопки
	document.querySelectorAll('.caps').forEach(el=> el.classList.toggle('hidden'))//вкл кнопку
}

function shiftWork(){
  console.log('fhdj')
	document.querySelectorAll('.eng_key').forEach(el=>{
		if(el.classList.contains('main')){
			el.classList.add('hidden')
			}else{
				document.querySelectorAll('.shift').forEach(el=>el.classList.remove('hidden'))
		}
	})
	// if(document.querySelector('#CapsLock').classList.contains('press') /*&& e.code === 'ShiftLeft' */){
	// 	document.querySelectorAll('.eng_key').forEach(el=>{
  //     if(el.classList.contains('caps')){
	// 			el.classList.add('hidden')
	// 		}

	// 	})
	// }

	
	// console.log(document.querySelectorAll('.hidden'))
}

//-----------------------------work virtual keyboard
