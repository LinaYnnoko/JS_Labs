//Задание 1
function ex31(){

	let value = prompt('Введите данные', '');

	if (!isNaN(value)){
		value = value * 1;
		if(!isNaN(value) && String(value).includes('.')){
			let math_floor = Math.floor(value);
			let math_ceil = Math.ceil(value);
			let math_round = Math.round(value);
			alert(`Наименьшее: ${math_floor}, Наибольшее:${math_ceil}, ближайшее: ${math_round}`);
		}
		else
    		alert (value.toString(16).toUpperCase());
  }
	else {
		let Upper = value.toUpperCase();
		let Lower = value.toLowerCase();
		alert(`Вы ввели строку. 
			Строка в верхнем регистре ${Upper}
			Строка в нижнем регистре ${Lower}`);
	}
}

//--------------------------------------------------------------------------------
//Задание 2

function ex32(){

  let str1 = "молоко";
  let str2 = prompt('Введите словарное слово м_л_к_', '');
  let result = '';

  for(let i = 0; i < str1.length; ++i){

    if(str1[i] != str2[i]){
      result += i + 1 + ', '; 
    }
  }

  if(result == '')
      alert('Слово введено верно!');
    else
      alert(`ошибки допущены в ${result} символах`);
}

//--------------------------------------------------------------------------------
//Задание 3

function ex33(){

	let katet1 = +prompt('Задайте прилежащий катет: ');
	let katet2 = +prompt('Задайте противолежащий катет: ');

	let hipotinuz = Math.sqrt( Math.pow(katet1, 2) + Math.pow(katet2, 2));

	let P = katet1 + katet2 + hipotinuz;
	let S = 1/2 * katet1 * katet2;
	let H = (katet1 * katet2)/hipotinuz;

	let sin_alf = katet1/hipotinuz;
	let cos_alf = katet2/hipotinuz;
	let tg_alf = katet1/katet2;
	let ctg_alf = katet2/katet1;

	let sin_betta = cos_alf;
	let cos_betta = sin_alf;
	let tg_betta = ctg_alf;
	let ctg_betta = tg_alf;

	alert(`Периметр треугольника: ${P}
		Площадь треугольника: ${S}
		Высота треугольника: ${H}
		SIN альфа ${sin_alf}
		COS альфа ${cos_alf}
		TG альфа ${tg_alf}
		CTG альфа ${ctg_alf}
		SIN бетта ${sin_alf}
		COS бетта ${cos_alf}
		TG бетта ${tg_alf}
		CTG бетта ${ctg_alf}`);

}

//--------------------------------------------------------------------------------
//Задание 4

function ex34(){
	const arr = [1,[1,2,[3,4]],[2,4]];

	var flat = arr.reduce(function(done,curr){
    return done.concat(curr);
	}, []);

	flat = flat.reduce(function(done,curr){
    return done.concat(curr);
	}, []);

	console.log(arr);
	console.log(flat);
}

//--------------------------------------------------------------------------------
//Задание 5

function ex35(){
	const arr = [1,[1,2,[3,4]],[2,4]];
	const sum = arr => arr.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

	console.log(sum(arr));

}

//--------------------------------------------------------------------------------
//Задание 6

function ex36(){

	let arr = [
  {name: "Катя", age: 18, groupId: 1},
  {name: "Настя", age: 18, groupId: 2},
  {name: "Лиза", age: 17, groupId: 2},
  {name: "Даша", age: 17, groupId: 1},
  {name: "Cаша", age: 19, groupId: 3},
  ];

  function groupOnlyMatureStudentsByGroup(students) {
    let mass = [];
  return students.reduce((acc, student) => {
    if(student.age > 17){

      if(Array.isArray(mass[student.groupId]))
        mass[student.groupId].push(student);
      else
        mass[student.groupId] = [student];
    }
    return mass;
  }, {});
}

arr = groupOnlyMatureStudentsByGroup(arr);

console.log(arr);
}

//--------------------------------------------------------------------------------
//Задание 7

function ex37(){

let str = 'BCD';
let total1 = '';

for(let i = 0; i < str.length; ++i)
  total1 += str.charCodeAt(i);    

console.log('total1: ' + total1);

for(let i = 0; i < total1.length; ++i)
  if(total1[i] == 7)
    total2 = total1.substr(0, i) + '1' + total1.substr(i + 1);

console.log('total2: ' + total2);
console.log(total1 - total2);
}