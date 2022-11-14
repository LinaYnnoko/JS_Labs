let buttonObj ={
  height: "50px",
  width: "110px",
  "border-radius": "4px",
  "font-size": "16px",
};

let linkObj = {
  "font-family": "Open Sans",
  "font-size": "20px", 
  color:"blue", 
  margin: "10px",
};

let accentObj = {
  "background-color": "yellow",
};

let accentBtn=document.createElement("button"); //создает элемент
accentBtn.innerHTML="Акцетная кнопка";
Object.assign(accentBtn.style,buttonObj, accentObj); // метод копирует все перечисляемые свойства 
document.body.appendChild(accentBtn); //позволяет вставить в конец элемент

let accentLink=document.createElement("a");
accentLink.innerHTML="Акцентная ссылка";
Object.assign(accentLink.style,linkObj, accentObj);
document.body.appendChild(accentLink);