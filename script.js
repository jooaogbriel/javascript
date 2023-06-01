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

// const tv = {
//   canalAtual: 0,
//   volume: 0
// }

// function aumentarVolume (tv) {
//   tv.volume++
//   if (tv.volume === 10) {
//     return 'Volume no máximo'
//   } else {
//     return `Volume está em: ${tv.volume}`
//   }
// }

// function diminuirVolume (tv) {
//   tv.volume--
//   if (tv.volume === 0) {
//     return 'Volume no mínimo'
//   } else {
//     return `Volume está em: ${tv.volume}`
//   }
// }

// r = aumentarVolume(tv)
// r = aumentarVolume(tv)
// q = diminuirVolume(tv)
// console.log(r)
// console.log(q)

// const departmentList = [
//   {
//     departmentName: 'Financial',
//     employees:
//     [
//       {
//         name: 'Rose',
//         age: 26,
//         responsibility: 'Financial director',
//         salary: 5600
//       },
//       {
//         name: 'Stevem',
//         age: 32,
//         responsibility: 'Financial manager',
//         salary: 4200
//       },
//       {
//         name: 'Beca',
//         age: 26,
//         responsibility: 'Financial analyst',
//         salary: 2800
//       }
//     ],
//     working: true
//   },
//   {
//     departmentName: 'Expedition',
//     employees:
//     [
//       {
//         name: 'Rooper',
//         age: 35,
//         responsibility: 'Expedition director',
//         salary: 5600
//       },
//       {
//         name: 'Maggie',
//         age: 22,
//         responsibility: 'Expedition manager',
//         salary: 4200
//       },
//       {
//         name: 'Thompson',
//         age: 41,
//         responsibility: 'Expedition analyst',
//         salary: 2800
//       }
//     ],
//     working: true
//   },
//   {
//     departmentName: 'Capitation',
//     employees:
//     [
//       {
//         name: 'Saory',
//         age: 35,
//         responsibility: 'Capitation director',
//         salary: 5600
//       },
//       {
//         name: 'Silvia',
//         age: 22,
//         responsibility: 'Capitation manager',
//         salary: 4200
//       },
//       {
//         name: 'Sonem',
//         age: 41,
//         responsibility: 'Capitation analyst',
//         salary: 2800
//       },
//       {
//         name: 'Havi',
//         age: 41,
//         responsibility: 'Trainee Capitation manager',
//         salary: 1500
//       },
//       {
//         name: 'Margie',
//         age: 25,
//         responsibility: 'Capitation analyst',
//         salary: 2800
//       },
//       {
//         name: 'Victoria',
//         age: 18,
//         responsibility: 'Trainee Capitation analyst',
//         salary: 1500
//       }
//     ],
//     working: true
//   },
// ]



// function howManyDepartments (departmentList) {
//   for(let i = 0; i < departmentList.length; i++){
//     return departmentList.length
//   }
// }

// function changeDepartmentName(currentName, newName) {
//   for (let i = 0; i < departmentList.length; i++) {
//     if (departmentList[i].departmentName === currentName) {
//       departmentList[i].departmentName = newName;
//       return departmentList[i];
//     }
//   }

//   return "Department not found.";
// }

// function giveTheDepartmentABreak (departmentList) {
//   for (let i = 0; i < departmentList.length; i++) {
//     let r = departmentList[i].working === true ? departmentList[i].working = false : departmentList[i].working = true
//   }
// }

// function howManyEmployeesInDepartment(departmentName) {
//   for (let i = 0; i < departmentList.length; i++) {
//     const department = departmentList[i];

//     if (department.departmentName === departmentName) {
//       return department.employees.length;
//     }
//   }

//   return "Department not found.";
// }

// function insertNewEmployeeInDepartment (departmentName, person) {
//   for (let i = 0; i < departmentList.length; i++) {
//     const department = departmentList[i];
//     if (department.departmentName === departmentName) {
//       return department.employees.push(person)
//     }
//   }
// }

// // r = howManyDepartments(departmentList)
// // console.log(r)

// // q = changeDepartmentName('Financial', 'Finance')
// // console.log(q)
// // console.log()

// // s = giveTheDepartmentABreak(departmentList)
// // console.log(s)
// // console.log(departmentList)

// p = howManyEmployeesInDepartment('Capitation')
// console.log(p)

// s = insertNewEmployeeInDepartment('Capitation', {name: 'joao', age:19, responsibility: 'tech leader', salary: 9000})
// console.log(s)
// console.log(departmentList)

// let ganhador = {
//   nome: 'Adamastor',
//   nascimento: '16/09/1986',
//   cpf: '123.321.789-98',
//   estadoCivil: 'Casado'
// }

// function isTheWinner (nome, cpf){
//   const notPeaple = []
//   if (nome === ganhador.nome && cpf === ganhador.cpf) {
//     return 'É o ganhador!'
//   } else {
//     notPeaple.push(nome)
//     notPeaple.push(cpf)
//     console.log(notPeaple)
//     console.log(notPeaple.length)
//     return `Não é o ganhador: ${notPeaple}`
//   }
// }

// r = isTheWinner('Adamastor', '123.321.789-98')
// r = isTheWinner('Adamastorii', '123.321.789-98')
// console.log(r)

// let listaAlunos = [
//   {
//     nome: 'João',
//     curso: 'Ciencia da Computação',
//     turno: 'Noturno',
//     mediaCorte: 7,
//     materias: [
//       {
//         nome: 'Calculo I',
//         avaliacoes: [6, 8, 10, 8]
//       },
//       {
//         nome: 'Pensamento Computacional',
//         avaliacoes: [6, 8, 6, 8]
//       },
//       {
//         nome: 'Linguagem Orientada a Objetos',
//         avaliacoes: [7, 8, 9, 10]
//       },
//       {
//         nome: 'Arquitetura de Organização de Computadores',
//         avaliacoes: [6, 8, 7, 8]
//       }
//     ]
//   }
// ]

// function mediaTotal(listaAlunos) {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < listaAlunos.length; i++) {
//     const mat = listaAlunos[i].materias;

//     for (let j = 0; j < mat.length; j++) {
//       const r = mat[j].avaliacoes;
//       for (let x = 0; x < r.length; x++) {
//         total += r[x];
//         count++;
//       }
      
//     }
//   }

//   return `Média total: ${total / count}`;
// }

// const r = mediaTotal(listaAlunos);
// console.log(r);

// function mediaMaterias(listaAlunos) {
//   let medias = {};

//   for (let i = 0; i < listaAlunos.length; i++) {
//     const mat = listaAlunos[i].materias;

//     for (let j = 0; j < mat.length; j++) {
//       const r = mat[j].avaliacoes;
//       const nomeMateria = mat[j].nome;
//       let soma = 0;

//       for (let x = 0; x < r.length; x++) {
//         soma += r[x];
//       }

//       const media = soma / r.length;
//       medias[nomeMateria] = media;
//     }
//   }

//   return medias;
// }

// const medias = mediaMaterias(listaAlunos);
// console.log(medias);

// const barbearia = {
//   cortes: [
//     { id: 1, tipo: "Militar", valor: 20.0 },
//     { id: 2, tipo: "Samurai", valor: 35.0 },
//     { id: 3, tipo: "Pompadour", valor: 20 },
//     { id: 4, tipo: "Moicano", valor: 0 },
//     { id: 5, tipo: "Razor part", valor: 0 },
//   ],

//   barbas: [
//     { id: 1, tipo: "Capitão Jack", valor: 20.0 },
//     { id: 2, tipo: "Van Dyke", valor: 20.0 },
//     { id: 3, tipo: "Barba Média", valor: 20.0 },
//     { id: 4, tipo: "Barba Baixa", valor: 20.0 },
//     { id: 5, tipo: "Barba Zero", valor: 15.0 },
//   ],
//   estaAberto: true,
// };

// function buscaCortePorId(id) {

//   for (let i = 0; i < barbearia.cortes.length; i++) {
//     if (barbearia.cortes[i].id === id) {
//       let res = barbearia.cortes[i]
//       return res
//     }
//   }
// }
// a = buscaCortePorId(1)
// console.log(a)

// function buscaBarbaPorId(id) {
//   for (let i = 0; i < barbearia.barbas.length; i++) {
//     if (barbearia.barbas[i].id === id) {
//       let res = barbearia.barbas[i]
//       return res
//     }
//   }
// }
// b = buscaBarbaPorId(2)
// console.log(b)

// function verificaStatusBarbearia() {
//   if (barbearia.estaAberto === true){
//     return "Estamos abertos"
//   } else {
//     return "Estamos fechados"
//   }
// }
// c = verificaStatusBarbearia()
// console.log(c)

// function retornaTodosCortes() {
//   for (let i = 0; i < barbearia.cortes.length; i++) {
//       return barbearia.cortes
//   }
// }
// d = retornaTodosCortes()
// console.log(d)

// function retornaTodasBarbas() {
//   for (let i = 0; i < barbearia.barbas.length; i++) {
//     return barbearia.barbas
//   }
// }
// e = retornaTodasBarbas()
// console.log(e)

// function criaPedido(nomeCliente, corteId, barbaId) {
//   let corte = buscaCortePorId(corteId)
//   let barba = buscaBarbaPorId(barbaId)
//   let pedido = {nome: nomeCliente, pedidoCorte: corte, pedidoCortePreco:30, pedidoBarba: barba, pedidoBarbaPreco:20}
//   return pedido
// }
// f = criaPedido('Joao', 1,2)
// console.log(f)

// function atualizaPedido(lista, id, valor, tipo) {
//   lista = [{id, valor, tipo}]
//   for (let i = 0; i < barbearia.cortes.length; i++) {
//     if (barbearia.cortes[i].id === id) {
//       barbearia.cortes[i].tipo = tipo
//       barbearia.cortes[i].valor = valor
//       return 'Item atualizado com sucesso'
//     } else {
//       return 'Entrada de valores inválida'
//     }
//   }
// }
// g = atualizaPedido({id: 1, valor: 15.0, tipo: 'Americano'}, 1, 15.0, 'Americano')
// console.log(g)
// console.log(barbearia)
// function calculaTotal(pedido) {
//   let f = criaPedido()
//   return f.pedidoCortePreco + f.pedidoBarbaPreco
// }
// h = calculaTotal()
// console.log(h)

// Solicitar ao usuário que entre com nome, idade e se está acompanhado
// var nome = prompt("Digite seu nome:");
// var idade = parseInt(prompt("Digite sua idade:"));
// var acompanhado = prompt("Você está acompanhado? (s/n)")

// if (acompanhado === "s") {
//   and
//   acompanhado = true;
// } else if (acompanhado === "n") {
//   acompanhado = false;
// } else {
//   alert("Resposta inválida. Digite 's' para sim ou 'n' para não.");
//   // Encerrar o programa ou retornar um valor padrão, caso necessário
// }

// if (idade < 18) {
//   alert("Entrada não está permitida para " + nome + ": Menor de idade.");
// } else {
//   // Verificar se está acompanhado
//   if (acompanhado) {
//     alert("Entrada permitida para " + nome + ": Conceder desconto.");
//   } else {
//     alert("Entrada permitida para " + nome + ": Valor integral.");
//   }
// }

// function gerarNumeroAleatorio() {
//   return Math.floor(Math.random() * 20) + 1;
// }

// function verificarPalpite(numeroAleatorio, palpite) {
//   let tentativa = 1;

//   while (numeroAleatorio !== palpite) {
//     alert("Tente novamente.");
//     palpite = parseInt(prompt("Digite seu palpite (um número de 1 a 20):"));
//     tentativa++;
//   }

//   alert("Você acertou na tentativa " + tentativa + ".");
// }

// const numeroAleatorio = gerarNumeroAleatorio();
// let palpite = parseInt(prompt("Digite seu palpite (um número de 1 a 20):"));

// verificarPalpite(numeroAleatorio, palpite);
// function pillars(num_pill, dist, width) {
//   if (num_pill < 2) return 0;
//   const widthAllPillars = (num_pill - 2) * width;
//   const distAll = (num_pill - 1) * (dist * 100);
  
//   return distAll + widthAllPillars;
// }

// function dutyFree(normPrice, discount, hol){
//   const economiaPorGarrafa = Math.floor(normPrice * discount / 100);
//   const quantidadeGarrafas = Math.ceil(hol / economiaPorGarrafa);
//   return quantidadeGarrafas;
  
// }
// r = dutyFree(24,35,3000)
// console.log(r)

// let slenzie = {
//   nameEvent: "",
//   questions: []
// }
// let question = {
//   user: "",
//   userQuestion: "",
//   vote:0
// }

// function createEvent (slenzie,str) {
//   if (str.length <= 5 && typeof str == 'string') {
//     slenzie.nameEvent = str
//     return slenzie
//   } else {
//     return "The input value is invalid"
//   }
// }
// r = createEvent(slenzie, 'ola')

// function addQuestion(slenzie, question) {
//     slenzie.questions = question
//     return question
// }
// q = addQuestion(slenzie, {user: 'joao', userQuestion: 'why?', vote: 1})

// function addVoteToQuestion(slenzie) {
// for (let i = 0; i < slenzie.questions.length; i++){
//   let quest = slenzie.questions[i]
//   return quest
//   }
// }
// s = addVoteToQuestion(slenzie)
// console.log(s)
// console.log(slenzie)

// const data = [
//   {
//     name: 'Hotel Cancun',
//     country: 'México',
//     price: 250,
//     isOpen: true,
//     toBook: [
//       {
//         date: '24/05/2023',
//         isAvaliable: true,
//       },
//       {
//         date: '30/07/2023',
//         isAvaliable: false,
//       },
//       {
//         date: '04/01/2024',
//         isAvaliable: true,
//       },
//     ],
//   },
//   {
//     name: 'Pousada do Zé',
//     country: 'Brasil',
//     price: 130,
//     isOpen: true,
//     toBook: [
//       {
//         date: '17/03/2023',
//         isAvaliable: false,
//       },
//       {
//         date: '10/05/2023',
//         isAvaliable: false,
//       },
//       {
//         date: '21/06/2024',
//         isAvaliable: false,
//       },
//     ],
//   },
//   {
//     name: 'Copacabana Palace',
//     country: 'Brasil',
//     price: 350,
//     isOpen: false,
//     toBook: [
//       {
//         date: '15/01/2023',
//         isAvaliable: true,
//       },
//       {
//         date: '04/02/2023',
//         isAvaliable: true,
//       },
//       {
//         date: '09/08/2024',
//         isAvaliable: false,
//       },
//     ],
//   },
//   {
//     name: 'Empire Hotel',
//     country: 'Estados Unidos',
//     price: 400,
//     isOpen: false,
//     toBook: [
//       {
//         date: '31/12/2022',
//         isAvaliable: false,
//       },
//       {
//         date: '04/02/2023',
//         isAvaliable: false,
//       },
//       {
//         date: '29/07/2024',
//         isAvaliable: false,
//       },
//     ],
//   },
// ];
// console.log(data[2].toBook[0])
// //Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

// //1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
// function filterCountry(array) {
//   return array.filter(array => array.country === 'Brasil' )
// }
// console.log(filterCountry(data));

// // 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
// function filterPrice(array) {
//   return array.filter(array => array.price >= 200 )
// }
// console.log(filterPrice(data));

// //3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
// function filterIsOpen(array) {
//   return array.filter(array => array.isOpen === true )
// }
// console.log(filterIsOpen(data));

// //DESAFIO
// //4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
// function filterHotelName(array) {
//   return array.filter(array => array.name === 'Copacabana Palace' )
// }

// function filterToBook() {
//   const hotel = filterHotelName(data);
//   return hotel.toBook.filter( array => array.isAvaliable)
// }
// console.log(filterToBook());

const products = [
  {
    name: 'Camisa Polo',
    size: 'G',
    price: 90,
    sale: true,
  },
  {
    name: 'Casaco de Couro',
    size: 'M',
    price: 350,
    sale: true,
  },
  {
    name: 'Calça',
    size: 'GG',
    price: 80,
    sale: false,
  },
  {
    name: 'Jaqueta Jeans',
    size: 'P',
    price: 200,
    sale: false,
  },
  {
    name: 'Moletom',
    size: 'GG',
    price: 180,
    sale: false,
  },
  {
    name: 'Camisa Regata',
    size: 'M',
    price: 60,
    sale: true,
  },
];

//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  return array.reduce((ac, cur) =>  ac + cur)
}
console.log(sumNumbers(numbers));

//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  return array.reduce((ac, cur) =>  ac + cur.price,0)
}
console.log(totalProducts(products));

//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  let gg = array.filter(elem => elem.size === 'GG')
  return gg.reduce((ac, cur) =>  ac + cur.price,0)
}
console.log(totalProductsSize(products));

//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
function totalProductsSale(array) {
  let gg = array.filter(elem => elem.sale)
  let res = gg.reduce((ac, cur) => (ac + cur.price) - cur.price * 0.5 ,0)
  return res
}
console.log(totalProductsSale(products));