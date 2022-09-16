//Задание 1
function ex21(){

	let r = prompt('Введите радиус круга r', '');
	let S = Math.round(Math.PI) * r;
	let D = 2 * r;
	let L = 2 * Math.round(Math.PI) * r;

	if (r>0){
		alert('S=' + S + '\n' + 'D=' + D + '\n' + 'L=' + L + '\n');
	}
	else 
		alert('Введено неверное числовое значение!')

}

//Задание 2
function ex22() {
    alert('Добро пожаловать в магазин!')
	let bank = prompt('Введите сумму на вашей банковской карте', '');

	//Функция сложения покупок
	function sumInput() {
		let numbers = [];
		while (true) {

   			let value = prompt("Введите цену каждой покупки", '');

    		// Прекращаем ввод
    		if (value === "" || value === null || !isFinite(value)) break;
   			numbers.push(+value);

  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert('Сумма ваших покупок составляет: '+ sumInput() + 'р.' );

}

// Задание 3
function ex23() {

	let b = prompt('Введите параметр: ')
	function ex(a = 1, b , c = "stop") {
		return a + b + c;
	}
	alert (ex());
}

//Задание 4
function ex24()
 {

		let stud = [''];
		while (true) {

   			let value = prompt("Введите имена студентов", '');

    		// Прекращаем ввод
    		if (value === "" || value === null || !isFinite(value)) break;
   			stud.push(+value);
}
}