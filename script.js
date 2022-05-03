let body = document.querySelector('body');;

let container = document.createElement('div');
container.classList.add('container');
body.append(container);

let header = document.createElement('h1');
header.classList.add('title')
header.innerText = 'Virtual Keyboard V1.0'
container.appendChild(header)

let textField = document.createElement('textarea')
textField.classList.add('text-field')
//  textField.setAttribute(spellcheck,true)
container.appendChild(textField)
