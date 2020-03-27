const body = document.querySelector('body');
// обертка калькулятора
const grid = document.createElement('div');
grid.classList.add('grid');
body.append(grid);
//  обертка клавиш
const gridKey = document.createElement('div');
gridKey.classList.add('gridKey');
//  поле ввода
const textAr = document.createElement('textarea');
textAr.value = '';
grid.append(textAr);
grid.append(gridKey);
// конструктор создания  клаивиш(кроме tab,shift,caps,cntrl,entr,backspase)
class Key {
  constructor(text) {
    this.but = document.createElement('button');
    this.but.classList.add('key');
    this.but.classList.add('allkey');
    this.pressed = false;
    this.but.textContent = text;
    gridKey.append(this.but);
  }
}

const KeyObj1 = {
  KeyKov: new Key('`'),
  Key1: new Key('1'),
  Key2: new Key('2'),
  key3: new Key('3'),
  Key4: new Key('4'),
  Key5: new Key('5'),
  key6: new Key('6'),
  Key7: new Key('7'),
  Key8: new Key('8'),
  key9: new Key('9'),
  KeyNull: new Key('0'),
  KeyMinus: new Key('-'),
  keyRes: new Key('='),
};


//  клавиша BackSpace
const KeyBackspace = document.createElement('button');
KeyBackspace.classList.add('backSpace');
KeyBackspace.classList.add('act');
KeyBackspace.textContent = 'Backspace';
gridKey.append(KeyBackspace);
// клавиша Tab
const KeyTab = document.createElement('button');
KeyTab.classList.add('tab');
KeyTab.classList.add('act');
KeyTab.textContent = 'Tab';
gridKey.append(KeyTab);

const KeyObj2 = {
  KeyQ: new Key('q'),
  KeyW: new Key('w'),
  KeyE: new Key('e'),
  KeyR: new Key('r'),
  KeyT: new Key('t'),
  KeyY: new Key('y'),
  KeyU: new Key('u'),
  KeyI: new Key('i'),
  KeyO: new Key('o'),
  KeyP: new Key('p'),
  KeyLeftBracets: new Key('['),
  KeyRigthBracets: new Key(']'),
  KeyLefthSlash: new Key('\\'),
}


// клавиша Del
const KeyDel = document.createElement('button');
KeyDel.classList.add('del');
KeyDel.classList.add('act');
KeyDel.textContent = 'Del';
gridKey.append(KeyDel);

// клавиша CapsLk
const KeyCapsLk = document.createElement('button');
KeyCapsLk.classList.add('caps');
KeyCapsLk.classList.add('act');
KeyCapsLk.textContent = 'CapsLock';
gridKey.append(KeyCapsLk);

const KeyObj3 = {
  KeyA: new Key('a'),
  KeyS: new Key('s'),
  KeyD: new Key('d'),
  KeyF: new Key('f'),
  KeyG: new Key('g'),
  KeyH: new Key('h'),
  KeyJ: new Key('j'),
  KeyK: new Key('k'),
  KeyL: new Key('l'),
  KeySemiColon: new Key(';'),
  KeyQuotes: new Key("'"),
};

// клавиша Enter
const KeyEnter = document.createElement('button');
KeyEnter.classList.add('enter');
KeyEnter.classList.add('act');
KeyEnter.textContent = 'Enter';
gridKey.append(KeyEnter);

// клавиша LeftShift
const KeyLeftShift = document.createElement('button');
KeyLeftShift.classList.add('shift');
KeyLeftShift.classList.add('act');
KeyLeftShift.textContent = 'Shift';
gridKey.append(KeyLeftShift);

const KeyObj4 = {
  KeyZ: new Key('z'),
  KeyX: new Key('x'),
  KeyCapsLk: new Key('c'),
  KeyV: new Key('v'),
  KeyB: new Key('b'),
  KeyN: new Key('n'),
  KeyM: new Key('m'),
  KeyComma: new Key(','),
  KeyPoint: new Key('.'),
  KeyRigthSlash: new Key('/'),
  KeyArrowUp: new Key('▲'),
};

// клавиша RightShift
const KeyRightShift = document.createElement('button');
KeyRightShift.classList.add('shift');
KeyRightShift.classList.add('act');
KeyRightShift.style.marginLeft = '6px';
KeyRightShift.textContent = 'Shift';
gridKey.append(KeyRightShift);

/* клавиша LeftCtrl */
const KeyLeftCtrl = document.createElement('button');
KeyLeftCtrl.classList.add('ctrl');
KeyLeftCtrl.classList.add('act');
KeyLeftCtrl.textContent = 'Ctrl';
gridKey.append(KeyLeftCtrl);

/* клавиша Win */
const KeyWin = document.createElement('button');
KeyWin.classList.add('win');
KeyWin.classList.add('act');
KeyWin.textContent = 'Win';
gridKey.append(KeyWin);

/* клавиша LeftAlt */
const KeyLeftAlt = document.createElement('button');
KeyLeftAlt.classList.add('alt');
KeyLeftAlt.classList.add('act');
KeyLeftAlt.textContent = 'Alt';
gridKey.append(KeyLeftAlt);

/* клавиша Space */
const KeySpace = document.createElement('button');
KeySpace.classList.add('space');
KeySpace.classList.add('act');
KeySpace.textContent = "''";
gridKey.append(KeySpace);

/* клавиша RightAlt */
const KeyRightAlt = document.createElement('button');
KeyRightAlt.classList.add('alt');
KeyRightAlt.classList.add('act');
KeyRightAlt.textContent = 'Alt';
gridKey.append(KeyRightAlt);

const KeyObj5 = {
  KeyArrowLeft: new Key('◄'),
  KeyArrowDown: new Key('▼'),
  KeyArrowRight: new Key('►'),

};

/* клавиша RightCtrl */
const KeyRightCtrl = document.createElement('button');
KeyRightCtrl.classList.add('ctrl');
KeyRightCtrl.classList.add('act');
KeyRightCtrl.style.cssText = `margin-left:6px;
width:60px
`;
KeyRightCtrl.textContent = 'Ctrl';
gridKey.append(KeyRightCtrl);

/* ___________________________________________________ */

/* Mouse action_______________________________________ */

const arrActionKey = gridKey.querySelectorAll('.act');
arrActionKey.forEach((item) => item.classList.add('allkey'));

/* функия вывода информации с клавиш */
function handler(event) {
  const { target } = event;
  // const button = target.closest('button')
  if (target.classList.contains('key')) {
    textAr.value += target.textContent;
  }
}
gridKey.addEventListener('click', handler);

/* анимация нажатия на клавишу */
function hahdlerKeyDown(event) {
  const cursDown = event.target;
  const array = gridKey.querySelectorAll('.allkey');
  return array.forEach((item) => (item.textContent === cursDown.textContent
    ? item.classList.add('active')
    : false));
}
gridKey.addEventListener('mousedown', hahdlerKeyDown);

function hahdlerKeyUp(event) {
  const cursUp = event.target;
  cursUp.classList.remove('active');
}
gridKey.addEventListener('mouseup', hahdlerKeyUp);

/* функиция BackSpace */
function handBackspace(event) {
  const str = event.target;
  if (str.textContent === 'Backspace')(textAr.value = textAr.value.slice(0, -1));
}
gridKey.addEventListener('click', handBackspace);

/* функция пробела */
function handSpace(event) {
  const str = event.target;
  if (str.textContent === "''") {
    textAr.value += ' ';
  }
}
gridKey.addEventListener('click', handSpace);

//  Keyboard_________________________________________________________

//  Вывод клафиш с физ. клавиатуры;
function keyboardKeyDown(event) {
  const keyboarKey = event.key;
  if (
    keyboarKey !== 'Shift'
    && keyboarKey !== 'Backspace'
    && keyboarKey !== 'Tab'
    && keyboarKey !== 'CapsLock'
    && keyboarKey !== 'Control'
    && keyboarKey !== 'Ctrl'
    && keyboarKey !== 'Meta'
    && keyboarKey !== 'Alt'
    && keyboarKey !== 'Enter'
    && keyboarKey !== 'Delete'
  ) {
    textAr.value += keyboarKey;
  }
  const array = document.querySelectorAll('.allkey');
  array.forEach((item) => (item.textContent === keyboarKey ? item.classList.add('active') : false));
}
document.addEventListener('keydown', keyboardKeyDown);


function KeyboardKeyUp(event) {
  const keyboarKey = event.key;
  const array = document.querySelectorAll('.allkey');
  array.forEach((item) => (item.textContent === keyboarKey ? item.classList.remove('active') : false));
}
document.addEventListener('keyup', KeyboardKeyUp);

/* Backspace___________________________________________ */
function keyboardBackSpace(event) {
  const backSpace = event.key;
  if (backSpace === 'Backspace') {
    textAr.value = textAr.value.slice(0, -1);
  }
}
document.addEventListener('keydown', keyboardBackSpace);

// Space_______________________________________________________

function KeyboardSpace(event) {
  const space = event.key;
  if (space.Keycode === 32) {
    space.classList.add('active');
    console.log('+');
  }
}
document.addEventListener('keydown', KeyboardSpace);


// /* Enter____________________________________________________  */
// function KeyboardEnter(event) {
//   const enter = event.key;
//   if (enter === 'Enter')(textAr.value += '/nd');
// }
// gridKey.addEventListener('keydown', KeyboardEnter);