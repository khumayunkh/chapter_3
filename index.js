// let x= " test ".trim() //удаляет пробелы в начале и конце
// console.log(x)

// x = ' test'.trimStart() //удаляет пробелы в начале
// x = 'test '.trimEnd() //удаляет пробелы в конце 

// y = "test".padStart(3) //добавляет пробелы слева до длины 3
// console.log(y)

// y = 'test'.padEnd(3) //добавляет пробелы справа до длины 3

// let x = [1, 2, 3, 4, 5]
// let y = [6, 7, 8, 9]

// console.log(x.concat(y)) // add "y" to "x"

// console.log('l'.repeat(2)) //  repeat 'l' two times

// let name = "Humoyun"
// let x = `hello, my name is ${name}`
// console.log(x)

// if((x === 0 && y === 0) || !(z === 0)){
//     // х и у равны нулю или z не равно нулю
// }

// null == undefined // true
// null === undefined // false

// Symbols

// let x = Symbol("Humoyun")
// let y = Symbol("Humoyun")
// console.log(x === y) //false

// let a = Symbol.for("Humoyun")
// let b = Symbol.for("Humoyun")
// console.log(a) //Symbol("Humoyun")
// let c = Symbol.keyFor(b)
// console.log(c) //Humoyun

// console.log(a === b)  //true


// let person = {
//     mane : "Humoyun",
//     [Symbol.for('password')] :  'HUMOHUMO',
//     [Symbol.for('age')] :  19
// }

// console.log(person[Symbol.for('password')]) //HUMOHUMO
// console.log(Object.getOwnPropertySymbols(person))

// let a = Symbol.for('Humoyun')
// let b = Symbol.keyFor(a)
// console.log(b)
// let s = "hello"
// console.log(s.toUpperCase()) // HELLO
// console.log(s) //hello 

// let o = {x:1} 
// let d = { x : 1} 
// console.log(o === d) //false

// a = [1]
// // b = [1]
// // console.log(a === b) //false

// let b = a
// b[1] = 2
// console.log(a[1]) //2
// console.log(a === b) //true

// let a = [1, 2, 3]
// let b = []
// function array(a,b){
//     for(i = 0; i<a.length; i++){
//         b[i] = a[i]
//     }
//     console.log(a === b) //false
//     return console.log(b) // [1, 2, 3]
// }

// array(a,b)

// console.log('7' * '4')  //28

// let a = 13
// console.log(a.toString())

// const x // error
// let x //undefined but not error

// let x = 3, y = x * x
// console.log(y) // y = 9; x = 3
// x = 5
// console.log(x) // x = 5

//const x = 1
// if(x === 1){  
//     let x = 2 /// const x !== let x
//     console.log(x) // 2
// }
// console.log(x) // 1


// let i = 32
// i = 'hello' // it is not error
// console.log(i)


// var r = 5
// function clobal(){
//     r = 7
//     console.log(r) // 7
// }
// console.log(r) // 5
// clobal(r)

// let [x, y] = [4, 5] // equel let x = 4; let y = 5
console.log(x) // x = 4
[x,y] = [3] // x = 3; y = undefined
// let [, x, , y] = [1,2,3,4] // x = 2; y = 4
let [x, ...y] = [1,2,3,4] // x = 1; y = [2, 3, 4]

let [a, [b, c]] = [1, [2, 4], 6] // a = 1; b = 2; c = 4 