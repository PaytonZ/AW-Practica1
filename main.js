function round(num, places) 
{ 
	return +(Math.round(num + "e+" + places)  + "e-" + places);
}

function comprobarNombre(textbox)
{
	var re = /^[A-Za-z]+$/;

	if(textbox.value.length > 0 )
	{
		if(re.test(textbox.value))
		{
			textbox.setCustomValidity("");
			return true;
		}
		else
		{
			alert("Campo nombre no debe contener números");
			textbox.setCustomValidity("No debe contener números");
			return false;
		}
	}

}

function comprobarNIF(textbox)
{
	var table = "TRWAGMYFPDXBNJZSQVHLCKE";
	if(textbox.value.length > 0 )
	{
		if(textbox.value.length==9)
		{

			var numbers_DNI = textbox.value.substring(0,8);
			var letter = table.charAt(numbers_DNI % 23);
			var dni = numbers_DNI+letter;
			if(dni == textbox.value) 
			{
				textbox.setCustomValidity("");
				return true;
			}
			else
			{
				alert("Campo DNI 8 números + digito de control");
				textbox.setCustomValidity("Campo DNI 8 números + digito de control");
				return false;
			}

		}else
		{
			alert("Campo DNI 8 números + digito de control");
			textbox.setCustomValidity("Campo DNI 8 números + digito de control");
			return false;
		}
	}

}

function comprobarCodigopostal(textbox){

	var re = /^[0-9]{5}/;
	if(textbox.value.length > 0 )
	{	
		if(re.test(textbox.value) && textbox.value.length == 5 )
		{
			textbox.setCustomValidity("");
			return true;
		}
		else
		{
			alert("Campo codigo postal solo debe contener 5 números");
			textbox.setCustomValidity("Solo debe contener 5 números");
			return false;
		}
	}
}

function comprobarEmail(textbox)
{
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(textbox.value.length > 0 )
	{
		if(re.test(textbox.value))
		{
			textbox.setCustomValidity("");
			return true;
		}
		else
		{
			alert("Campo email formato xxx@yyy.zzz");
			textbox.setCustomValidity("Campo email formato xxx@yyy.zzz");
			return false;
		}
	}
	else
	{
		textbox.setCustomValidity("");
	}
}

function comprobarTelefono(textbox)
{
	var re = /^[0-9]{5}/;
	if(textbox.value.length > 0 )
	{	
		if(re.test(textbox.value) && textbox.value.length == 5 )
		{
			textbox.setCustomValidity("");
			return true;
		}
		else
		{
			alert("Campo telefono solo debe contener 5 números");
			textbox.setCustomValidity("Solo debe contener 5 números");
			return false;
		}
	}
	else
	{
		textbox.setCustomValidity("");
	}
}

function comprobarPlatoPrincipal(checkbox)
{
	var platoa = document.getElementById("platoa");
	var platob = document.getElementById("platob");
	var platoc = document.getElementById("platoc");
	var pedido = document.getElementById("precio");

	var promocodigohidden = document.getElementById("promocodigohidden");

	var modificador = (promocodigohidden.value=="true") ? 0.75 : 1;
	switch(checkbox.id)
	{
		case "platoa": precio = 10.0 * modificador; break;
		case "platob": precio = 12.0 * modificador; break;
		case "platoc": precio = 7.0 * modificador; break;
	}
	
	pedido.textContent = (checkbox.checked == true) ? round(parseFloat(pedido.textContent),2) + precio : round(parseFloat(pedido.textContent),2) - precio;
	pedido.textContent = round(parseFloat(pedido.textContent),2);
	var sum = 0;
	sum += (platoa.checked == true) ? 1 : 0;
	sum += (platob.checked == true) ? 1 : 0;
	sum += (platoc.checked == true) ? 1 : 0;
	if(sum>1)
	{
		alert("Solo se puede elegir un primer plato");

	}

}

function comprobarSegundoPlato(checkbox)
{
	var platoz = document.getElementById("platoz");
	var platox = document.getElementById("platox");
	var platov = document.getElementById("platov");
	var platow = document.getElementById("platow");
	var pedido = document.getElementById("precio");

	var modificador = (promocodigohidden.value=="true") ? 0.75 : 1;
	switch(checkbox.id)
	{
		case "platoz": precio = 11.0 * modificador; break;
		case "platox": precio = 6.5 * modificador; break;
		case "platov": precio = 5 * modificador; break;
		case "platow": precio = 9 * modificador; break;
	}
	
	pedido.textContent = (checkbox.checked == true) ? round(parseFloat(pedido.textContent),2) + precio : round(parseFloat(pedido.textContent),2) - precio ;
	pedido.textContent = round(parseFloat(pedido.textContent),2);

	var sum = 0;
	sum += (platoz.checked == true) ? 1 : 0;
	sum += (platox.checked == true) ? 1 : 0;
	sum += (platov.checked == true) ? 1 : 0;
	sum += (platow.checked == true) ? 1 : 0;
	if(sum>1)
	{
		alert("Solo se puede elegir un segundo plato");
	}
}

function comprobarIngredientes(checkbox)
{
	var platoz = document.getElementById("platoz");
	var platox = document.getElementById("platox");
	var platov = document.getElementById("platov");
	var platow = document.getElementById("platow");
	
	var ingrediente1 = document.getElementById("ingrediente1");
	var ingrediente2 = document.getElementById("ingrediente2");
	var ingrediente3 = document.getElementById("ingrediente3");
	var ingrediente4 = document.getElementById("ingrediente4");
	var ingrediente5 = document.getElementById("ingrediente5");
	var sum = 0;
	sum += (platoz.checked == true) ? 1 : 0;
	sum += (platox.checked == true) ? 1 : 0;
	sum += (platov.checked == true) ? 1 : 0;
	sum += (platow.checked == true) ? 1 : 0;
	if(sum >= 1)
	{
		var ingsum = 0;

		ingsum+= (ingrediente1.checked == true) ? 1 : 0 ;
		ingsum+= (ingrediente2.checked == true) ? 1 : 0 ;
		ingsum+= (ingrediente3.checked == true) ? 1 : 0 ;
		ingsum+= (ingrediente4.checked == true) ? 1 : 0 ;
		ingsum+= (ingrediente5.checked == true) ? 1 : 0 ;

		if(ingsum > 3)
		{
			alert("No puedes elegir más de 3 ingredientes por segundo plato");
		}

	}
	else if( sum == 0)
	{
		alert("No puedes elegir ingredientes sin segundo plato");
	}

}

function comprobarBebidas(checkbox)
{
	var bebidab1 = document.getElementById("bebidab1");
	var bebidab2 = document.getElementById("bebidab2");
	var bebidab3 = document.getElementById("bebidab3");
	var bebidab4 = document.getElementById("bebidab4");
	var bebidab5 = document.getElementById("bebidab5");
	var pedido = document.getElementById("precio");

	var modificador = (promocodigohidden.value == "true") ? 0.75 : 1;

	switch(checkbox.id)
	{
		case "bebidab1": precio = 1.5 * modificador; break;
		case "bebidab2": precio = 2.0 * modificador; break;
		case "bebidab3": precio = 4.0 * modificador; break;
		case "bebidab4": precio = 1.75 * modificador; break;
		case "bebidab5": precio = 3.5 * modificador ; break;
	}

	pedido.textContent = (checkbox.checked == true) ? round(parseFloat(pedido.textContent),2) + precio :  round(parseFloat(pedido.textContent),2) - precio;
	pedido.textContent = round(parseFloat(pedido.textContent),2);

	var sum = 0;
	sum += (bebidab1.checked == true) ? 1 : 0;
	sum += (bebidab2.checked == true) ? 1 : 0;
	sum += (bebidab3.checked == true) ? 1 : 0;
	sum += (bebidab4.checked == true) ? 1 : 0;
	sum += (bebidab5.checked == true) ? 1 : 0;
	if(sum>1)
	{
		alert("Solo se puede elegir una bebida");
	}

}
function comprobarCodigo(textbox)
{
	var re = /^[A-Z]{2}[0-9]{3}$/;
	var promocodigohidden = document.getElementById("promocodigohidden");
	
	if(re.test(textbox.value))
	{
		
		var letra1 = (textbox.value.charCodeAt(0) - "A".charCodeAt(0) +1)*10;
		
		var letra2 = (textbox.value.charCodeAt(1) - "A".charCodeAt(0) +1)*10; 
		var digito3 = parseInt(textbox.value.charAt(2));
		var digito4 = parseInt(textbox.value.charAt(3));
		var digito5 = parseInt(textbox.value.charAt(4));

		var resultado = letra1 + letra2 + digito3 + digito4 + digito5;
		var pedido = document.getElementById("precio");

		if(resultado==101 && promocodigohidden.value == "false")
		{
			pedido.textContent = round(round(parseFloat(pedido.textContent),2) * 0.75,2);
			promocodigohidden.value = "true";
		}
		else if(resultado!=101 && promocodigohidden.value == "true" )
		{
			pedido.textContent = round(round(parseFloat(pedido.textContent),2) / 0.75,2);
			promocodigohidden.value = "false";
		}

		pedido.textContent = round(parseFloat(pedido.textContent),2);
		textbox.setCustomValidity("");
		return true;
	}
	else
	{
		console.log("Invalid code");
		if(promocodigohidden.value == "true" )
		{
			var pedido = document.getElementById("precio");
			pedido.textContent = round(round(parseFloat(pedido.textContent),2) / 0.75,2);
			pedido.textContent = round(parseFloat(pedido.textContent),2);
			promocodigohidden.value = "false";
		}
		if(textbox.value.length>0)
		{
			alert("No es un código de promoción válido");
		}
		return false;
	}
}

onsubmit = function(submit)
{
	var email = document.getElementById("email");
	var telefono = document.getElementById("telefono");

	var sum = 0;
	if (email.length > 0 && email.valid) sum+=1;
	if (telefono.length > 0 && telefono.valid) sum+=1;

	if(sum == 0 )
	{
		alert("Introduce email o telefono");
		return false;
	}
	else
	{
		return true;
	}
	
	return false;


}