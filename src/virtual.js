/* eslint-disable no-restricted-syntax */
// ---------------------------------work capsLock

const textField = document.querySelector('.text-field');

document.querySelector('#CapsLock').addEventListener('click', (e) => {
  if (e.target.id === 'CapsLock' || e.target.classList.contains('CapsLock')) {
    document.querySelector('#CapsLock').classList.toggle('press');
  }

  document.querySelectorAll('.main').forEach((el) => {
    el.classList.toggle('hidden');
  });
  document.querySelectorAll('.caps').forEach((el) => {
    el.classList.toggle('hidden');
  });
});
document.querySelectorAll('.key-button')
  .forEach((el) => el.addEventListener('mousedown', (e) => {
    if (e.target.id !== 'CapsLock' || !e.target.classList.contains('capslock')) {
      document.querySelector(`#${e.target.id}`).classList.add('press');
    }

    if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftLeft') {
      document.querySelectorAll('.main').forEach((item) => {
        item.classList.add('hidden');
      });

      document.querySelectorAll('.shift').forEach((ele) => {
        ele.classList.remove('hidden');
      });
    }

    const capsLock = document.querySelector('.capslock');
    if ((e.target.id === 'ShiftLeft' || e.target.id === 'ShiftLeft') && capsLock.classList.contains('press')) {
      document.querySelectorAll('.shift').forEach((elem) => {
        elem.classList.add('hidden');
      });

      document.querySelectorAll('.caps').forEach((eleme) => {
        eleme.classList.toggle('hidden');
      });

      document.querySelectorAll('.capsShift').forEach((element) => {
        element.classList.remove('hidden');
      });
    }
    const textFromInput = textField.value;
    const addCharacter = textFromInput.split('');

    if (e.target.id === 'Backspace' || e.target.id === 'Tab' || e.target.id === 'CapsLock'
|| e.target.id === 'Delete' || e.target.id === 'Enter' || e.target.id === 'ShiftLeft'
|| e.target.id === 'ShiftRight' || e.target.id === 'AltRight' || e.target.id === 'AltLeft'
|| e.target.id === 'ControlRight' || e.target.id === 'ControlLeft' || e.target.id === 'MetaLeft') {
      // eslint-disable-next-line no-unused-expressions
      null;
    } else if (e.target.textContent.length > 1) {
      for (const element of e.target.childNodes) {
        if (!element.classList.contains('hidden')) {
          addCharacter.push(element.textContent);
          textField.value = addCharacter.join('');
        }
      }
    } else {
      addCharacter.push(e.target.textContent);
      textField.value = addCharacter.join('');
    }
    if (e.target.id === 'Backspace') {
      addCharacter.pop(addCharacter.length - 1);
      textField.value = addCharacter.join('');
    }
    if (e.target.id === 'Enter') {
      addCharacter.splice(addCharacter.length + 1, 0, '\n');
      textField.value = addCharacter.join('');
    }
    if (e.target.id === 'Tab') {
      addCharacter.splice(addCharacter.length + 1, 0, '\t');
      textField.value = addCharacter.join('');
    }
  }));

document.querySelectorAll('.key-button')
  .forEach((el) => el.addEventListener('mouseup', (e) => {
    if (e.target.id !== 'CapsLock' || !e.target.classList.contains('capslock')) {
      document.querySelector(`#${e.target.id}`).classList.remove('press');
    }

    if (e.target.id === 'ShiftLeft' || e.target.id === 'ShiftLeft') {
      document.querySelectorAll('.main').forEach((item) => {
        item.classList.remove('hidden');
      });

      document.querySelectorAll('.shift').forEach((ele) => {
        ele.classList.add('hidden');
      });
    }

    const capsLock = document.querySelector('.capslock');
    if ((e.target.id === 'ShiftLeft' || e.target.id === 'ShiftLeft') && capsLock.classList.contains('press')) {
      document.querySelectorAll('.main').forEach((elem) => {
        elem.classList.add('hidden');
      });

      document.querySelectorAll('.caps').forEach((eleme) => {
        eleme.classList.toggle('hidden');
      });

      document.querySelectorAll('.capsShift').forEach((element) => {
        element.classList.add('hidden');
      });
    }
  }));
