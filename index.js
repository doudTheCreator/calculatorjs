
function reset(){
	var b0 = document.getElementById("b0");
	b0.innerText = "";
}

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

