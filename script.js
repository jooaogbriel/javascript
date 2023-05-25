// let nome = 'Joao';
// let idade = 19;
// let logado = true;
// let lista = ['Joao', 19];
// let obj = {nome: 'joão', idade: 19 };
// console.log(typeof nome); // TIPO



// //EXERCICIO 1
// let carro = 'Ferrari';
// console.log(carro);

// let precoBolo = 19.99;
// console.log(precoBolo);

// let cidade = 'São Paulo';

// //OPERAÇÕES EM VARIÁVEIS
// let x = 1;
// x = x + 5;
// let name = 'João';
// let sobrenome = 'Gonçalves';
// let nomes = `${name} ${sobrenome}`;
// console.log(nomes);
// let nomeCompleto = name + ' ' + sobrenome;
// console.log(x);
// console.log(nomeCompleto);

// //CONDICIONAIS
// let age = 17;

// if (age > 18){
//     console.log('maior de idade');
// } else {
//     console.log('menor de idade');
// }

// //EXERCICOS2
// let a = 10;
// let b = 5;
// console.log(a > b);

// let w = '10';
// let z = 10;
// console.log( w === z);

// let c = 10;
// let d = 5;
// console.log(c != d)

// let preco = 40.3
// if(preco <= 45){
//     console.log('esta barato')
// } else {
//     console.log('esta caro')
// }

//TERNÁRIO
//let result = conditional ? true : false

//SWITCH
// let profession = 'policial';

// switch (profession) {
//     case 'fiscal':
//         console.log('verde')
//         break;

//     case 'policial':
//         console.log('azul')
//         break;

//     case 'bombeiro':
//         console.log('vermelho')
//         break;

//     default:
//         console.log('preta');
//         break;
// }

//FUNCTION
// function validar(){
//     if(usuario === 'joao' && senha === '1234'){
//         console.log('usuario concedido')
//     } else {
//         console.log('usuario negado')
//     }
// }

// let usuario = 'joao';
// let senha = '1234';
// let validacao = validar(usuario, senha)

// function one(){
//     function two(){

//     }
// }
//ARRAYS
// let ingredientes = ['farinha', 'leite']
// //adicionar
// ingredientes.push('ovo')
// //tamanho
// console.log(ingredientes.length)
// //remover o ultimo item
// ingredientes.pop()
// //remover o primeiro item
// ingredientes.shift()

// let carros = ['BMW', 'Ferrari', 'Mercedes']
// let x = carros[1]
// carros[1] = 'Audi'
// carros.push('volvo')
// console.log(carros.length)
// console.log(carros)


//LOOPING
// let cores = ['preto', 'azul', 'branco', 'vermelho']
// for(let i = 0; i < cores.length; i++){
//     console.log(cores[i])
// }


//DOM

// document.getElementById('') 
// document.getElementsByClassName('')
// document.querySelector('#exemplo1')
// document.querySelector('h1')






// const input = document.querySelector('input')
// const ul = document.querySelector('ul')

// input.addEventListener('keyup', handleKeyUp)

// function handleKeyUp (e) {
//     if(e.key === 'Enter'){
//         const newLi = document.createElement('li')
//         newLi.innerHTML = input.value
//         ul.appendChild(newLi)
//     }
// }

// input.addEventListener('keyup', handleKeyUp)

// class Person {
//     steps = 0

//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     countSteps (){
//         this.steps++
//     }
// }

// class Student extends Person {
    
//     constructor(modulo, notas,age, name){
//         super(name,age)
//         this.modulo = modulo
//         this.notas = notas
//     }
// }


// let p1 = new Person('Joao', 19)
// let p2 = new Person('Isis', 21)

// p1.countSteps()
// console.log(`Passos de ${p1.name}: ${p1.steps}`)

//console.log(p1.name, p2.age)

// class Form{
    
// }

// class Input {

//     _type = 'text'
//     required = false;

//     constructor(name, label){
//         this.name = name;
//         this.label = label;
//     }

//     get type() {
//         return this._type
//     }
//     set type(t) {
//         if(['text', 'password', 'email', 'submit'].includes(t)){
//             this._type = t
//         } else {
//             throw new Error(`Input ${t} não existe`)
//         }
//     }
// }
// let email = new Input('email', 'Digite seu email')
// email.type = 'email'
// email.required = true

// let password = new Input('password', 'Digite sua senha')
// email.type = 'password';

// class Button extends Input {
//     constructor(label){
//         super('', label);
//         this.type = 'submit';
//     }
// }

// let button = new Button('Enviar')

// const frase = "Meu cachorro se chama Doug. É um cachorro lindo."
// const fraseModificada = frase.replace("cachorro", "gato")

// console.log(fraseModificada)
// // Saída: "Meu gato se chama Doug. É um cachorro lindo."

// const frase2 = "Meu cachorro se chama Doug. É um cachorro lindo."
// const fraseModificada2 = frase.replaceAll("cachorro", "gato")

// console.log(fraseModificada2)
// Saída: "Meu gato se chama Doug. É um gato lindo."
// function nomeComMaisCaracteres(nomes,nome,num) {
//   let index = nomes[num];
//   if (nome == index) {
//     return 'acertei'
//   } else {
//     return 'nao era quem eu pensava'
//   }
// }
// let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]
// console.log(nomeComMaisCaracteres(nomes,'Rafael',1));

// function nomeComMaisCaracteres(numeros, outrosNumeros){
//   if (numeros.length > outrosNumeros.length) {
//     return ` A maior lista é a lista cujo último número é: ${numeros[numeros.length - 1]}`
//   }  else {
//     return ` A maior lista é a lista cujo último número é: ${outrosNumeros[outrosNumeros.length -1]}`
//   }
 
// }

// let numeros = [1,2,3,4,5,6,10,7]
// let outrosNumeros = [5,7,9,4,2,2,3,3,3,3,]
// console.log(nomeComMaisCaracteres(numeros, outrosNumeros));

// const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]
// console.log(listaDeElementos)
// function arr (num){
//   let index = listaDeElementos.indexOf(num)
//   if (index !== -1) {
//     listaDeElementos.splice(index, 1);
//     return `Elemento ${index} deletado com sucesso`;
//   } else {
//     return "Elemento não encontrado";
//   }
  
// }
// r = arr('11')
// console.log(r)
// console.log(listaDeElementos)

// const carro = {  
//   placa: "ABC123",   
//   classes: ["sedan"],  
//   luxo: true,
//   potencia: 200, 
//   estacionado: true  
// }
// function obterPlaca(){
//   return carro.placa
// }
// function verificarClasses(){
//   return carro.classes[0]
// }
// function potenciaReal (){
//   if (carro.luxo === true){
//     return carro.potencia * carro.potencia
//   } else {
//     return carro.potencia
//   }
// }
// function adicionarNovaClasse(classe) {
//   const classesPermitidas = ['sedan', 'hatchback', 'suv', 'crossover', 'cupê'];

//   if (carro.classes.length >= 3) {
//     return "Este carro não pode ter mais classes";
//   }

//   if (!classesPermitidas.includes(classe)) {
//     return "Classe não permitida";
//   }

//   if (carro.classes.includes(classe)) {
//     return `O carro já possui a classe ${classe}`;
//   }

//   carro.classes.push(classe);
//   return `Classe ${classe} adicionada com sucesso`;
// }

// function naoMaisLuxo () {
//   if (carro.estacionado === false) {
//     return `O carro ${carro.placa} não está estacionado`
//   }
//   else if (carro.luxo === false){
//     return `O carro ${carro.placa} não possui a classe 'Luxo' `
//   } else {
//     return `O carro ${carro.placa} não é mais considerado um carro de luxo`
//   }
// }

// r = naoMaisLuxo()


// console.log(r)

// const carros = [
//   {
//       modelo: "Ka",
//       marca: "Ford",
//       ano: "2000",
//       cor: "Branco",
//       completo: false,
//       acessorios: ['Vidro Elétrico'],
//       preco: 6799.33
//   },
//   {
//       modelo: "Gol",
//       marca: "VW",
//       ano: "1996",
//       cor: "Preto",
//       completo: false,
//       acessorios: ['Trava'],
//       preco: 12199.13
//   },
//   {
//       modelo: "Palio",
//       marca: "Fiat",
//       ano: "1995",
//       cor: "Verde",
//       completo: false,
//       acessorios: [],
//       preco: 11099.1
//   },
//   {
//       modelo: "Monza",
//       marca: "Chevrolet",
//       ano: "1993",
//       cor: "Vinho",
//       completo: false,
//       acessorios: [],
//       preco: 14578.25
//   },
//   {
//       modelo: "Saveiro",
//       marca: "VW",
//       ano: "2013",
//       cor: "Prata",
//       completo: false,
//       acessorios: [],
//       preco: 28399.13
//   },
//   {
//       modelo: "Gol",
//       marca: "VW",
//       ano: "1996",
//       cor: "Preto",
//       completo: true,
//       acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//       preco: 14350.45
//   },
//   {
//       modelo: "Gol",
//       marca: "VW",
//       ano: "2013",
//       cor: "Preto",
//       completo: true,
//       acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
//       preco: 22109.21
//   },
//   {
//       modelo: "Montana",
//       marca: "Chevrolet",
//       ano: "2011",
//       cor: "Azul",
//       completo: false,
//       acessorios: [],
//       preco: 15999.13
//   },
//   {
//       modelo: "Stilo",
//       marca: "Fiat",
//       ano: "2000",
//       cor: "Preto",
//       completo: false,
//       acessorios: [],
//       preco: 17251.36
//   },
//   {
//     modelo: "F8 Spider",
//     marca: "Ferrari",
//     ano: "2024",
//     cor: "Vermelha",
//     completo: true,
//     acessorios: [],
//     preco: 4000000
// }
// ]

// function contaTotal() {
//   return carros.length
// }

// function precoTotal(carros) {
//   let soma = 0
//   for (let i = 0; i < carros.length; i++){
//       soma += carros[i].preco

//   }
//   return `A soma do preço de todos veículos é R${soma}`
// }

// function filtraPorMarca(carros) {
//   var filtrado = carros.filter( carros => carros.completo === true);
//   return filtrado
 
// }

// function adicionaCarro() {
//   return carros.push({
//     modelo: "F8 Spider",
//     marca: "Ferrari",
//     ano: "2024",
//     cor: "Vermelha",
//     completo: true,
//     acessorios: [],
//     preco: 4000000
// })
// }

// function removeCarro(carros, index) {
//   carros.splice(index, 1)
// }

// function contaCarrosNovos(carros) {
//   var filtrado = carros.filter( carros => carros.ano > 2013);
//   return filtrado
// }

// function adicionarDono(carros, indice, pessoa) {
//   carros[indice].donos = {
//     nome: pessoa.nome,
//     telefone: pessoa.telefone
//   };
  
//   return carros;
// }

// r = adicionarDono(carros,1,{nome:'joao', telefone: 123})
// console.log(r)
// console.log(carros)

// const pessoa = {
//   nome: 'João',
//   anoDeNascimento: 1990,
//   cidade: 'São Paulo'
// };

// function criarPessoa (nome, anoDeNascimento,cidade) {
//   let pessoa = {
//     nome : nome,
//     anoDeNascimento: anoDeNascimento,
//     cidade: cidade
//   }
// }

// function fraseInitial (nome, anoDeNascimento,cidade) {
//   let age = 2023 - anoDeNascimento
//   return `${nome} possui ${age} anos de idade e atualmente está morando em ${cidade}.`
// }
// res = fraseInitial('joao',  2003, 'srpq') 
// console.log(res)

// const elevador = {
//     andarAtual: 0,
//     totalDeAndares: 10,
//     capacidadeDoElevador: 5,
//     ocupacaoAtual: 1
// };
// function entrar (elevador) {
//   if (elevador.ocupacaoAtual > 5) {
//     return 'Elevador Lotado'
//   } else {
//     return elevador.ocupacaoAtual++
//   }
// }

// function sair (elevador) {
//   elevador.ocupacaoAtual--
//   return `Ocupação atual em : ${elevador.ocupacaoAtual}`
// }

// function subir (elevador) {
//   elevador.andarAtual++
//   if (elevador.andarAtual === elevador.totalDeAndares) {
//     return `O elevador já se encontra no último andar`
//   } else {
//     return `Estamos no andar: ${elevador.andarAtual}`
//   }
// }

// function descer (elevador) {
//   elevador.andarAtual--
//   if (elevador.andarAtual === 0) {
//     return `O elevador já se encontra no térrio`
//   } else {
//     return `Estamos no andar: ${elevador.andarAtual}`
//   }
// }

// r = entrar(elevador)
// s = sair(elevador)
// q = subir(elevador)
// p = descer(elevador)


// console.log(r)
// console.log(q)

// console.log(s)
// console.log(p)

const tv = {
  canalAtual: 0,
  volume: 0
}

function aumentarVolume (tv) {
  tv.volume++
  if (tv.volume === 10) {
    return 'Volume no máximo'
  } else {
    return `Volume está em: ${tv.volume}`
  }
}

function diminuirVolume (tv) {
  tv.volume--
  if (tv.volume === 0) {
    return 'Volume no mínimo'
  } else {
    return `Volume está em: ${tv.volume}`
  }
}

r = aumentarVolume(tv)
r = aumentarVolume(tv)
q = diminuirVolume(tv)
console.log(r)
console.log(q)
