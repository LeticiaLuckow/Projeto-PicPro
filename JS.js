console.log('ola, mundo')

//variaveis
let nome = 'hudson'

const idade = 10

//numeros
// let numero1 = 30
// let numero2 = 10
// let resultado = numero1 + numero2

//tipos de dados
//strings

let primeiroNome = 'hudson'
let segundoNome = 'gabriel'

let primeiroNumero = 10
let segundoNumero = 30

//concatenar
console.log(primeiroNumero + segundoNumero)

//boleano (verdadeiro e falso)

let verdadeiro = true
let falso = false

//objetos
//array
let listaNomes = ['hudson', 'maria', 'daniel', 'amanda']

console.log(listaNomes)
console.log(listaNomes[3])

const hudson = {
  nome: 'hudson',
  cidade: 'curitiba',
  idade: '25'
}

//operadores basicos
// + - * /

// condicional(if=se /else=senão)

// EXEMPLO 1
if (10 == 12) {
  console.log('os numeros são iguais')
} else {
  console.log('os numeros não são iguais')
}

// EXEMPLO 2

// const amanda2 = {
//   nome: 'amanda',
//   idade: 18
// }
// if (amanda2.idade >= 18) {
//   console.log('essa pessoa atingiu idade')
// } else {
//   console.log('essa pessoa nao atingiu idade')
// }

// funcoes no js
//declarando
function soma() {
  let numero1 = 20
  let numero2 = 30

  console.log(numero1 + numero2)
}
// chamando funcao
soma()

// estrutura repeticao loop

let filaAtendimento = ['hudson', 'vitor', 'guilherme', 'amanda', 'maria']
//incremento(i ou indice)
//for(contador; condicional, incremento)
console.log(filaAtendimento)

for (let i = 0; i < filaAtendimento.length; i++) {
  console.log(filaAtendimento[i])
}

// DOM
