var a = parseInt(prompt("Enter a value"));
var b = parseInt(prompt("Enter b value"));
var c = parseInt(prompt("Enter c value"));
if(a<b){
	if(b<c){
		document.write("C is Bigger")
	}
	else{
		document.write("B is Bigger")
	}
}
else if(a<c){
	document.write("C is Bigger")
}
else{
	document.write("A is Bigger")
}