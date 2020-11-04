//atv 1
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
}

	//O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
function retornaEndereco() {
	return 'O usuário mora em '+ endereco.cidade + ' / '+ endereco.uf + ' no bairro '+ endereco.centro+', na rua "'+ endereco.rua + '" com nº '+ endereco.numero + '.' 
} 

console.log(retornaEndereco())
//atv 2 

function pares(x, y) {
	var resultado = x % y
	if (resultado == 0) {
		var e = console.log(resultado)
	}

	return e
}
pares(32, 321);