//Задание 1

function ex21(){

	let r = prompt('Введите радиус круга r', '');
	let S = Math.round(Math.PI) * r;
	let D = 2 * r;
	let L = 2 * Math.round(Math.PI) * r;

	if (r>0)
		alert('Площадь S=' + S + '\n' + 'Диаметр D=' + D + '\n' + 'Длинна L=' + L + '\n');
	else 
		alert('Введено неверное числовое значение!');
}

//--------------------------------------------------------------------------------
//Задание 2

function ex22() {

	alert('Добро пожаловать в магазин!');
	let bank = +prompt('Введите сумму на вашей банковской карте ');
	let numbers = 0;
	let i = 1;

	while (true) 
	{
		let value = +prompt(`Введите цену товара №${i++}
			Что бы закончить покупку введите значение 0`);
		
		// Прекращаем ввод
		if (value == 0 || value == '' || value == null || !isFinite(value)) break;

		if(numbers + value > bank)
			alert(`Последний заказ не может быть добавлен в корзину!\n
				Стоимость всех товаров привышает количество средств на вашей карте!\n
				Ваши средства: ${bank}
				Стоимость всех заказов с учетом последнего заказа: ${numbers + value}
				Чтобы закончить покупку введите значение 0`);
		else
			numbers += value;
	}

	alert('Сумма ваших покупок составляет: '+ numbers + 'р.' );
}


//--------------------------------------------------------------------------------
// Задание 3

function ex23(a = 'Hello ', b) {
		b = prompt('Введите параметр: ');
		let result = a + b;
		alert(result);
}

/*function ex23(a = 'Hello ', b, c) {
		c = prompt('Введите параметр: ');
		let result = a + b + c;
		alert(result);
}
ex23(undefined,'Polina');*/


/*function ex23(a, b, c) {
		let result = a + b + c;
		return result;
}
alert (ex23(10, 20, 30));
*/

/*function ex23(a, b, c) {
		let result = a + b + c;
		alert(result);
}
ex23(10, 20, 30);*/


//--------------------------------------------------------------------------------
//Задание 4


function ex24(){

	let stud = [];

	while (true) {

		let value = prompt('Введите имена студентов\n Чтобы завершить введите "ок"');
		console.log(value);
		// Прекращаем ввод
		if (value == 'ok' || value == 'ок' || value == '' || value == null) break;

		stud.push(value);
	}

	alert(`Количество студентов на паре: ${stud.length}`);
}

//--------------------------------------------------------------------------------
//Задание 5

function ex25(){
	
	let a = +prompt('Введите значение стороны a');
	let b = +prompt('Введите значение стороны b');

	if(a == b)
		alert(`Периметр равен: ${params(a)}`);
	else{

		//Function Expression (Функциональное Выражение)
		let params = function(a,b){return a*b;};
		
		alert(`Площадь равна: ${params(a,b)}`);
	
	}
		
}

//Function Declaration (Объявление Функции)
function params(a){
	return 4 * a;
}

//--------------------------------------------------------------------------------
//Задание 6

function ex26(){
    const secInYear = 31104000; 
    const secInMonth = 2592000; 
    const secInDay = 86400; 
    const secInHour = 3600; 
    const secInMin = 60; 

    let secondsOverall = Math.pow(26,5) * Math.pow(10,3) * 3;
    let years = Math.floor(secondsOverall/secInYear);
    let months = Math.floor((secondsOverall-(years*secInYear))/secInMonth);
    let days = Math.floor((secondsOverall-((years*secInYear) + (months * secInMonth)))/secInDay);
    let hours = Math.floor((secondsOverall-((years*secInYear) + (months * secInMonth)+(days * secInDay)))/secInHour);
    let minutes = Math.floor((secondsOverall - ((years*secInYear) + (months * secInMonth)+(days * secInDay) + (hours * secInHour)))/secInMin);
    let seconds = Math.floor((secondsOverall - ((years*secInYear) + (months * secInMonth)+(days * secInDay) + (hours * secInHour) + (minutes * secInMin)))) ;

    alert(`Чтобы подобрать пароль понадобится ${years} годa(лет) ${months} месяц(ев) ${days} день(дней) ${hours} часа(ов) ${minutes} минут(а) ${seconds} секунд(а)`);
}

//--------------------------------------------------------------------------------
//Задание 7

function ex27() {

	let func7 = (a = 'Hello ', b, c) => {c = prompt('Введите параметр: '); return a + c};
	alert(func7());
}
