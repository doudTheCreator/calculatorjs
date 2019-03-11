var qb = 0
var wb = 0
var eb = 0
var rb = false
var tb = 0 // Type: 0 = rien, 1 = ajoute, 2 = soustraction
function affichage(nombre)
{
		var b0 = document.getElementById("b0")
		b0.innerHTML=b0.innerHTML + nombre
}
function reset (z)
{
	tb=z
	rb = true
	var b0 = document.getElementById("b0")
	qb = Number(b0.innerHTML)
	b0.innerHTML = ""
	
}

function total()
{
}
