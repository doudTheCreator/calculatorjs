var qb = 0
var wb = 0
var eb = 0 
var rb = false // premier nombre
var tb = 0 // Type: 0 = rien, 1 = ajoute, 2 = soustraction

function affichage(nombre)
{
		var b0 = document.getElementById("b0");
		b0.innerHTML= b0.innerHTML + nombre
}

function total(){
	let doc = document.getElementById("b0");
	b0.innerText = eval(doc.innerText);


}

function addOps(o){
	affichage(o)
}

