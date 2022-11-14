//Задание 1
//--------------------------------------------------------------
function registration(){
let arr = [
  'Алексей','Николай',
  'Максим','Иван',
  'Матвей','Таня',
  'Том','Елена'
];

let name = prompt('Введите ваше имя для регистрации:');

if(arr.indexOf(name) != -1)
  alert('Имя не уникально!');
else
  alert('Имя уникально!');
}

//--------------------------------------------------------------
//Задание 2
function sort() {
let len;
let letter;
let arr = [
  'Алексей','Николай',
  'Максим','Иван',
  'Матвей','Таня',
  'Том','Елена'
];

//Вывод текущего массива
console.log(arr);

//Сортировка массива по алфавиту, по возрастанию
console.log(arr.sort());

//Сортировка массива по алфавиту, по убиванию
//Сортировка по убыванию методом reverse() выполнится
//только в том случае если перед этим методом был
//использован метот sort()
console.log(arr.reverse());

//Это лишнее но вот сделано
/////
// По длинне строки
arr.sort(function(a, b){
  // По возрастанию  -> a.length - b.length
  // По убыванию -> b.length - a.length
  return b.length - a.length;
});

console.log(arr);

//Поиск по длинне
len = prompt('Введите длинну строки имени:');
console.log(arr.find(el => el.length == len));

//Поиск по первой букве имени
letter = prompt('Поиск по первой букве имени:');
console.log(arr.find(el => el[0] == letter));
}

//--------------------------------------------------------------
//Задание 3
function setregistration(){
let mySet = new Set([
  'Алексей','Николай',
  'Максим','Иван',
  'Матвей','Таня',
  'Том','Елена'
]);

name = prompt('Введите ваше имя для регистрации:');

if(mySet.has(name))
  alert('Имя не уникально!');
else
  alert('Имя уникально!');
  mySet.add(name);

//Вывод текущего Set
  console.log(mySet);
}


function sort_set() {
  let mySet = new Set([
  'Алексей','Николай',
  'Максим','Иван',
  'Матвей','Таня',
  'Том','Елена'
]);
  var array_set = Array.from(mySet);

//Сортировка массива по алфавиту, по возрастанию
console.log(array_set.sort());

//Сортировка массива по алфавиту, по убыванию
console.log(array_set.reverse());

//Поиск по длинне
len = prompt('Введите длинну строки:');

for (let item of mySet){
  if(item.length == len){
  	console.log(item);
    mySet.delete(item);
    console.log(mySet);
    break;
  }
}

//Поиск по первой букве имени
letter = prompt('Введите первую букву имени:');

for (let item of mySet){
  if(item[0] == letter){
    console.log(item);
    break;
  }
}
}

//--------------------------------------------------------------
//Задание 4
let mass;
let result;
let saveResult = new Set();

function ex4(){
	mass = [];
	result = '';
	const min = 1;
	const max = 10000;

	//--------------------------------------------------------------
	//Задание 7
	let n = prompt('Введите количество игроков:');

	for(let i = 1; i <= n; ++i)
		mass.push({id: i, name: `Игрок ${i}`, points: Math.floor(Math.random() * (max - min) + min)});

	//--------------------------------------------------------------

	// mass = [
	// 	{id: 1111, name: "Вася", points: Math.floor(Math.random() * (max - min) + min)},
	// 	{id: 5678, name: "Петя", points: Math.floor(Math.random() * (max - min) + min)},
	// 	{id: 8888, name: "Маша", points: Math.floor(Math.random() * (max - min) + min)},
	// 	{id: 9999, name: "Миша", points: Math.floor(Math.random() * (max - min) + min)},
	// 	{id: 1234, name: "Валик", points: Math.floor(Math.random() * (max - min) + min)},
	// 	{id: 1324, name: "Лина", points: Math.floor(Math.random() * (max - min) + min)}
	// ];

	for(let value of mass){
		result += value.id + '. ' + value.name + ' набрал ' + value.points + ' очков \n';
	}

	alert(result);
	/*console.log(result);*/
}

//--------------------------------------------------------------
//Задание 5

function ex5(){
	result = '';

	if (mass.length == 0)
		alert('Сыграйте в игру');
	else 
		mass.sort((a, b) => a.points < b.points ? 1 : -1);

	let i = 1;
	for(let value of mass){
		if(i == 4){
			alert(result);
			break;
		}
		result += i++ + ' место занял(а) ' + value.name + ' набрав ' + value.points + ' очков \n';
	}

	saveResult.add(result);
}	

//--------------------------------------------------------------
//Задание 6

function ex6(){
	result = '';
	let i = 1;

	for(let value of saveResult){
		result += 'Результаты игры ' + i++ + ': \n' + value + '\n';
	}

	alert(result);
	/*console.log(result);*/
}