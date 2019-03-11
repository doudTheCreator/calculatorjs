var qb = 0
var wb = 0
var eb = 0
var rb = false // premier nombre
var tb = 0 // Type: 0 = rien, 1 = ajoute, 2 = soustraction
function affichage(nombre)
{
		var b0 = document.getElementById("b0")
		b0.innerHTML=b0.innerHTML + nombre
}
function force(nombre)
{
		var b0 = document.getElementById("b0")
		b0.innerHTML= nombre
}
function reset (z)
{
	var b0 = document.getElementById("b0")

	if(z != 0)
	{
		tb = z
		if(rb == false)
		{
			qb = Number(b0.innerHTML)
			rb = true
		}
		else
		{
			wb = Number(b0.innerHTML)
		}
	}

	b0.innerHTML = ""

}

function total()
{
	wb = Number(b0.innerHTML) // weird fix but ok - bink
	reset(0)
	if(tb==1)
	{
		force(qb + wb)
	}
	else if (tb==2)
	{
		force (qb - wb)
  }
}
