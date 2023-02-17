function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let marca = document.forms["cadastrar"]["marca"].value;
	let modelo = document.forms["cadastrar"]["modelo"].value;
	let ano = document.forms["cadastrar"]["ano"].value;
	
	let inserir = window.document.getElementById("inserirTabela");
	
	inserir.innerHTML +=	`<td>${codi}</td>`;
	inserir.innerHTML +=	`<td>${marca}</td>`;
	inserir.innerHTML +=	`<td>${modelo}</td>`;
	inserir.innerHTML +=	`<td>${ano}</td>`;
	

}