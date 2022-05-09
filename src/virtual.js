
//---------------------------------work capsLock

let textField = document.querySelector('.text-field')

document.querySelector('#CapsLock').addEventListener('click', (e)=>{
	console.log(e.target)
	if(e.target.id === 'CapsLock' ||  e.target.classList.contains('CapsLock')){
		document.querySelector('#CapsLock').classList.toggle('press')
	}
	
	document.querySelectorAll('.main').forEach(el=>{
		el.classList.toggle('hidden')
	})
	document.querySelectorAll('.caps').forEach(el=>{
		el.classList.toggle('hidden')
	})

})
document.querySelectorAll('.key-button')
.forEach(el=>el.addEventListener('mousedown', (e)=>{

	if(e.target.id !== 'CapsLock' ||  !e.target.classList.contains('capslock')){
		document.querySelector(`#${e.target.id}`).classList.add('press');
	}

	if(e.target.id === "ShiftLeft" ||e.target.id === "ShiftLeft"){
		document.querySelectorAll('.main').forEach(el=>{
			el.classList.add('hidden')
		});

		document.querySelectorAll('.shift').forEach(el=>{
			el.classList.remove('hidden')
		});
	}

	let capsLock = document.querySelector('.capslock')
	if((e.target.id === "ShiftLeft" ||e.target.id === "ShiftLeft") && capsLock.classList.contains('press')){
		
		document.querySelectorAll('.shift').forEach(el=>{
			el.classList.add('hidden');
		});

		document.querySelectorAll('.caps').forEach(el=>{
			el.classList.toggle('hidden');
		});

		document.querySelectorAll('.capsShift').forEach(el=>{
			el.classList.remove('hidden');
		})
	}
	let textFromInput = textField.value;
	let addCharacter = textFromInput.split('')

	if(e.target.id == 'Backspace' || e.target.id == 'Tab' || e.target.id == 'CapsLock'
		|| e.target.id == 'Delete' || e.target.id == 'Enter' ||e.target.id =='ShiftLeft'
		|| e.target.id =='ShiftRight'|| e.target.id =='AltRight' || e.target.id =='AltLeft'
		|| e.target.id =='ControlRight' || e.target.id =='ControlLeft' || e.target.id == 'MetaLeft'){
		null
	}else{
		if(e.target.textContent.length>1){
			// let arr = []
			for(el of e.target.childNodes){
				if(!el.classList.contains('hidden')){
					addCharacter.push(el.textContent)
					textField.value = addCharacter.join('')
				}
			}	
				
		}else{
			addCharacter.push(e.target.textContent)
			textField.value = addCharacter.join('')
		}
	}
	if(e.target.id == 'Backspace'){
		addCharacter.pop(addCharacter.length-1)
		textField.value = addCharacter.join('')
	}
	if(e.target.id == 'Enter'){
		console.log(addCharacter)
		addCharacter.splice(addCharacter.length+1, 0,'\n')
		textField.value = addCharacter.join('')
	}
	if(e.target.id == 'Tab'){
		console.log(addCharacter)
		addCharacter.splice(addCharacter.length+1, 0,'\t')
		textField.value = addCharacter.join('')
	}

}));

document.querySelectorAll('.key-button')
.forEach(el=>el.addEventListener('mouseup', (e)=>{

	if(e.target.id !== 'CapsLock' ||  !e.target.classList.contains('capslock')){
		document.querySelector(`#${e.target.id}`).classList.remove('press');
	}

	if(e.target.id === "ShiftLeft" || e.target.id === "ShiftLeft"){
		document.querySelectorAll('.main').forEach(el=>{
			el.classList.remove('hidden')
		});

		document.querySelectorAll('.shift').forEach(el=>{
			el.classList.add('hidden')
		})
	}

	let capsLock = document.querySelector('.capslock')
		if((e.target.id === "ShiftLeft" ||e.target.id === "ShiftLeft") && capsLock.classList.contains('press')){
			
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
}));




