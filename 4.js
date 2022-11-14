//Задание 1

function ex41(){

	let comment = prompt('Добро пожаловать на форум! Напишите свой коментарий:', '');
	let n = 50;

	if (comment.length < n){
		alert('Ваш комментарий отправлен на модерацию');

		comment = comment.replace(/кот/, '*');
		comment = comment.replace(/пес/, 'многоуважаемый пес');
		let upper = comment.match(/собак/);

		if(upper !== null){
			for (let up of upper)
				comment = comment.replaceAll(up, up[0].toUpperCase() + up.slice(1));
		}
		alert(`${comment}`);
	}
	else 
		alert(`Ваш комментарий имеет длинну больше допустимого, допустимое значение ${n}`);
}

//--------------------------------------------------------------------------------
//Задание 2

function ex42(){
    let name = prompt('Введите ваше имя:');

    name = name.split(' ');

    if (name.length == 1) {
        name = '***' + name[0] + '***';
    } else {
        let maxLength = name.reduce((current, next) => current.length > next.length ? current : next).length;

        name = name.map(str => str.padStart(maxLength));
        name = name.join('\n');
    }

    document.getElementById('names_out').textContent = name;
}
//--------------------------------------------------------------------------------
//Задание 3

function ex43(){

 let days = {
		1: 'Понедельник',
		2: 'Вторник',
		3: 'Среда',
		4: 'Черверг',
		5: 'Пятница',
		6: 'Суббота',
		7: 'Воскресенье'
	};

    let dayNumber = +prompt('Введите номер дня недели:');

    if (dayNumber < 1 || dayNumber > 7){
    	alert('Введено неверное число');
    	return 0;
    }

    alert(`День недели - ${days[dayNumber]}`);

    let count = 0;
    let result = 'Нечетные дни:\n';

    for (let [number, name] of Object.entries(days)) { //возвращает массив собственных перечесляемый свойств указанного объекта 
        if (number % 2 != 0) {
            result += `${number} - ${name}\n`;
            count++;
        }   
    }

    alert(result);
    alert(`Количество нечетных дней - ${count}`);
}
//--------------------------------------------------------------------------------
//Задание 4

function ex44(){

}

//--------------------------------------------------------------------------------
//Задание 5

function ex45(){
let obj1 = { a: '1', b: '2', c: '3' };
let obj2 = { d: '4', e: '5' };
let obj3 = { f: '6', g: '7' };

function extend(){
  let obj = arguments[0]; //подобный массиву объект, который содержит аргументы, переданные в функцию

  for (var i = 1; i < arguments.length; i++)
    Object.assign(obj, arguments[i]); //метод для копирования значений всех перечисл. св-в в целевой объект 
  
  
  return obj;
}

console.log(extend(obj1, obj2)); 
console.log(extend(obj1, obj2, obj3));
}

//--------------------------------------------------------------------------------
//Задание 6

function ex46(){
    
let pyramid = []; 
let star = "*";
let space = "";
let n = prompt("Введите размер пирамиды");

for(let i = 0; i < n; i++) {
  for(let j = 1; j < n - i; j++)
    space += " ";

  pyramid.push([space+star+space]);
  
  star = "*" + star + "*";
  space = "";
}

console.log(pyramid);
}
