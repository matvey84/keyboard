import {
  arrowButtonWork,
  insertText,
  backSpaceButtonWork,
} from "./handlers.js";
/* eslint-disable no-restricted-syntax */
// ---------------------------------work capsLock

const textField = document.querySelector(".text-field");

document.querySelector("#CapsLock").addEventListener("click", (e) => {
  if (e.target.id === "CapsLock" || e.target.classList.contains("CapsLock")) {
    document.querySelector("#CapsLock").classList.toggle("press");
  }

  document.querySelectorAll(".main").forEach((el) => {
    el.classList.toggle("hidden");
  });
  document.querySelectorAll(".caps").forEach((el) => {
    el.classList.toggle("hidden");
  });
});

document.querySelectorAll(".key-button").forEach((el) =>
  el.addEventListener("mousedown", (e) => {
    const textFromInput = textField.value;
    const addCharacter = textFromInput.split("");

    if (
      e.target.id !== "CapsLock" ||
      !e.target.classList.contains("capslock")
    ) {
      document.querySelector(`#${e.target.id}`).classList.add("press");
    }

    if (e.target.id === "ShiftLeft" || e.target.id === "ShiftLeft") {
      document.querySelectorAll(".main").forEach((item) => {
        item.classList.add("hidden");
      });

      document.querySelectorAll(".shift").forEach((ele) => {
        ele.classList.remove("hidden");
      });
    }

    const capsLock = document.querySelector(".capslock");
    if (
      (e.target.id === "ShiftLeft" || e.target.id === "ShiftLeft") &&
      capsLock.classList.contains("press")
    ) {
      document.querySelectorAll(".shift").forEach((elem) => {
        elem.classList.add("hidden");
      });

      document.querySelectorAll(".caps").forEach((eleme) => {
        eleme.classList.toggle("hidden");
      });

      document.querySelectorAll(".capsShift").forEach((element) => {
        element.classList.remove("hidden");
      });
    }

    if (e.target.id === "Delete") {
      deleteButtonWork(addCharacter);
    } else if (e.target.id === "Backspace") {
      backSpaceButtonWork(addCharacter);
    } else if (
      e.target.id === "Tab" ||
      e.target.id === "CapsLock" ||
      e.target.id === "Enter" ||
      e.target.id === "ShiftLeft" ||
      e.target.id === "ShiftRight" ||
      e.target.id === "AltRight" ||
      e.target.id === "AltLeft" ||
      e.target.id === "ControlRight" ||
      e.target.id === "ControlLeft" ||
      e.target.id === "MetaLeft"
    ) {
      // eslint-disable-next-line no-unused-expressions
      null;
    } else if (e.target.textContent.length > 1) {
      for (const element of e.target.childNodes) {
        if (!element.className.includes("hidden")) {
          if (
            textField.selectionStart === textField.value.length &&
            !e.target.id.toLowerCase().includes("arrow")
          ) {
            insertText(
              element.textContent,
              addCharacter,
              textField.selectionStart
            );
          } else if (e.target.id.toLowerCase().includes("arrow")) {
            arrowButtonWork(e)
          } else {
            insertText(
              element.textContent,
              addCharacter,
              textField.selectionStart
            );
          }
        }
      }
    } else {
      if (
        textField.selectionStart === textField.value.length &&
        !e.target.id.toLowerCase().includes("arrow")
      ) {
        insertText(
          e.target.textContent,
          addCharacter,
          textField.selectionStart
        );
      } else if (e.target.id.toLowerCase().includes("arrow")) {
        arrowButtonWork(e)
      } else {
        insertText(
          e.target.textContent,
          addCharacter,
          textField.selectionStart
        );
      }
    }
    if (e.target.id === "Enter") {
      addCharacter.splice(addCharacter.length + 1, 0, "\n");
      textField.value = addCharacter.join("");
    }
    if (e.target.id === "Tab") {
      addCharacter.splice(addCharacter.length + 1, 0, "\t");
      textField.value = addCharacter.join("");
    }
    textField.classList.add("higlight");
    textField.focus();
    localStorage.setItem("CONTENT", JSON.stringify(textField.value));
  })
);

document.querySelectorAll(".key-button").forEach((el) =>
  el.addEventListener("mouseup", (e) => {
    if (
      e.target.id !== "CapsLock" ||
      !e.target.classList.contains("capslock")
    ) {
      document.querySelector(`#${e.target.id}`).classList.remove("press");
    }

    if (e.target.id === "ShiftLeft" || e.target.id === "ShiftLeft") {
      document.querySelectorAll(".main").forEach((item) => {
        item.classList.remove("hidden");
      });

      document.querySelectorAll(".shift").forEach((ele) => {
        ele.classList.add("hidden");
      });
    }

    const capsLock = document.querySelector(".capslock");
    if (
      (e.target.id === "ShiftLeft" || e.target.id === "ShiftLeft") &&
      capsLock.classList.contains("press")
    ) {
      document.querySelectorAll(".main").forEach((elem) => {
        elem.classList.add("hidden");
      });

      document.querySelectorAll(".caps").forEach((eleme) => {
        eleme.classList.toggle("hidden");
      });

      document.querySelectorAll(".capsShift").forEach((element) => {
        element.classList.add("hidden");
      });
    }
    textField.classList.remove("higlight");
    textField.focus();
    localStorage.setItem("CONTENT", JSON.stringify(textField.value));
  })
);

function deleteButtonWork(addCharacter) {
  const textField = document.querySelector(".text-field");
  const curssorPosition = textField.selectionStart;
  const removeCharAmmount = Math.abs(
    textField.selectionStart - textField.selectionEnd
  );

  if (textField.selectionStart !== textField.selectionEnd) {
    textField.value =
      addCharacter.slice(0, curssorPosition).join("") +
      addCharacter.slice(curssorPosition + removeCharAmmount).join("");
  } else {
    textField.value =
      addCharacter.slice(0, curssorPosition).join("") +
      addCharacter.slice(curssorPosition + 1).join("");
  }
  textField.selectionStart = curssorPosition;
  textField.selectionEnd = textField.selectionStart;
  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
}

// function backSpaceButtonWork(addCharacter) {

//   const textField = document.querySelector(".text-field");
//   const curssorPosition = Math.max(0, textField.selectionStart);
//   const removeCharAmmount = Math.abs(
//     textField.selectionStart - textField.selectionEnd
//   );

//   if (textField.selectionStart !== textField.selectionEnd) {

//     textField.value =
//       addCharacter.slice(0, curssorPosition).join("") +
//       addCharacter.slice(curssorPosition + removeCharAmmount).join("");

//   } else {
//     textField.value =
//       addCharacter.slice(0, curssorPosition - 1).join("") +
//       addCharacter.slice(textField.selectionEnd).join("");

//   }
//   textField.selectionStart = curssorPosition-1;
//   textField.selectionEnd = textField.selectionStart;
//   textField.focus();
//   localStorage.setItem("CONTENT", JSON.stringify(textField.value));
// }

// function insertText(chars, addCharacter, curssorPosition) {
//   textField.value =
//     addCharacter.slice(0, curssorPosition).join("") +
//     chars +
//     addCharacter.slice(curssorPosition).join("");
//   textField.selectionStart = curssorPosition + chars.length;
//   textField.selectionEnd = textField.selectionStart;
//   textField.focus();
//   localStorage.setItem("CONTENT", JSON.stringify(textField.value));
// }

// function arrowButtonWork(e) {
//   const textField = document.querySelector(".text-field");

// console.log('arrow');
//   textField.focus();
//   localStorage.setItem("CONTENT", JSON.stringify(textField.value));
// }
