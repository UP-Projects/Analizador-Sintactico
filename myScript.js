
var digit=[0,1,2,3,4,5,6,7,8,9];
var flag=0;
var sumary=0;
function analizaSwitch() {
	var cadena = document.getElementById("txtAreaEntrada");//obtenemos el elemento
	if(cadena != " "){
			var lineas = cadena.value.split("\n");
			// var lineas2=lineas.value.split(" ");
			// console.log(lineas2);
			aux = "";

		for (var i = 0; i < lineas.length; i++) {
            sumary++;
			aux = lineas[i];
			aux2=lineas[i];

			console.log("valor de aux: "+aux);

			switch (aux) {
				case 'INICIO':
    				console.log("Recibio: "+aux);
                    divCreator(aux,sumary);
				break;

				case 'FIN':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Begin':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'End':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Input':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Output':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Algorithm':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'If':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Function':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'digit':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'For':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '(':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case ')':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Write':
					console.log("Recibio: "+aux);
					if(aux[i+1].equals=="("){
						console.log("ENTRO");
					}
					divCreator(aux,sumary);
				break;

				case 'Read':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'GetLine':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'GetRead':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Digit':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case 'Var':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '+':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case ')':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '-':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '/':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '"':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '{':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				case '}':
					console.log("Recibio: "+aux);
					divCreator(aux,sumary);
				break;

				default:
					//alert("Token no reconocido: "+aux);
					flag=1;
					if(/[0-9]/g.test(aux)){
						console.log("Recibido:DIGIT");
						console.log("Recibio: "+aux);
						divCreator(aux,sumary);
				}
			}
		}
	}
}


function divCreator(aux, sumary){
	console.log("Valor de aux en divCreator: "+aux);
    var div = document.createElement('div');
    var ptag = document.createElement('p');
    var text = document.createTextNode(aux);
    var conta = sumary;
	var divID = "idAux"+conta;
    div.id = divID;
	div.className = aux;
	// document.getElementById('idAux'+conta).setAttribute("class", "aux");
    ptag.className = 'centrado-tag-p';
    conta++;
    ptag.appendChild(text);
    div.appendChild(ptag);
    document.getElementById('flowchart').appendChild(div);
}

var c = 1;
document.addEventListener("trash", limpiar);
function limpiar(){
	var divID = "idAux"+1;
	for (var i = 0; i <= sumary; i++) {
		var currentID = 'idAux'+c;
		var child = document.getElementById(currentID);
		var father = document.getElementById('flowchart');
		father.removeChild(child);
		c++;
		console.log("Elemento eliminado: "+currentID);
	}
}
