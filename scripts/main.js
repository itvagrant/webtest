let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

let mybutton = document.querySelector('button');

function setName(){
	let name = localStorage.getItem("name");
	if(name){
		return name;
	}else{
		name = prompt("你是谁：");
		localStorage.setItem("name",name);
	}
	return name;
}
mybutton.onclick=function(){
	let name = setName();
	myHeading.textContent = "Hello world!" + name;
}