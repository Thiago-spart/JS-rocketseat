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
//atv 3

function temHabilidade(skills) {
	var indice = [], elemento = "Javascript"
	
	var idx = skills.indexOf(elemento)
	while (idx != -1) {
		indice.push(idx)
		idx = array.indexOf(elemento, idx + 1)
	}
	return console.log(idx)

}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
//atv 4 

function experiencia(anos) {
	
	if (anos >= 0 && anos < 1) {
		// De 0-1 ano: Iniciante
		console.log('Iniciante')
	} else if (anos >= 1 && anos < 3) {
		// De 1-3 anos: Intermediário	
		console.log('Intermediário')
	} else if (anos >= 3 && anos <= 6) {
		// De 3-6 anos: Avançado
		console.log('Intermediário')
	} else {
		// De 7 acima: Jedi Master
		console.log('Jedi Master')
	}	
}
var anosEstudo = 7;
experiencia(anosEstudo);
//atv5

var usuarios = [
	{
		nome: "Diego",
		habilidades: ["Javascript", "ReactJS", "Redux"]
	},
	{
		nome: "Gabriel",
		habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
	}
];

function frase(nome, habilidades) {
	for (let value of usuarios[1]) {
		console.log(value.join(', '));
	}
	console.log('O '+nome+' possui as habilidades: '+value+'.')
}
//O Diego possui as habilidades: Javascript, ReactJS, Redux
//O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir