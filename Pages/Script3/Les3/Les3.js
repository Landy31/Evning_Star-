1
if ("0"){
    alert
}
2
let x = prompt("Какое «официальное» название JavaScript?" , ''); 
if (x=="ECMAScript") {
    console.log("Верно!");
} else{
        console.log("Не знаете? ECMAScript!");
}
3
let x = prompt("Введите любое число" , ''); 
if (x>0) {
    alert("1");

} else if (x<0){
        alert("-1");
} else if (x==0){
    alert("0")
}
4
let a = prompt("A");
let b = prompt("B");
let result=(a+b<4) ? "Мaло" : "Много";
alert(result);
5
let login = String(prompt("Write your login"));

let message = (login =="Сотрудник") ? "Привет" : 
    login = (login == "Директор") ? "Здраствуйте" : 
    login = (login == "") ? "Нет логина" : "";
alert(message);
