
//---------------------------------work capsLock
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




