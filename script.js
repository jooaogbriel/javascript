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

function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    var f = GenerateFibonacci(15);
    console.log(f);