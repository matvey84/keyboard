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
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key shift ${keyValueShift[i].key} hidden'>${keyValueShift[i].key}</div>`);
	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'eng_key key capsShift ${keyValueCapsShift[i].code} hidden'>${keyValueCapsShift[i].key}</div>`)
	key.id = `${keyValue[i].code}`;
	// 	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'rus_key key main ${keyValue[i].key} hidden novisible'>${keyValueRus[i].key}</div>`);
	// 	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'rus_key key caps ${keyValueCaps[i].code} hidden novisible'>${keyValueCaps[i].code}</div>`);
	// 	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'rus_key key shift  ${keyValueShift[i].key} hidden novisible'>${keyValueCaps[i].code}</div>`);
	// 	key.insertAdjacentHTML('afterbegin', `<div id=${keyValue[i].code} class = 'rus_key key capsShift ${keyValueCapsShift[i].code} hidden novisible'>${keyValueCapsShift[i].code}</div>`);
	keyBoard.append(key)
}

let windButton = document.querySelector('.metaleft .eng_key');
windButton.textContent = 'Win';
	
//--------------------------work from keyboard
document.addEventListener('keydown', (e)=>{
	if(e.code !== 'CapsLock'){
		document.querySelector(`#${e.code}`).classList.add('press');
	}else{
	document.querySelector('#CapsLock').classList.toggle('press');
	document.querySelectorAll('.main').forEach(el=> el.classList.toggle('hidden'))//выкл кнопки
	document.querySelectorAll('.caps').forEach(el=> el.classList.toggle('hidden'))//вкл кнопку
	}

	if(e.code === 'ShiftLeft' || e.code === 'ShiftRight'){
		document.querySelectorAll('.key').forEach(el=>{
			if(el.classList.contains('main')){
				el.classList.add('hidden')
			}else{
				document.querySelectorAll('.shift').forEach(el=>el.classList.remove('hidden'))
			}
		})
	}

	let capsLock = document.querySelector('.capslock')
		if((e.code === "ShiftLeft" || e.code === "ShiftLeft") && capsLock.classList.contains('press')){
			document.querySelectorAll('.shift').forEach(el=>{
				el.classList.add('hidden')
			});
			document.querySelectorAll('.caps').forEach(el=>{
				el.classList.add('hidden')
			});
			document.querySelectorAll('.capsShift').forEach(el=>{
				el.classList.remove('hidden')
			})
		}

	console.log(e.code, e.key)
	if((e.shiftKey && e.altKey) ){
	// document.querySelectorAll('.eng_key').forEach(el=>el.)
	console.log('down')
}
})

 document.addEventListener('keyup', (e)=>{
	if(e.code === 'CapsLock') {
		return
	}else{
		document.querySelector(`#${e.code}`).classList.remove('press');
		}

	if(e.code === "ShiftLeft" || e.code === "ShiftLeft"){
		document.querySelectorAll('.main').forEach(el=>{
			el.classList.remove('hidden')
		})
		document.querySelectorAll('.shift').forEach(el=>{
			el.classList.add('hidden')
		})
	}

	let capsLock = document.querySelector('.capslock')
	if((e.code === "ShiftLeft" ||e.code === "ShiftLeft") && capsLock.classList.contains('press')){
		document.querySelectorAll('.main').forEach(el=>{
			el.classList.add('hidden')
		});
		document.querySelectorAll('.caps').forEach(el=>{
			el.classList.toggle('hidden')
		});
		document.querySelectorAll('.capsShift').forEach(el=>{
			el.classList.add('hidden')
		})
	}
 })

