/* eslint-disable no-plusplus */
import {library} from './layout.js';
// const keyValue = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "`",
//     keyCode: 192,
//   },
//   {
//     charCode: 0,
//     code: "Digit1",
//     key: "1",
//     keyCode: 49,
//   },
//   {
//     charCode: 0,
//     code: "Digit2",
//     key: "2",
//     keyCode: 50,
//   },
//   {
//     charCode: 0,
//     code: "Digit3",
//     key: "3",
//     keyCode: 51,
//   },
//   {
//     charCode: 0,
//     code: "Digit4",
//     key: "4",
//     keyCode: 52,
//   },
//   {
//     charCode: 0,
//     code: "Digit5",
//     key: "5",
//     keyCode: 53,
//   },
//   {
//     charCode: 0,
//     code: "Digit6",
//     key: "6",
//     keyCode: 54,
//   },
//   {
//     charCode: 0,
//     code: "Digit7",
//     key: "7",
//     keyCode: 55,
//   },
//   {
//     charCode: 0,
//     code: "Digit8",
//     key: "8",
//     keyCode: 56,
//   },
//   {
//     charCode: 0,
//     code: "Digit9",
//     key: "9",
//     keyCode: 57,
//   },
//   {
//     charCode: 0,
//     code: "Digit0",
//     key: "0",
//     keyCode: 48,
//   },
//   {
//     charCode: 0,
//     code: "Minus",
//     key: "-",
//     keyCode: 189,
//   },
//   {
//     charCode: 0,
//     code: "Equal",
//     key: "=",
//     keyCode: 187,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 0,
//     code: "KeyQ",
//     key: "q",
//     keyCode: 81,
//   },
//   {
//     charCode: 0,
//     code: "KeyW",
//     key: "w",
//     keyCode: 87,
//   },
//   {
//     charCode: 0,
//     code: "KeyE",
//     key: "e",
//     keyCode: 69,
//   },
//   {
//     charCode: 0,
//     code: "KeyR",
//     key: "r",
//     keyCode: 82,
//   },
//   {
//     charCode: 0,
//     code: "KeyT",
//     key: "t",
//     keyCode: 84,
//   },
//   {
//     charCode: 0,
//     code: "KeyY",
//     key: "y",
//     keyCode: 89,
//   },
//   {
//     charCode: 0,
//     code: "KeyU",
//     key: "u",
//     keyCode: 85,
//   },
//   {
//     charCode: 0,
//     code: "KeyI",
//     key: "i",
//     keyCode: 73,
//   },
//   {
//     charCode: 0,
//     code: "KeyO",
//     key: "o",
//     keyCode: 79,
//   },
//   {
//     charCode: 0,
//     code: "KeyP",
//     key: "p",
//     keyCode: 80,
//   },
//   {
//     charCode: 0,
//     code: "BracketLeft",
//     key: "[",
//     keyCode: 219,
//   },
//   {
//     charCode: 0,
//     code: "BracketRight",
//     key: "]",
//     keyCode: 221,
//   },
//   {
//     charCode: 0,
//     code: "Backslash",
//     key: "\\",
//     keyCode: 220,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 0,
//     code: "KeyA",
//     key: "a",
//     keyCode: 65,
//   },
//   {
//     charCode: 0,
//     code: "KeyS",
//     key: "s",
//     keyCode: 83,
//   },
//   {
//     charCode: 0,
//     code: "KeyD",
//     key: "d",
//     keyCode: 68,
//   },
//   {
//     charCode: 0,
//     code: "KeyF",
//     key: "f",
//     keyCode: 70,
//   },
//   {
//     charCode: 0,
//     code: "KeyG",
//     key: "g",
//     keyCode: 71,
//   },
//   {
//     charCode: 0,
//     code: "KeyH",
//     key: "h",
//     keyCode: 72,
//   },
//   {
//     charCode: 0,
//     code: "KeyJ",
//     key: "j",
//     keyCode: 74,
//   },
//   {
//     charCode: 0,
//     code: "KeyK",
//     key: "k",
//     keyCode: 75,
//   },
//   {
//     charCode: 0,
//     code: "KeyL",
//     key: "l",
//     keyCode: 76,
//   },
//   {
//     charCode: 0,
//     code: "Semicolon",
//     key: ";",
//     keyCode: 186,
//   },
//   {
//     charCode: 0,
//     code: "Quote",
//     key: "'",
//     keyCode: 222,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "KeyZ",
//     key: "z",
//     keyCode: 90,
//   },
//   {
//     charCode: 0,
//     code: "KeyX",
//     key: "x",
//     keyCode: 88,
//   },
//   {
//     charCode: 0,
//     code: "KeyC",
//     key: "c",
//     keyCode: 67,
//   },
//   {
//     charCode: 0,
//     code: "KeyV",
//     key: "v",
//     keyCode: 86,
//   },
//   {
//     charCode: 0,
//     code: "KeyB",
//     key: "b",
//     keyCode: 66,
//   },
//   {
//     charCode: 0,
//     code: "KeyN",
//     key: "n",
//     keyCode: 78,
//   },
//   {
//     charCode: 0,
//     code: "KeyM",
//     key: "m",
//     keyCode: 77,
//   },
//   {
//     charCode: 0,
//     code: "Comma",
//     key: ",",
//     keyCode: 188,
//   },
//   {
//     charCode: 0,
//     code: "Period",
//     key: ".",
//     keyCode: 190,
//   },
//   {
//     charCode: 0,
//     code: "Slash",
//     key: "/",
//     keyCode: 191,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// const keyValueCaps = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "`",
//     keyCode: 192,
//   },
//   {
//     charCode: 0,
//     code: "Digit1",
//     key: "1",
//     keyCode: 49,
//   },
//   {
//     charCode: 0,
//     code: "Digit2",
//     key: "2",
//     keyCode: 50,
//   },
//   {
//     charCode: 0,
//     code: "Digit3",
//     key: "3",
//     keyCode: 51,
//   },
//   {
//     charCode: 0,
//     code: "Digit4",
//     key: "4",
//     keyCode: 52,
//   },
//   {
//     charCode: 0,
//     code: "Digit5",
//     key: "5",
//     keyCode: 53,
//   },
//   {
//     charCode: 0,
//     code: "Digit6",
//     key: "6",
//     keyCode: 54,
//   },
//   {
//     charCode: 0,
//     code: "Digit7",
//     key: "7",
//     keyCode: 55,
//   },
//   {
//     charCode: 0,
//     code: "Digit8",
//     key: "8",
//     keyCode: 56,
//   },
//   {
//     charCode: 0,
//     code: "Digit9",
//     key: "9",
//     keyCode: 57,
//   },
//   {
//     charCode: 0,
//     code: "Digit0",
//     key: "0",
//     keyCode: 48,
//   },
//   {
//     charCode: 0,
//     code: "Minus",
//     key: "-",
//     keyCode: 189,
//   },
//   {
//     charCode: 0,
//     code: "Equal",
//     key: "=",
//     keyCode: 187,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 0,
//     code: "KeyQ",
//     key: "Q",
//     keyCode: 81,
//   },
//   {
//     charCode: 0,
//     code: "KeyW",
//     key: "W",
//     keyCode: 87,
//   },
//   {
//     charCode: 0,
//     code: "KeyE",
//     key: "E",
//     keyCode: 69,
//   },
//   {
//     charCode: 0,
//     code: "KeyR",
//     key: "R",
//     keyCode: 82,
//   },
//   {
//     charCode: 0,
//     code: "KeyT",
//     key: "T",
//     keyCode: 84,
//   },
//   {
//     charCode: 0,
//     code: "KeyY",
//     key: "Y",
//     keyCode: 89,
//   },
//   {
//     charCode: 0,
//     code: "KeyU",
//     key: "U",
//     keyCode: 85,
//   },
//   {
//     charCode: 0,
//     code: "KeyI",
//     key: "I",
//     keyCode: 73,
//   },
//   {
//     charCode: 0,
//     code: "KeyO",
//     key: "O",
//     keyCode: 79,
//   },
//   {
//     charCode: 0,
//     code: "KeyP",
//     key: "P",
//     keyCode: 80,
//   },
//   {
//     charCode: 0,
//     code: "BracketLeft",
//     key: "[",
//     keyCode: 219,
//   },
//   {
//     charCode: 0,
//     code: "BracketRight",
//     key: "]",
//     keyCode: 221,
//   },
//   {
//     charCode: 0,
//     code: "Backslash",
//     key: "\\",
//     keyCode: 220,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 0,
//     code: "KeyA",
//     key: "A",
//     keyCode: 65,
//   },
//   {
//     charCode: 0,
//     code: "KeyS",
//     key: "S",
//     keyCode: 83,
//   },
//   {
//     charCode: 0,
//     code: "KeyD",
//     key: "D",
//     keyCode: 68,
//   },
//   {
//     charCode: 0,
//     code: "KeyF",
//     key: "F",
//     keyCode: 70,
//   },
//   {
//     charCode: 0,
//     code: "KeyG",
//     key: "G",
//     keyCode: 71,
//   },
//   {
//     charCode: 0,
//     code: "KeyH",
//     key: "H",
//     keyCode: 72,
//   },
//   {
//     charCode: 0,
//     code: "KeyJ",
//     key: "J",
//     keyCode: 74,
//   },
//   {
//     charCode: 0,
//     code: "KeyK",
//     key: "K",
//     keyCode: 75,
//   },
//   {
//     charCode: 0,
//     code: "KeyL",
//     key: "L",
//     keyCode: 76,
//   },
//   {
//     charCode: 0,
//     code: "Semicolon",
//     key: ";",
//     keyCode: 186,
//   },
//   {
//     charCode: 0,
//     code: "Quote",
//     key: "'",
//     keyCode: 222,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "KeyZ",
//     key: "Z",
//     keyCode: 90,
//   },
//   {
//     charCode: 0,
//     code: "KeyX",
//     key: "X",
//     keyCode: 88,
//   },
//   {
//     charCode: 0,
//     code: "KeyC",
//     key: "C",
//     keyCode: 67,
//   },
//   {
//     charCode: 0,
//     code: "KeyV",
//     key: "V",
//     keyCode: 86,
//   },
//   {
//     charCode: 0,
//     code: "KeyB",
//     key: "B",
//     keyCode: 66,
//   },
//   {
//     charCode: 0,
//     code: "KeyN",
//     key: "N",
//     keyCode: 78,
//   },
//   {
//     charCode: 0,
//     code: "KeyM",
//     key: "M",
//     keyCode: 77,
//   },
//   {
//     charCode: 0,
//     code: "Comma",
//     key: ",",
//     keyCode: 188,
//   },
//   {
//     charCode: 0,
//     code: "Period",
//     key: ".",
//     keyCode: 190,
//   },
//   {
//     charCode: 0,
//     code: "Slash",
//     key: "/",
//     keyCode: 191,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// const keyValueShift = [
//   {
//     charCode: 126,
//     code: "Backquote",
//     key: "~",
//     keyCode: 126,
//   },
//   {
//     charCode: 33,
//     code: "Digit1",
//     key: "!",
//     keyCode: 33,
//   },
//   {
//     charCode: 64,
//     code: "Digit2",
//     key: "@",
//     keyCode: 64,
//   },
//   {
//     charCode: 35,
//     code: "Digit3",
//     key: "#",
//     keyCode: 35,
//   },
//   {
//     charCode: 36,
//     code: "Digit4",
//     key: "$",
//     keyCode: 36,
//   },
//   {
//     charCode: 37,
//     code: "Digit5",
//     key: "%",
//     keyCode: 37,
//   },
//   {
//     charCode: 94,
//     code: "Digit6",
//     key: "^",
//     keyCode: 94,
//   },
//   {
//     charCode: 38,
//     code: "Digit7",
//     key: "&",
//     keyCode: 38,
//   },
//   {
//     charCode: 42,
//     code: "Digit8",
//     key: "*",
//     keyCode: 42,
//   },
//   {
//     charCode: 40,
//     code: "Digit9",
//     key: "(",
//     keyCode: 40,
//   },
//   {
//     charCode: 41,
//     code: "Digit0",
//     key: ")",
//     keyCode: 41,
//   },
//   {
//     charCode: 95,
//     code: "Minus",
//     key: "_",
//     keyCode: 95,
//   },
//   {
//     charCode: 43,
//     code: "Equal",
//     key: "+",
//     keyCode: 43,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 81,
//     code: "KeyQ",
//     key: "Q",
//     keyCode: 81,
//   },
//   {
//     charCode: 87,
//     code: "KeyW",
//     key: "W",
//     keyCode: 87,
//   },
//   {
//     charCode: 69,
//     code: "KeyE",
//     key: "E",
//     keyCode: 69,
//   },
//   {
//     charCode: 82,
//     code: "KeyR",
//     key: "R",
//     keyCode: 82,
//   },
//   {
//     charCode: 84,
//     code: "KeyT",
//     key: "T",
//     keyCode: 84,
//   },
//   {
//     charCode: 89,
//     code: "KeyY",
//     key: "Y",
//     keyCode: 89,
//   },
//   {
//     charCode: 85,
//     code: "KeyU",
//     key: "U",
//     keyCode: 85,
//   },
//   {
//     charCode: 73,
//     code: "KeyI",
//     key: "I",
//     keyCode: 73,
//   },
//   {
//     charCode: 79,
//     code: "KeyO",
//     key: "O",
//     keyCode: 79,
//   },
//   {
//     charCode: 80,
//     code: "KeyP",
//     key: "P",
//     keyCode: 80,
//   },
//   {
//     charCode: 123,
//     code: "BracketLeft",
//     key: "{",
//     keyCode: 123,
//   },
//   {
//     charCode: 125,
//     code: "BracketRight",
//     key: "}",
//     keyCode: 125,
//   },
//   {
//     charCode: 124,
//     code: "Backslash",
//     key: "|",
//     keyCode: 124,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 65,
//     code: "KeyA",
//     key: "A",
//     keyCode: 65,
//   },
//   {
//     charCode: 83,
//     code: "KeyS",
//     key: "S",
//     keyCode: 83,
//   },
//   {
//     charCode: 68,
//     code: "KeyD",
//     key: "D",
//     keyCode: 68,
//   },
//   {
//     charCode: 70,
//     code: "KeyF",
//     key: "F",
//     keyCode: 70,
//   },
//   {
//     charCode: 71,
//     code: "KeyG",
//     key: "G",
//     keyCode: 71,
//   },
//   {
//     charCode: 72,
//     code: "KeyH",
//     key: "H",
//     keyCode: 72,
//   },
//   {
//     charCode: 74,
//     code: "KeyJ",
//     key: "J",
//     keyCode: 74,
//   },
//   {
//     charCode: 75,
//     code: "KeyK",
//     key: "K",
//     keyCode: 75,
//   },
//   {
//     charCode: 76,
//     code: "KeyL",
//     key: "L",
//     keyCode: 76,
//   },
//   {
//     charCode: 58,
//     code: "Semicolon",
//     key: ":",
//     keyCode: 58,
//   },
//   {
//     charCode: 34,
//     code: "Quote",
//     key: '"',
//     keyCode: 34,
//   },
//   {
//     charCode: 13,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 90,
//     code: "KeyZ",
//     key: "Z",
//     keyCode: 90,
//   },
//   {
//     charCode: 88,
//     code: "KeyX",
//     key: "X",
//     keyCode: 88,
//   },
//   {
//     charCode: 67,
//     code: "KeyC",
//     key: "C",
//     keyCode: 67,
//   },
//   {
//     charCode: 86,
//     code: "KeyV",
//     key: "V",
//     keyCode: 86,
//   },
//   {
//     charCode: 66,
//     code: "KeyB",
//     key: "B",
//     keyCode: 66,
//   },
//   {
//     charCode: 78,
//     code: "KeyN",
//     key: "N",
//     keyCode: 78,
//   },
//   {
//     charCode: 77,
//     code: "KeyM",
//     key: "M",
//     keyCode: 77,
//   },
//   {
//     charCode: 60,
//     code: "Comma",
//     key: "<",
//     keyCode: 60,
//   },
//   {
//     charCode: 62,
//     code: "Period",
//     key: ">",
//     keyCode: 6,
//   },
//   {
//     charCode: 63,
//     code: "Slash",
//     key: "?",
//     keyCode: 63,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// const keyValueCapsShift = [
//   {
//     charCode: 126,
//     code: "Backquote",
//     key: "~",
//     keyCode: 126,
//   },
//   {
//     charCode: 33,
//     code: "Digit1",
//     key: "!",
//     keyCode: 33,
//   },
//   {
//     charCode: 64,
//     code: "Digit2",
//     key: "@",
//     keyCode: 64,
//   },
//   {
//     charCode: 35,
//     code: "Digit3",
//     key: "#",
//     keyCode: 35,
//   },
//   {
//     charCode: 36,
//     code: "Digit4",
//     key: "$",
//     keyCode: 36,
//   },
//   {
//     charCode: 37,
//     code: "Digit5",
//     key: "%",
//     keyCode: 37,
//   },
//   {
//     charCode: 94,
//     code: "Digit6",
//     key: "^",
//     keyCode: 94,
//   },
//   {
//     charCode: 38,
//     code: "Digit7",
//     key: "&",
//     keyCode: 38,
//   },
//   {
//     charCode: 42,
//     code: "Digit8",
//     key: "*",
//     keyCode: 42,
//   },
//   {
//     charCode: 40,
//     code: "Digit9",
//     key: "(",
//     keyCode: 40,
//   },
//   {
//     charCode: 41,
//     code: "Digit0",
//     key: ")",
//     keyCode: 41,
//   },
//   {
//     charCode: 95,
//     code: "Minus",
//     key: "_",
//     keyCode: 95,
//   },
//   {
//     charCode: 43,
//     code: "Equal",
//     key: "+",
//     keyCode: 43,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 0,
//     code: "KeyQ",
//     key: "q",
//     keyCode: 81,
//   },
//   {
//     charCode: 0,
//     code: "KeyW",
//     key: "w",
//     keyCode: 87,
//   },
//   {
//     charCode: 0,
//     code: "KeyE",
//     key: "e",
//     keyCode: 69,
//   },
//   {
//     charCode: 0,
//     code: "KeyR",
//     key: "r",
//     keyCode: 82,
//   },
//   {
//     charCode: 0,
//     code: "KeyT",
//     key: "t",
//     keyCode: 84,
//   },
//   {
//     charCode: 0,
//     code: "KeyY",
//     key: "y",
//     keyCode: 89,
//   },
//   {
//     charCode: 0,
//     code: "KeyU",
//     key: "u",
//     keyCode: 85,
//   },
//   {
//     charCode: 0,
//     code: "KeyI",
//     key: "i",
//     keyCode: 73,
//   },
//   {
//     charCode: 0,
//     code: "KeyO",
//     key: "o",
//     keyCode: 79,
//   },
//   {
//     charCode: 0,
//     code: "KeyP",
//     key: "p",
//     keyCode: 80,
//   },
//   {
//     charCode: 123,
//     code: "BracketLeft",
//     key: "{",
//     keyCode: 123,
//   },
//   {
//     charCode: 125,
//     code: "BracketRight",
//     key: "}",
//     keyCode: 125,
//   },
//   {
//     charCode: 124,
//     code: "Backslash",
//     key: "|",
//     keyCode: 124,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 0,
//     code: "KeyA",
//     key: "a",
//     keyCode: 65,
//   },
//   {
//     charCode: 0,
//     code: "KeyS",
//     key: "s",
//     keyCode: 83,
//   },
//   {
//     charCode: 0,
//     code: "KeyD",
//     key: "d",
//     keyCode: 68,
//   },
//   {
//     charCode: 0,
//     code: "KeyF",
//     key: "f",
//     keyCode: 70,
//   },
//   {
//     charCode: 0,
//     code: "KeyG",
//     key: "g",
//     keyCode: 71,
//   },
//   {
//     charCode: 0,
//     code: "KeyH",
//     key: "h",
//     keyCode: 72,
//   },
//   {
//     charCode: 0,
//     code: "KeyJ",
//     key: "j",
//     keyCode: 74,
//   },
//   {
//     charCode: 0,
//     code: "KeyK",
//     key: "k",
//     keyCode: 75,
//   },
//   {
//     charCode: 0,
//     code: "KeyL",
//     key: "l",
//     keyCode: 76,
//   },
//   {
//     charCode: 58,
//     code: "Semicolon",
//     key: ":",
//     keyCode: 58,
//   },
//   {
//     charCode: 34,
//     code: "Quote",
//     key: '"',
//     keyCode: 34,
//   },
//   {
//     charCode: 13,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "KeyZ",
//     key: "z",
//     keyCode: 90,
//   },
//   {
//     charCode: 0,
//     code: "KeyX",
//     key: "x",
//     keyCode: 88,
//   },
//   {
//     charCode: 0,
//     code: "KeyC",
//     key: "c",
//     keyCode: 67,
//   },
//   {
//     charCode: 0,
//     code: "KeyV",
//     key: "v",
//     keyCode: 86,
//   },
//   {
//     charCode: 0,
//     code: "KeyB",
//     key: "b",
//     keyCode: 66,
//   },
//   {
//     charCode: 0,
//     code: "KeyN",
//     key: "n",
//     keyCode: 78,
//   },
//   {
//     charCode: 0,
//     code: "KeyM",
//     key: "m",
//     keyCode: 77,
//   },
//   {
//     charCode: 60,
//     code: "Comma",
//     key: "<",
//     keyCode: 60,
//   },
//   {
//     charCode: 62,
//     code: "Period",
//     key: ">",
//     keyCode: 6,
//   },
//   {
//     charCode: 63,
//     code: "Slash",
//     key: "?",
//     keyCode: 63,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// export const keyValueRus = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "ё",
//     keyCode: 192,
//   },
//   {
//     charCode: 49,
//     code: "Digit1",
//     key: "1",
//     keyCode: 49,
//   },
//   {
//     charCode: 50,
//     code: "Digit2",
//     key: "2",
//     keyCode: 50,
//   },
//   {
//     charCode: 51,
//     code: "Digit3",
//     key: "3",
//     keyCode: 51,
//   },
//   {
//     charCode: 52,
//     code: "Digit4",
//     key: "4",
//     keyCode: 52,
//   },
//   {
//     charCode: 53,
//     code: "Digit5",
//     key: "5",
//     keyCode: 53,
//   },
//   {
//     charCode: 54,
//     code: "Digit6",
//     key: "6",
//     keyCode: 54,
//   },
//   {
//     charCode: 55,
//     code: "Digit7",
//     key: "7",
//     keyCode: 55,
//   },
//   {
//     charCode: 56,
//     code: "Digit8",
//     key: "8",
//     keyCode: 56,
//   },
//   {
//     charCode: 57,
//     code: "Digit9",
//     key: "9",
//     keyCode: 57,
//   },
//   {
//     charCode: 48,
//     code: "Digit0",
//     key: "0",
//     keyCode: 48,
//   },
//   {
//     charCode: 45,
//     code: "Minus",
//     key: "-",
//     keyCode: 45,
//   },
//   {
//     charCode: 61,
//     code: "Equal",
//     key: "=",
//     keyCode: 61,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 1081,
//     code: "KeyQ",
//     key: "й",
//     keyCode: 1081,
//   },
//   {
//     charCode: 1094,
//     code: "KeyW",
//     key: "ц",
//     keyCode: 1094,
//   },
//   {
//     charCode: 1091,
//     code: "KeyE",
//     key: "у",
//     keyCode: 1091,
//   },
//   {
//     charCode: 1082,
//     code: "KeyR",
//     key: "к",
//     keyCode: 1082,
//   },
//   {
//     charCode: 1077,
//     code: "KeyT",
//     key: "е",
//     keyCode: 1077,
//   },
//   {
//     charCode: 1085,
//     code: "KeyY",
//     key: "н",
//     keyCode: 1085,
//   },
//   {
//     charCode: 1075,
//     code: "KeyU",
//     key: "г",
//     keyCode: 1075,
//   },
//   {
//     charCode: 1096,
//     code: "KeyI",
//     key: "ш",
//     keyCode: 1096,
//   },
//   {
//     charCode: 1097,
//     code: "KeyO",
//     key: "щ",
//     keyCode: 1097,
//   },
//   {
//     charCode: 1079,
//     code: "KeyP",
//     key: "з",
//     keyCode: 1079,
//   },
//   {
//     charCode: 1093,
//     code: "BracketLeft",
//     key: "х",
//     keyCode: 1093,
//   },
//   {
//     charCode: 1098,
//     code: "BracketRight",
//     key: "ъ",
//     keyCode: 1098,
//   },
//   {
//     charCode: 92,
//     code: "Backslash",
//     key: "\\",
//     keyCode: 92,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 1092,
//     code: "KeyA",
//     key: "ф",
//     keyCode: 1092,
//   },
//   {
//     charCode: 1099,
//     code: "KeyS",
//     key: "ы",
//     keyCode: 1099,
//   },
//   {
//     charCode: 1074,
//     code: "KeyD",
//     key: "в",
//     keyCode: 1074,
//   },
//   {
//     charCode: 1072,
//     code: "KeyF",
//     key: "а",
//     keyCode: 1072,
//   },
//   {
//     charCode: 1087,
//     code: "KeyG",
//     key: "п",
//     keyCode: 1087,
//   },
//   {
//     charCode: 1088,
//     code: "KeyH",
//     key: "р",
//     keyCode: 1088,
//   },
//   {
//     charCode: 1086,
//     code: "KeyJ",
//     key: "о",
//     keyCode: 1086,
//   },
//   {
//     charCode: 1083,
//     code: "KeyK",
//     key: "л",
//     keyCode: 1083,
//   },
//   {
//     charCode: 1076,
//     code: "KeyL",
//     key: "д",
//     keyCode: 1076,
//   },
//   {
//     charCode: 1078,
//     code: "Semicolon",
//     key: "ж",
//     keyCode: 1078,
//   },
//   {
//     charCode: 1101,
//     code: "Quote",
//     key: "э",
//     keyCode: 1101,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 1103,
//     code: "KeyZ",
//     key: "я",
//     keyCode: 1103,
//   },
//   {
//     charCode: 1095,
//     code: "KeyX",
//     key: "ч",
//     keyCode: 1095,
//   },
//   {
//     charCode: 1089,
//     code: "KeyC",
//     key: "с",
//     keyCode: 1089,
//   },
//   {
//     charCode: 1084,
//     code: "KeyV",
//     key: "м",
//     keyCode: 1084,
//   },
//   {
//     charCode: 1080,
//     code: "KeyB",
//     key: "и",
//     keyCode: 1080,
//   },
//   {
//     charCode: 1090,
//     code: "KeyN",
//     key: "т",
//     keyCode: 1090,
//   },
//   {
//     charCode: 1100,
//     code: "KeyM",
//     key: "ь",
//     keyCode: 1100,
//   },
//   {
//     charCode: 1073,
//     code: "Comma",
//     key: "б",
//     keyCode: 1073,
//   },
//   {
//     charCode: 1102,
//     code: "Period",
//     key: "ю",
//     keyCode: 1102,
//   },
//   {
//     charCode: 46,
//     code: "Slash",
//     key: ".",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// export const keyValueCapsRus = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "Ё",
//     keyCode: 192,
//   },
//   {
//     charCode: 0,
//     code: "Digit1",
//     key: "1",
//     keyCode: 49,
//   },
//   {
//     charCode: 0,
//     code: "Digit2",
//     key: "2",
//     keyCode: 50,
//   },
//   {
//     charCode: 0,
//     code: "Digit3",
//     key: "3",
//     keyCode: 51,
//   },
//   {
//     charCode: 0,
//     code: "Digit4",
//     key: "4",
//     keyCode: 52,
//   },
//   {
//     charCode: 0,
//     code: "Digit5",
//     key: "5",
//     keyCode: 53,
//   },
//   {
//     charCode: 0,
//     code: "Digit6",
//     key: "6",
//     keyCode: 54,
//   },
//   {
//     charCode: 0,
//     code: "Digit7",
//     key: "7",
//     keyCode: 55,
//   },
//   {
//     charCode: 0,
//     code: "Digit8",
//     key: "8",
//     keyCode: 56,
//   },
//   {
//     charCode: 0,
//     code: "Digit9",
//     key: "9",
//     keyCode: 57,
//   },
//   {
//     charCode: 0,
//     code: "Digit0",
//     key: "0",
//     keyCode: 48,
//   },
//   {
//     charCode: 0,
//     code: "Minus",
//     key: "-",
//     keyCode: 189,
//   },
//   {
//     charCode: 0,
//     code: "Equal",
//     key: "=",
//     keyCode: 187,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 0,
//     code: "KeyQ",
//     key: "Й",
//     keyCode: 81,
//   },
//   {
//     charCode: 0,
//     code: "KeyW",
//     key: "Ц",
//     keyCode: 87,
//   },
//   {
//     charCode: 0,
//     code: "KeyE",
//     key: "У",
//     keyCode: 69,
//   },
//   {
//     charCode: 0,
//     code: "KeyR",
//     key: "К",
//     keyCode: 82,
//   },
//   {
//     charCode: 0,
//     code: "KeyT",
//     key: "Е",
//     keyCode: 84,
//   },
//   {
//     charCode: 0,
//     code: "KeyY",
//     key: "Н",
//     keyCode: 89,
//   },
//   {
//     charCode: 0,
//     code: "KeyU",
//     key: "Г",
//     keyCode: 85,
//   },
//   {
//     charCode: 0,
//     code: "KeyI",
//     key: "Ш",
//     keyCode: 73,
//   },
//   {
//     charCode: 0,
//     code: "KeyO",
//     key: "Щ",
//     keyCode: 79,
//   },
//   {
//     charCode: 0,
//     code: "KeyP",
//     key: "З",
//     keyCode: 80,
//   },
//   {
//     charCode: 0,
//     code: "BracketLeft",
//     key: "Х",
//     keyCode: 219,
//   },
//   {
//     charCode: 0,
//     code: "BracketRight",
//     key: "Ъ",
//     keyCode: 221,
//   },
//   {
//     charCode: 0,
//     code: "Backslash",
//     key: "\\",
//     keyCode: 220,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 0,
//     code: "KeyA",
//     key: "Ф",
//     keyCode: 65,
//   },
//   {
//     charCode: 0,
//     code: "KeyS",
//     key: "Ы",
//     keyCode: 83,
//   },
//   {
//     charCode: 0,
//     code: "KeyD",
//     key: "В",
//     keyCode: 68,
//   },
//   {
//     charCode: 0,
//     code: "KeyF",
//     key: "А",
//     keyCode: 70,
//   },
//   {
//     charCode: 0,
//     code: "KeyG",
//     key: "П",
//     keyCode: 71,
//   },
//   {
//     charCode: 0,
//     code: "KeyH",
//     key: "Р",
//     keyCode: 72,
//   },
//   {
//     charCode: 0,
//     code: "KeyJ",
//     key: "О",
//     keyCode: 74,
//   },
//   {
//     charCode: 0,
//     code: "KeyK",
//     key: "Л",
//     keyCode: 75,
//   },
//   {
//     charCode: 0,
//     code: "KeyL",
//     key: "Д",
//     keyCode: 76,
//   },
//   {
//     charCode: 0,
//     code: "Semicolon",
//     key: "Ж",
//     keyCode: 186,
//   },
//   {
//     charCode: 0,
//     code: "Quote",
//     key: "Э",
//     keyCode: 222,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "KeyZ",
//     key: "Я",
//     keyCode: 90,
//   },
//   {
//     charCode: 0,
//     code: "KeyX",
//     key: "Ч",
//     keyCode: 88,
//   },
//   {
//     charCode: 0,
//     code: "KeyC",
//     key: "С",
//     keyCode: 67,
//   },
//   {
//     charCode: 0,
//     code: "KeyV",
//     key: "М",
//     keyCode: 86,
//   },
//   {
//     charCode: 0,
//     code: "KeyB",
//     key: "И",
//     keyCode: 66,
//   },
//   {
//     charCode: 0,
//     code: "KeyN",
//     key: "Т",
//     keyCode: 78,
//   },
//   {
//     charCode: 0,
//     code: "KeyM",
//     key: "Ь",
//     keyCode: 77,
//   },
//   {
//     charCode: 0,
//     code: "Comma",
//     key: "Б",
//     keyCode: 188,
//   },
//   {
//     charCode: 0,
//     code: "Period",
//     key: "Ю",
//     keyCode: 190,
//   },
//   {
//     charCode: 0,
//     code: "Slash",
//     key: ".",
//     keyCode: 191,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// export const keyValueShiftRus = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "ё",
//     keyCode: 192,
//   },
//   {
//     charCode: 0,
//     code: "Digit1",
//     key: "!",
//     keyCode: 49,
//   },
//   {
//     charCode: 0,
//     code: "Digit2",
//     key: '"',
//     keyCode: 50,
//   },
//   {
//     charCode: 0,
//     code: "Digit3",
//     key: "№",
//     keyCode: 51,
//   },
//   {
//     charCode: 0,
//     code: "Digit4",
//     key: ";",
//     keyCode: 52,
//   },
//   {
//     charCode: 0,
//     code: "Digit5",
//     key: "%",
//     keyCode: 53,
//   },
//   {
//     charCode: 0,
//     code: "Digit6",
//     key: ":",
//     keyCode: 54,
//   },
//   {
//     charCode: 0,
//     code: "Digit7",
//     key: "?",
//     keyCode: 55,
//   },
//   {
//     charCode: 0,
//     code: "Digit8",
//     key: "*",
//     keyCode: 56,
//   },
//   {
//     charCode: 0,
//     code: "Digit9",
//     key: "(",
//     keyCode: 57,
//   },
//   {
//     charCode: 0,
//     code: "Digit0",
//     key: ")",
//     keyCode: 48,
//   },
//   {
//     charCode: 0,
//     code: "Minus",
//     key: "_",
//     keyCode: 189,
//   },
//   {
//     charCode: 0,
//     code: "Equal",
//     key: "+",
//     keyCode: 187,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 0,
//     code: "KeyQ",
//     key: "Й",
//     keyCode: 81,
//   },
//   {
//     charCode: 0,
//     code: "KeyW",
//     key: "Ц",
//     keyCode: 87,
//   },
//   {
//     charCode: 0,
//     code: "KeyE",
//     key: "У",
//     keyCode: 69,
//   },
//   {
//     charCode: 0,
//     code: "KeyR",
//     key: "К",
//     keyCode: 82,
//   },
//   {
//     charCode: 0,
//     code: "KeyT",
//     key: "Е",
//     keyCode: 84,
//   },
//   {
//     charCode: 0,
//     code: "KeyY",
//     key: "Н",
//     keyCode: 89,
//   },
//   {
//     charCode: 0,
//     code: "KeyU",
//     key: "Г",
//     keyCode: 85,
//   },
//   {
//     charCode: 0,
//     code: "KeyI",
//     key: "Ш",
//     keyCode: 73,
//   },
//   {
//     charCode: 0,
//     code: "KeyO",
//     key: "Щ",
//     keyCode: 79,
//   },
//   {
//     charCode: 0,
//     code: "KeyP",
//     key: "З",
//     keyCode: 80,
//   },
//   {
//     charCode: 0,
//     code: "BracketLeft",
//     key: "Х",
//     keyCode: 219,
//   },
//   {
//     charCode: 0,
//     code: "BracketRight",
//     key: "Ъ",
//     keyCode: 221,
//   },
//   {
//     charCode: 0,
//     code: "Backslash",
//     key: "|",
//     keyCode: 220,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 0,
//     code: "KeyA",
//     key: "Ф",
//     keyCode: 65,
//   },
//   {
//     charCode: 0,
//     code: "KeyS",
//     key: "Ы",
//     keyCode: 83,
//   },
//   {
//     charCode: 0,
//     code: "KeyD",
//     key: "В",
//     keyCode: 68,
//   },
//   {
//     charCode: 0,
//     code: "KeyF",
//     key: "А",
//     keyCode: 70,
//   },
//   {
//     charCode: 0,
//     code: "KeyG",
//     key: "П",
//     keyCode: 71,
//   },
//   {
//     charCode: 0,
//     code: "KeyH",
//     key: "Р",
//     keyCode: 72,
//   },
//   {
//     charCode: 0,
//     code: "KeyJ",
//     key: "О",
//     keyCode: 74,
//   },
//   {
//     charCode: 0,
//     code: "KeyK",
//     key: "Л",
//     keyCode: 75,
//   },
//   {
//     charCode: 0,
//     code: "KeyL",
//     key: "Д",
//     keyCode: 76,
//   },
//   {
//     charCode: 0,
//     code: "Semicolon",
//     key: "Ж",
//     keyCode: 186,
//   },
//   {
//     charCode: 0,
//     code: "Quote",
//     key: "Э",
//     keyCode: 222,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "KeyZ",
//     key: "Я",
//     keyCode: 90,
//   },
//   {
//     charCode: 0,
//     code: "KeyX",
//     key: "Ч",
//     keyCode: 88,
//   },
//   {
//     charCode: 0,
//     code: "KeyC",
//     key: "С",
//     keyCode: 67,
//   },
//   {
//     charCode: 0,
//     code: "KeyV",
//     key: "М",
//     keyCode: 86,
//   },
//   {
//     charCode: 0,
//     code: "KeyB",
//     key: "И",
//     keyCode: 66,
//   },
//   {
//     charCode: 0,
//     code: "KeyN",
//     key: "Т",
//     keyCode: 78,
//   },
//   {
//     charCode: 0,
//     code: "KeyM",
//     key: "Ь",
//     keyCode: 77,
//   },
//   {
//     charCode: 0,
//     code: "Comma",
//     key: "Б",
//     keyCode: 188,
//   },
//   {
//     charCode: 0,
//     code: "Period",
//     key: "Ю",
//     keyCode: 190,
//   },
//   {
//     charCode: 0,
//     code: "Slash",
//     key: ",",
//     keyCode: 191,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
// export const keyValueCapsShiftRus = [
//   {
//     charCode: 0,
//     code: "Backquote",
//     key: "ё",
//     keyCode: 192,
//   },
//   {
//     charCode: 0,
//     code: "Digit1",
//     key: "!",
//     keyCode: 49,
//   },
//   {
//     charCode: 0,
//     code: "Digit2",
//     key: '"',
//     keyCode: 50,
//   },
//   {
//     charCode: 0,
//     code: "Digit3",
//     key: "№",
//     keyCode: 51,
//   },
//   {
//     charCode: 0,
//     code: "Digit4",
//     key: ";",
//     keyCode: 52,
//   },
//   {
//     charCode: 0,
//     code: "Digit5",
//     key: "%",
//     keyCode: 53,
//   },
//   {
//     charCode: 0,
//     code: "Digit6",
//     key: ":",
//     keyCode: 54,
//   },
//   {
//     charCode: 0,
//     code: "Digit7",
//     key: "?",
//     keyCode: 55,
//   },
//   {
//     charCode: 0,
//     code: "Digit8",
//     key: "*",
//     keyCode: 56,
//   },
//   {
//     charCode: 0,
//     code: "Digit9",
//     key: "(",
//     keyCode: 57,
//   },
//   {
//     charCode: 0,
//     code: "Digit0",
//     key: ")",
//     keyCode: 48,
//   },
//   {
//     charCode: 0,
//     code: "Minus",
//     key: "_",
//     keyCode: 189,
//   },
//   {
//     charCode: 0,
//     code: "Equal",
//     key: "+",
//     keyCode: 187,
//   },
//   {
//     charCode: 0,
//     code: "Backspace",
//     key: "Backspace",
//     keyCode: 8,
//   },
//   {
//     charCode: 0,
//     code: "Tab",
//     key: "Tab",
//     keyCode: 9,
//   },
//   {
//     charCode: 1081,
//     code: "KeyQ",
//     key: "й",
//     keyCode: 1081,
//   },
//   {
//     charCode: 1094,
//     code: "KeyW",
//     key: "ц",
//     keyCode: 1094,
//   },
//   {
//     charCode: 1091,
//     code: "KeyE",
//     key: "у",
//     keyCode: 1091,
//   },
//   {
//     charCode: 1082,
//     code: "KeyR",
//     key: "к",
//     keyCode: 1082,
//   },
//   {
//     charCode: 1077,
//     code: "KeyT",
//     key: "е",
//     keyCode: 1077,
//   },
//   {
//     charCode: 1085,
//     code: "KeyY",
//     key: "н",
//     keyCode: 1085,
//   },
//   {
//     charCode: 1075,
//     code: "KeyU",
//     key: "г",
//     keyCode: 1075,
//   },
//   {
//     charCode: 1096,
//     code: "KeyI",
//     key: "ш",
//     keyCode: 1096,
//   },
//   {
//     charCode: 1097,
//     code: "KeyO",
//     key: "щ",
//     keyCode: 1097,
//   },
//   {
//     charCode: 1079,
//     code: "KeyP",
//     key: "з",
//     keyCode: 1079,
//   },
//   {
//     charCode: 1093,
//     code: "BracketLeft",
//     key: "х",
//     keyCode: 1093,
//   },
//   {
//     charCode: 1098,
//     code: "BracketRight",
//     key: "ъ",
//     keyCode: 1098,
//   },
//   {
//     charCode: 0,
//     code: "Backslash",
//     key: "|",
//     keyCode: 220,
//   },
//   {
//     charCode: 0,
//     code: "Delete",
//     key: "Delete",
//     keyCode: 46,
//   },
//   {
//     charCode: 0,
//     code: "CapsLock",
//     key: "CapsLock",
//     keyCode: 20,
//   },
//   {
//     charCode: 1092,
//     code: "KeyA",
//     key: "ф",
//     keyCode: 1092,
//   },
//   {
//     charCode: 1099,
//     code: "KeyS",
//     key: "ы",
//     keyCode: 1099,
//   },
//   {
//     charCode: 1074,
//     code: "KeyD",
//     key: "в",
//     keyCode: 1074,
//   },
//   {
//     charCode: 1072,
//     code: "KeyF",
//     key: "а",
//     keyCode: 1072,
//   },
//   {
//     charCode: 1087,
//     code: "KeyG",
//     key: "п",
//     keyCode: 1087,
//   },
//   {
//     charCode: 1088,
//     code: "KeyH",
//     key: "р",
//     keyCode: 1088,
//   },
//   {
//     charCode: 1086,
//     code: "KeyJ",
//     key: "о",
//     keyCode: 1086,
//   },
//   {
//     charCode: 1083,
//     code: "KeyK",
//     key: "л",
//     keyCode: 1083,
//   },
//   {
//     charCode: 1076,
//     code: "KeyL",
//     key: "д",
//     keyCode: 1076,
//   },
//   {
//     charCode: 1078,
//     code: "Semicolon",
//     key: "ж",
//     keyCode: 1078,
//   },
//   {
//     charCode: 1101,
//     code: "Quote",
//     key: "э",
//     keyCode: 1101,
//   },
//   {
//     charCode: 0,
//     code: "Enter",
//     key: "Enter",
//     keyCode: 13,
//   },
//   {
//     charCode: 0,
//     code: "ShiftLeft",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 1103,
//     code: "KeyZ",
//     key: "я",
//     keyCode: 1103,
//   },
//   {
//     charCode: 1095,
//     code: "KeyX",
//     key: "ч",
//     keyCode: 1095,
//   },
//   {
//     charCode: 1089,
//     code: "KeyC",
//     key: "с",
//     keyCode: 1089,
//   },
//   {
//     charCode: 1084,
//     code: "KeyV",
//     key: "м",
//     keyCode: 1084,
//   },
//   {
//     charCode: 1080,
//     code: "KeyB",
//     key: "и",
//     keyCode: 1080,
//   },
//   {
//     charCode: 1090,
//     code: "KeyN",
//     key: "т",
//     keyCode: 1090,
//   },
//   {
//     charCode: 1100,
//     code: "KeyM",
//     key: "ь",
//     keyCode: 1100,
//   },
//   {
//     charCode: 1073,
//     code: "Comma",
//     key: "б",
//     keyCode: 1073,
//   },
//   {
//     charCode: 1102,
//     code: "Period",
//     key: "ю",
//     keyCode: 1102,
//   },
//   {
//     charCode: 0,
//     code: "Slash",
//     key: ",",
//     keyCode: 191,
//   },
//   {
//     charCode: 0,
//     code: "ShiftRight",
//     key: "Shift",
//     keyCode: 16,
//   },
//   {
//     charCode: 0,
//     code: "ArrowUp",
//     key: "&uarr;",
//     keyCode: 38,
//   },
//   {
//     charCode: 0,
//     code: "ControlLeft",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "MetaLeft",
//     key: "Meta",
//     keyCode: 91,
//   },
//   {
//     charCode: 0,
//     code: "AltLeft",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "Space",
//     key: " ",
//     keyCode: 32,
//   },
//   {
//     charCode: 0,
//     code: "AltRight",
//     key: "Alt",
//     keyCode: 18,
//   },
//   {
//     charCode: 0,
//     code: "ControlRight",
//     key: "Control",
//     keyCode: 17,
//   },
//   {
//     charCode: 0,
//     code: "ArrowLeft",
//     key: "&larr;",
//     keyCode: 37,
//   },
//   {
//     charCode: 0,
//     code: "ArrowDown",
//     key: "&darr;",
//     keyCode: 40,
//   },
//   {
//     charCode: 0,
//     code: "ArrowRight",
//     key: "&rarr;",
//     keyCode: 39,
//   },
// ];
const saveText = JSON.parse(localStorage.getItem("CONTENT")) || "";
const LANG = JSON.parse(localStorage.getItem("lang")) || 'eng'
const body = document.querySelector("body");

const container = document.createElement("div");
container.classList.add("container");
body.append(container);

const header = document.createElement("h1");
header.classList.add("title");
header.innerText = "Virtual Keyboard V1.0";
container.appendChild(header);

const comment1 = "Клавиатура создана на операционной системе Windows";
const comment2 = "<div>Для переключения языка левый Crtl + левый Alt </div>";
container.insertAdjacentHTML(
  "afterbegin",
  `<div class="hint">${comment1}<br> ${comment2}</div>`
);

const textField = document.createElement("textarea");
textField.classList.add("text-field");
textField.id = "field";
textField.value = saveText;
container.appendChild(textField);

const keyBoard = document.createElement("div");
keyBoard.classList.add("keyboard");
container.append(keyBoard);

function createButton(library) {
  const [keyValue, keyValueCaps, keyValueShift, keyValueCapsShift, keyValueRus, keyValueCapsRus, keyValueShiftRus, keyValueCapsShiftRus] = library;
  for (let i = 0; i < keyValue.length; i++) {
    const key = document.createElement("button");
    key.classList.add("key-button");
    key.classList.add(`${keyValue[i].code.toLowerCase()}`);
    key.id = `${keyValue[i].code}`;
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'eng_key key main ${keyValue[i].code} ${LANG !== 'eng' ? 'hidden' : ''}'>${keyValue[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'eng_key key caps ${keyValueCaps[i].code} hidden'>${keyValueCaps[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'eng_key key shift ${keyValueShift[i].code} hidden'>${keyValueShift[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'eng_key key capsShift ${keyValueCapsShift[i].code} hidden'>${keyValueCapsShift[i].key}</span>`
    );

    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'rus_key key ru_main ${keyValueRus[i].code} ${LANG === 'eng' ? 'hidden' : ''}'>${keyValueRus[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'rus_key key ru_caps ${keyValueCapsRus[i].code} hidden'>${keyValueCapsRus[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'rus_key key ru_shift ${keyValueShiftRus[i].code} hidden' >${keyValueShiftRus[i].key}</span>`
    );
    key.insertAdjacentHTML(
      "afterbegin",
      `<span id=${keyValue[i].code} class = 'rus_key key ru_capsShift ${keyValueCapsShiftRus[i].code} hidden'>${keyValueCapsShiftRus[i].key}</span>`
    );

    keyBoard.append(key);
  }
}
createButton(library);

// --------------------------work from keyboard

document.addEventListener("keydown", (e) => {
  if (e.code !== "CapsLock") {
    document.querySelector(`#${e.code}`).classList.add("press");
  } else {
    document.querySelector("#CapsLock").classList.toggle("press");
    document
      .querySelectorAll(".main")
      .forEach((el) => el.classList.toggle("hidden")); // выкл кнопки
    document
      .querySelectorAll(".caps")
      .forEach((el) => el.classList.toggle("hidden")); // вкл кнопку
  }

  if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
    document.querySelectorAll(".key").forEach((el) => {
      if (el.classList.contains("main")) {
        el.classList.add("hidden");
      } else {
        document
          .querySelectorAll(".shift")
          .forEach((item) => item.classList.remove("hidden"));
      }
    });
  }

  const capsLock = document.querySelector(".capslock");
  if (
    (e.code === "ShiftLeft" || e.code === "ShiftLeft") &&
    capsLock.classList.contains("press")
  ) {
    document.querySelectorAll(".shift").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".caps").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".capsShift").forEach((el) => {
      el.classList.remove("hidden");
    });
  }

  if ((e.ctrlKey && e.altKey)) {
    const LANG = JSON.parse(localStorage.getItem("lang")) === 'eng' ? 'rus' : 'eng'
    document
      .querySelectorAll(".ru_main")
      .forEach((el) => el.classList.toggle("main"));
    document
      .querySelectorAll(".ru_caps")
      .forEach((el) => el.classList.toggle("caps"));
    document
      .querySelectorAll(".ru_shift")
      .forEach((el) => el.classList.toggle("shift"));
    document
      .querySelectorAll(".ru_capsShift")
      .forEach((el) => el.classList.toggle("capsShift"));

    document.querySelectorAll(".eng_key").forEach((el) => {
      if (document.querySelector("#CapsLock").classList.contains("press")) {
        // eslint-disable-next-line no-unused-expressions
        el.classList.contains("caps")
          ? el.classList.remove("hidden")
          : el.classList.add("hidden");
      } else {
        // eslint-disable-next-line no-unused-expressions
        el.classList.contains("main")
          ? el.classList.remove("hidden")
          : el.classList.add("hidden");
      }
    });
    document.querySelectorAll(".rus_key").forEach((el) => {
      if (document.querySelector("#CapsLock").classList.contains("press")) {
        // eslint-disable-next-line no-unused-expressions
        el.classList.contains("ru_caps") ? el.classList.toggle("hidden") : null;
      } else {
        // eslint-disable-next-line no-unused-expressions
        el.classList.contains("ru_main") ? el.classList.toggle("hidden") : null;
      }
    });
    localStorage.setItem("lang", JSON.stringify(LANG));
  }
  textField.classList.add("higlight");
  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
});

document.addEventListener("keyup", (e) => {
  if (e.code === "CapsLock") {
    return;
  }
  document.querySelector(`#${e.code}`).classList.remove("press");

  if (e.code === "ShiftLeft" || e.code === "ShiftLeft") {
    document.querySelectorAll(".main").forEach((el) => {
      el.classList.remove("hidden");
    });
    document.querySelectorAll(".shift").forEach((el) => {
      el.classList.add("hidden");
    });
  }

  const capsLock = document.querySelector(".capslock");
  if (
    (e.code === "ShiftLeft" || e.code === "ShiftLeft") &&
    capsLock.classList.contains("press")
  ) {
    document.querySelectorAll(".main").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".caps").forEach((el) => {
      el.classList.toggle("hidden");
    });
    document.querySelectorAll(".capsShift").forEach((el) => {
      el.classList.add("hidden");
    });
  }
  textField.classList.remove("higlight");
  textField.focus();
  localStorage.setItem("CONTENT", JSON.stringify(textField.value));
});
