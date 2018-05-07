console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!
<<<<<<< HEAD
console.log('Hello world!!!!!!!!!!');
=======

console.info('Hello world!')
>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95


// ## 1 Обьявление примитивных переменные
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение
// * Проверьте валидность кода через парсер
<<<<<<< HEAD
var v1 = 'String';
var v2 = 777;
var v3 = true;
var v4 = null;
var v5 = undefined; // Да, по умолчанию undefinded, но можно было ее и присвоить)

=======

var num = Infinity;
var str = 'Hello world again!';
var nil = null;
var undef = undefined;
var bool = false;
>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95


// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 7, 8, 9
// * Найдите периметр треугольника
// * Найдите полупериметр треугольника
// * Найдите радиус вписанной окружности в треугольник
// * Найдите радиус вписанной окружности в прямоугольный треугольник
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18
<<<<<<< HEAD
var sideA = 7;
var sideB = 8;
var sideC = 9;
var perimetr = sideA + sideB + sideC;
console.info('Perimeter of a triangle = ', perimetr);
var p = perimetr / 2;
console.info('Half-diameter of a triangle = ', p);
var radiusDiscribedTriangle = Math.sqrt(((p - sideA) * (p - sideB) * (p - sideC)) / p);
console.info('Radius inscribed in a triangle = ', radiusDiscribedTriangle); // В языке js принята нотация camelCase а не snake_case. Поэтому лучше переменную назвать radiusVpisTriugolnik. Так же лучше писать англ названия англ значениями

// Прежде чем работать с переменными неплохо их обьявлятью. (perimetr, radius_vpis_triugolnik) В режиме "use strict" это выдаст ошибку

var sideCRightTreungl = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)); // Так же нужно обьявлять переменные через var
var pRightTreungl = (sideA + sideB + sideCRightTreungl) / 2;
var radiusVpisPryamouglTreungl = Math.sqrt(((pRightTreungl - sideA) * (pRightTreungl - sideB) * (pRightTreungl - sideCRightTreungl)) / pRightTreungl);
console.info('The radius of the inscribed circle in a right triangle = ', radiusVpisPryamouglTreungl);
=======

var A = 7;
var B = 8;
var C = 9;
var D = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
var rectHalfPerimetr = (A + B + D) / 2;

var perimetr = A + B + C;
var halfPerimetr = perimetr / 2;
var circleRadius = Math.sqrt(((halfPerimetr - A) * (halfPerimetr - B) * (halfPerimetr - C)) / halfPerimetr);
var rectInCircleRadius = Math.sqrt(((rectHalfPerimetr - A) * (rectHalfPerimetr - B) * (rectHalfPerimetr - D)) / rectHalfPerimetr);

console.info('Perimeter = ' + perimetr);
console.info('Semi-perimeter = ' + halfPerimetr);
console.info('Radius of inscribed circle in a triangle = ' + circleRadius);
console.info('Radius of the inscribed circle in a right triangle = ' + rectInCircleRadius);

>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95

// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива фамилий пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала б значение правой верхней границы html элемента
<<<<<<< HEAD
var userEmail;
var currenDate;
var userLastNames; // Принято если есть окончание s, то это уже будет множество данных
var defaults;
=======

var userEmail;
var currentDate;
var usersLastname;
var defaultValue;
>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95
var borderTopRight;


// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

var user = {
<<<<<<< HEAD
  name: 'Vasia',
}
user.name = 'Petya';

console.log(user.name);

=======
  name: 'Вася'
};

user.name = 'Петя';
>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

<<<<<<< HEAD
console.info('6' - 3); // 3 - здесь строка 6 неявно преобразовалась в число
console.info('20' + 10);  // 2010 - в этом случае знак + делает конкатенацию двух операндов в строку, поскольку один из операндов строка
console.info('10' + - 2); // 10-2 - в этом случае знак +(выполнился первым) делает конкатенацию двух операндов в строку, поскольку один из операндов строка
console.info("4px" - 2); // NaN - покольку от строки мы не можем отнять число (undefined преобразуется в NaN)
console.info(15 / 0); // Infinity - здесь покольку деление на 0 то получается бесконечно большое число, которое выходит за границы диапазона памяти js
console.info(4 + 5 + "px"); // 9px - так как сначала произошла операция сложения 4+5=9, а далее операция конкатенации 9 + 'px'.
console.info(+""); // 0 - тут унарный + приводит пустую строку в 0.
console.info(NaN === NaN); // false - тут особенность NaN - оно не равно никакому значению, в тч NaN
console.info(null == undefined); // true - поскольку null - ссылка на пустой обьект, undefined - обращение к свойству несуществующего обьекта. И они сравниваются не по типам.
=======
console.info('6' - 3); // 3 - бинарный минус припедет к числу и выполнит математическую опрерацию
console.info('20' + 10); // 2010 - бинарный + имеет побочный еффект, если один из операндов - строка, выполняется конкатенация строк
console.info('10' + - 2); // 10-2 - так же выполнится конкатинация, но знак - будет так же считаться частью строки
console.info("4px" - 2); // Nan - Бинарный минус попробует привести операнд к строке, но у него ничего не получмться. Следовательно будет Nan. Дальше Nan - 2 = Nan
console.info(15 / 0); // Nan - Делить на 0 нельзя, ожидаемо Infinity
console.info(4 + 5 + "px"); // 9px - Сначала выполнится операция сложения, дальше приведения к строке, так как один операнд - строка
console.info(+""); // 0 - Пустрая строка (как и null, undefined, 0, false и )
console.info(NaN === NaN); // false - Nan не равно ничему, даже самому себе
console.info(null == undefined); // true - приведение типов выведет false для обоих операндов
>>>>>>> aa5483af50f49cfeced1de3d6c5e559ecb9f6f95
