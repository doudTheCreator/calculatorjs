
function reset(){
	var b0 = document.getElementById("b0");
	b0.innerText = "";
}


function evil(fn) {
  return new Function('return ' + fn)();
}

console.log( evil('12/5*9+9.4*2') );


function affichage(nombre)
{
		var b0 = document.getElementById("b0");
		b0.innerHTML= b0.innerHTML + nombre
}

function total(){
	let doc = document.getElementById("b0");

	doc.innerText = new Function('return ' + doc.innerText)();

}

function addOps(o){
	affichage(o)
}

