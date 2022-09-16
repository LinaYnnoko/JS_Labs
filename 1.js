//Задание 1

function ex1() 
{
	function pow(x,n)
	{ //Ex 1
		let result = 1;

		for (var i = 0; i < n; i++)
		{
			result *= x;
		}

		return result;
	}

	x = prompt("x?", '')
	n = prompt("n?", '')

	if (n < 0)
		alert(`Степерь ${n} не поддерживается, ввведите целую степень, большую 0`);
	else
		alert(pow(x,n));

}

//Задание 2

function ex2() 
{
	//имя пользователя
	let username = prompt('Имя пользователя', '');
	alert('Ваше имя ' + username + '?' +'Добро пожаловать!')

	//название города
	let city = prompt('Название города', '');
	alert('Ваш город: ' + city)

	//год рождения
	let birth = prompt("Введите дату вашего рождения :)", '');
	alert('Год вашего рождения:' + birth)

	//красный цвет 
	let color = prompt("Введите: красный цвет", '');
	if (color == "красный цвет")
		alert('Вы ввели верно! Поздравляем, ваш ввод: ' + color);
	else
		alert('Эмм... Вы ввели не красный цвет :/');

	//ответ пользователя да нет
	let answer = prompt("Вы мужчина или женщина? Напишите ДА, если мужчина и НЕТ если женщина", '');
	if (answer == "ДА")
		alert('Вы - мужчина');
	else if (answer == "НЕТ")
		alert('Вы - женщина');
	else
		alert('Пол определить не удалось');

	//Бесконечность
	let infinity = prompt("Введите: бесконечность", '');
	if (infinity == "бесконечность")
		alert('Вы ввели верно! Поздравляем, ваш ввод: ' + infinity);
	else
		alert('Введенные данные неверны');

	//532
	let number = prompt("Введите: 532", '');
	if (number == "532")
		alert('Вы ввели верно! Поздравляем, ваш ввод: ' + number);
	else
		alert('Введенные данные неверны');

	//Периметр четырехугольника 120 мм
	let perimetr = prompt("Периметр четырехугольника 12 см. Введите ответ в мм", '');
	if (perimetr == "120")
		alert('Верно! Поздравляем, ответ верный');
	else
		alert('Введенные данные неверны');

}

//Задание 3

function ex3()
{
	let a = 5;
	let name = "Name";
	let i = 0;
	let double = 0.23;
	let result = 1/0;
	let answer = true;
	let no = null;

	console.log(typeof a);
	console.log(typeof name);
	console.log(typeof i);
	console.log(typeof double);
	console.log(typeof result);
	console.log(typeof answer);
	console.log(typeof no);

}

//Задание 4

function ex4()
{
	let A = 45;
	let B = 21;
	let S = A * B;
	alert('Площадь четырехугольника со сторонами 45мм и 21мм будет равна: ' + S + 'мм');

}

//Задание 5

function ex5()
{
	let square = 5;
	let rectangleA = 45;
	let rectangleB = 21;
	let width = rectangleA / square;
	let hight = Math.round (rectangleB / square);
	let allsquare = width * hight; 
	alert('В четырехугольник 45мм х 21мм поместиться ' + allsquare + ' квадратов');
}

//Задание 6

function ex6()
{
	let i = 2;
	let a = ++i;
	let b = i++;
	if (a > b)
		alert ('a > b');
	else if (a < b)
		alert ('a < b');
	else
		alert ('a = b');

}

//Задание 7

function ex7()
{
	let a = "Привет";
	let b =  "привет";
	if (a > b)
		console.log ('a > b');
	else if (a < b)
		console.log ('a < b');
	else
		console.log ('a = b');

	let c = "Пока";
	if (a > c)
		console.log ('a > c');
	else if (a < c)
		console.log ('a < c');
	else
		console.log ('a = c');

	let d = 45;
	let e = "53";
	if (d > e)
		console.log ('d > e');
	else if (d < e)
		console.log ('d < e');
	else
		console.log ('d = e');

	let f = false;
	let j = 3;
	if (f > j)
		console.log ('f > j');
	else if (f < j)
		console.log ('f < j');
	else
		console.log ('f = j');

	let h = true;
	let i = "3"
	if (h > i)
		console.log ('h > i');
	else if (h < i)
		console.log ('h < i');
	else
		console.log ('h = i');

	let l = 3;
	let k = "5мм";
	if (l > k)
		console.log ('l > k');
	else if (l < k)
		console.log ('l < k');
	else
		console.log ('l = k');

	let m = null;
	let n = undefined;
	if (m > n)
		console.log ('m > n');
	else if (m < n)
		console.log ('m < n');
	else
		console.log ('m = n');
}

//Задание 8

function ex8()
{
	let qestion = prompt("Сколько лап у жаб?", '');
	if (qestion == "4")
		alert('Верно! У жабки 4 лапки :З');
	else
		alert('Введенные данные неверны');
}

//Задание 9

function ex9()
{
	let a = alert('СТОП! Чтобы войти в систему, нужно ответить на секретный вопрос :');
	let b = prompt('Есть у маленькой лягушки \n Толстопузая подружка - \n Бородавками покрыта, \n Целый день спит под корытом.', '');
	if (b == "жаба")
		alert('Добро пожабовать :)');
	else
		alert('Неее, вы перепутали болото, ужабывайте отсюда');

}

//Задание 10

function ex10()
{
	let login = prompt('Введите логин: ', '');
	let password = prompt('Введите пароль: ', '');
	if (login == 'jaba' && password == '1234')
		alert('Вы вошли в систему!)')
	else 
		alert('Вы не вошли в систему!(')

}

//Задание 11

function ex11()
{
	var math = prompt('Ваша оценка по математике? ', '');
	var rus = prompt('Ваша оценка по русскому? ', '');
	var eng = prompt('Ваша оценка по английскому? ', '');
	if (math <= 4 && rus <= 4 && eng <= 4)
		alert('Вас ждет отчисление :( ');
	else if (math >= 4 && rus >= 4 && eng >= 4)
		alert('Поздравляем! Вы перешли на другой курс :)');
	else
		alert('Вас ожидают пересдачи :(');
}

//Задание 12

function ex12()
{
	let a = prompt('Введите число a', '');
	let b = prompt('Введите число b', '');
	let sum = Number(a) + Number(b);
	alert('Сумма чисел равна: ' + sum);
}

//Задание 13

function ex13()
{
	let a = true + true;
	let b = 0 + "5";
	let c = 5 + "мм";
	let d = 8/Infinity;
	let e = 9 * "\n9";
	let h = null - 1;
	let k = "5" - 2;
	let l = "5px" - 3;
	let r = true - 3;
	let f = 7 || 0;

	console.log(true + true)
	console.log(0 + "5")
	console.log(5 + "мм")
	console.log(8/Infinity)
	console.log(9 * "\n9")
	console.log(null - 1)
	console.log("5" - 2)
	console.log("5px" - 3)
	console.log(true - 3)
	console.log(7 || 0)

}

//Задание 14
function ex14()
{
	for (var j = 1; j <= 10; j++)
	{
    	if (j % 2 == 0 && j != 1)
      	console.log(j + 2);
  	
 	 else 
    	console.log(j + 'мм');
}
}

//Задание 15
function ex15()
{
	let num;

	do 
	{
  		num = prompt("Введите любое число", '');
	} 
	while (num <= 100 && num);
}

//Задание 16
function ex16()
{
	let a = prompt('Введите день недели', '');
	days = {
		1: 'Понедельник',
        2: 'Вторник',
        3: 'Среда',
        4: 'Четверг',
        5: 'Пятница',
        6: 'Суббота',
        7: 'Воскресенье',
	}

	if (days.hasOwnProperty(a))
		alert(days[a]);
	else 
		alert('Такого дня нет :(')
}