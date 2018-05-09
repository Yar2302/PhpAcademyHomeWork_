console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *
/* var telNumb = prompt('Веедите номер телефона:', 123456789);
var telNumblength = telNumb.length;
if (telNumblength <= 11 && telNumblength >= 9) {
  alert('Номер соответствует условию.');
}
else {
  alert('Номер не соответствует условию.');
}
// * Your code End *
*/
/*
// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла

  var objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
};

var objectB = {};

// * Your code Start *
for (var key in objectA) {
  objectB[key] = objectA[key];
}
objectA.name = 'Ivan';
alert(objectB.name) // objectB.name будет 'John', поскольку objectB - независимая копия.


// * Your code End *

// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50
*/

// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

/* var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения

// * Your code Start *
//locale = "ru";
//monthName = date.toLocaleString(locale, {month: "long" });

switch(month) {
  case 0: monthName = 'Января';
  break;
  case 1: monthName = 'Февраля';
  break;
  case 2: monthName = 'Марта';
  break;
  case 3: monthName = 'Апреля';
  break;
  case 4: monthName = 'Мая';
  break;
  case 5: monthName = 'Июня';
  break;
  case 6: monthName = 'Июля';
  break;
  case 7: monthName = 'Августа';
  break;
  case 8: monthName = 'Сентября';
  break;
  case 9: monthName = 'Октября';
  break;
  case 10: monthName = 'Ноября';
  break;
  case 11: monthName = 'Декабря';
  break;
}

// * Your code End *

console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 14 Июня 2017
*/


// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

/* var users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];
// * Your code Start *
 var iterWhile = true;
 while(iterWhile) {
  var userName = prompt('Введите имя пользователя:', '');
  for (var i = 0; i < users.length; i++) {
   if (users[i].name == userName) {
    var userPassword = prompt('Введите пароль:');
    if (users[i].password == userPassword) {
      alert('Пароль правельный');
      iterWhile = false;
      break;
      }
     else {
      alert('Пароль неправельный');
      break;
      }
    }
  }
 }
 */
// * Your code End *


// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел



// * Your code Start *
/*
var sum = 0;
while (true) {
  var sumArray = prompt('Please enter number', '');
  if (sumArray.replace (/\d/g, '').length) {
  alert('Sum is: ' + sum);
  break;
  }
  else {
  sum += +sumArray;
  }
}
*/
// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt
/*
var summetNumber = prompt('Please enter number', 0);
var sum = 0;
// * Your code Start *
if (summetNumber.replace (/\d/g, '').length) {
  alert('Введено не число.') }
else {
  for (var i = 1; i <= +summetNumber; i++) {
  sum += i;
  }
  alert('Sum =' + sum);
}
*/

// * Your code End *


// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js
/*
var drawFraction = function(){
  const board = document.querySelector('.board');
  const fraction = document.createElement('div');
  board.appendChild(fraction);
}

var drawFraction1 = function(){
  const board = document.querySelector('.board');
  const fraction = document.createElement('div1');
  board.appendChild(fraction);
}
  const size = 8;
// * Your code Start *
for (var i = 1; i <= size; i++) {
  if (i % 2 == 0) {
    for (var j = 1; j <= size; j++) {
      if (j % 2 == 0) {
        drawFraction1();
      }
      else {
        drawFraction();
      }
    }
  }
  else {
    for (var j = 1; j <= size; j++) {
      if (j % 2 == 0) {
        drawFraction();
      }
      else {
        drawFraction1();
      }
    }
  }
}
*/

// * Your code End *
