export function backSpaceButtonWork(addCharacter) {
  const textField = document.querySelector(".text-field");
  const curssorPosition = Math.max(0, textField.selectionStart);
  const removeCharAmmount = Math.abs(
    textField.selectionStart - textField.selectionEnd
  );

  if (textField.selectionStart !== textField.selectionEnd) {

    textField.value =
      addCharacter.slice(0, curssorPosition).join("") +
      addCharacter.slice(curssorPosition + removeCharAmmount).join("");

  } else {
    textField.value =
      addCharacter.slice(0, curssorPosition - 1).join("") +
      addCharacter.slice(textField.selectionEnd).join("");
      
  }
  textField.selectionStart = curssorPosition-1;
  textField.selectionEnd = textField.selectionStart;
  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
}

export function insertText(chars, addCharacter, curssorPosition) {
  const textField = document.querySelector(".text-field");

  textField.value =
    addCharacter.slice(0, curssorPosition).join("") +
    chars +
    addCharacter.slice(curssorPosition).join("");

  textField.selectionStart = curssorPosition + chars.length;
  textField.selectionEnd = textField.selectionStart;
  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
}
export function arrowButtonWork(e) {
  const textField = document.querySelector(".text-field");
  let arrow = e.target;
    if(arrow.id.toLowerCase() === 'arrowup'){
      textField.selectionStart = 0;
      textField.selectionEnd = textField.selectionStart;
    } else if (arrow.id.toLowerCase() === 'arrowright') {
      textField.selectionStart = Math.min(
        textField.textLength,
        textField.selectionEnd + 1,
      );
      textField.selectionEnd = textField.selectionStart;
    } else if (arrow.id.toLowerCase() === 'arrowdown') {
      textField.selectionEnd = textField.textLength;
      textField.selectionStart = textField.selectionEnd;
    }  else {
      textField.selectionStart = Math.max(0, textField.selectionStart - 1);
      textField.selectionEnd = textField.selectionStart;
    }




  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
}
